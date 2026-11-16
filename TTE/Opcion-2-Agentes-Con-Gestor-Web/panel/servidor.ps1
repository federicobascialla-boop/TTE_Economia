# Servidor local en PowerShell nativo (fallback sin Python ni Node.js)
$ErrorActionPreference = "Continue"
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$BaseDir = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$Port = 4123
$Prefix = "http://localhost:$Port/"

$Listener = New-Object System.Net.HttpListener
$Listener.Prefixes.Add($Prefix)
try {
    $Listener.Start()
} catch {
    Write-Host "Puerto $Port no disponible o ya en uso: $_" -ForegroundColor Red
    exit 1
}

Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "  PANEL DE CONTROL DOCENTE — ECONOMÍA (5.° AÑO)" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host " Servidor iniciado con éxito (PowerShell nativo)." -ForegroundColor Green
Write-Host " Abrí tu navegador e ingresá a: http://localhost:$Port" -ForegroundColor Yellow
Write-Host " Para detenerlo: cerrá esta ventana o presioná Ctrl + C"
Write-Host "============================================================" -ForegroundColor Cyan

function Send-Response($Response, [byte[]]$Bytes, [string]$ContentType, [int]$StatusCode = 200) {
    $Response.StatusCode = $StatusCode
    $Response.ContentType = $ContentType
    $Response.ContentLength64 = $Bytes.Length
    $Response.AddHeader("Access-Control-Allow-Origin", "*")
    $Response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")
    $Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
    $Response.Close()
}

function Send-Json($Response, $Obj, [int]$StatusCode = 200) {
    $Json = $Obj | ConvertTo-Json -Depth 10
    $Bytes = [System.Text.Encoding]::UTF8.GetBytes($Json)
    Send-Response $Response $Bytes "application/json; charset=utf-8" $StatusCode
}

function Send-Text($Response, [string]$Text, [int]$StatusCode = 200, [string]$ContentType = "text/html; charset=utf-8") {
    $Bytes = [System.Text.Encoding]::UTF8.GetBytes($Text)
    Send-Response $Response $Bytes $ContentType $StatusCode
}

function Get-AgentFiles([string]$Subfolder) {
    $DirPath = Join-Path $BaseDir "salidas\$Subfolder"
    if (-not (Test-Path $DirPath)) { return @() }
    $Result = @()
    $Files = Get-ChildItem -Path $DirPath -Filter "*.md" -File | Sort-Object LastWriteTime -Descending
    foreach ($File in $Files) {
        if ($File.Name.StartsWith(".")) { continue }
        $Content = [System.IO.File]::ReadAllText($File.FullName, [System.Text.Encoding]::UTF8)
        $Estado = "BORRADOR"
        if ($Content -match "(?i)Estado:\s*(APROBADO|BORRADOR)") {
            $Estado = $Matches[1].ToUpper()
        }
        $Fecha = ""
        if ($Content -match "Fecha:\s*([^\r\n]+)") {
            $Fecha = $Matches[1].Trim()
        }
        $Resumen = ""
        if ($Content -match "Pedido:\s*([^\r\n]+)") {
            $Resumen = $Matches[1].Trim()
        }
        $Epoch = ([DateTimeOffset]$File.LastWriteTimeUtc).ToUnixTimeSeconds()
        $Result += [PSCustomObject]@{
            filename = $File.Name
            fecha    = $Fecha
            resumen  = $Resumen
            estado   = $Estado
            mtime    = $Epoch
            size     = $Content.Length
            content  = $Content
        }
    }
    return ,$Result
}

while ($Listener.IsListening) {
    try {
        $Context = $Listener.GetContext()
        $Req = $Context.Request
        $Res = $Context.Response
        $Path = [System.Uri]::UnescapeDataString($Req.Url.AbsolutePath)

        if ($Req.HttpMethod -eq "OPTIONS") {
            $Res.StatusCode = 200
            $Res.AddHeader("Access-Control-Allow-Origin", "*")
            $Res.AddHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
            $Res.AddHeader("Access-Control-Allow-Headers", "Content-Type")
            $Res.Close()
            continue
        }

        if ($Req.HttpMethod -eq "GET") {
            if ($Path -eq "/" -or $Path -eq "/index.html") {
                $HtmlPath = Join-Path $BaseDir "panel\index.html"
                if (Test-Path $HtmlPath) {
                    $Html = [System.IO.File]::ReadAllText($HtmlPath, [System.Text.Encoding]::UTF8)
                    Send-Text $Res $Html 200
                } else {
                    Send-Text $Res "<h1>Error: panel/index.html no encontrado</h1>" 404
                }
                continue
            }
            if ($Path -eq "/diapositivas.html") {
                $HtmlPath = Join-Path $BaseDir "panel\diapositivas.html"
                if (Test-Path $HtmlPath) {
                    $Html = [System.IO.File]::ReadAllText($HtmlPath, [System.Text.Encoding]::UTF8)
                    Send-Text $Res $Html 200
                } else {
                    Send-Text $Res "<h1>Error: panel/diapositivas.html no encontrado</h1>" 404
                }
                continue
            }
            if ($Path.StartsWith("/screenshots/")) {
                $ImgName = $Path.Substring("/screenshots/".Length)
                $ImgPath = Join-Path $BaseDir "panel\screenshots\$ImgName"
                if (Test-Path $ImgPath -PathType Leaf) {
                    $Bytes = [System.IO.File]::ReadAllBytes($ImgPath)
                    Send-Response $Res $Bytes "image/png" 200
                    continue
                }
            }
            if ($Path -eq "/favicon.ico") {
                $Res.StatusCode = 204
                $Res.Close()
                continue
            }
            if ($Path -eq "/api/estado") {
                $PedidoFile = Join-Path $BaseDir "entradas\pedido.md"
                $PedidoRaw = ""
                $PedidoParsed = @{}
                if (Test-Path $PedidoFile) {
                    $PedidoRaw = [System.IO.File]::ReadAllText($PedidoFile, [System.Text.Encoding]::UTF8)
                    foreach ($Line in ($PedidoRaw -split "\r?\n")) {
                        if ($Line -match "^\s*-\s*\*\*([^:]+):\*\*\s*(.*)$") {
                            $PedidoParsed[$Matches[1].Trim()] = $Matches[2].Trim()
                        }
                    }
                }
                $PedFiles = @(Get-AgentFiles "pedagogo")
                $DisFiles = @(Get-AgentFiles "disenador")
                $GamFiles = @(Get-AgentFiles "gamificador")

                $LatestPed = if ($PedFiles.Count -gt 0) { $PedFiles[0] } else { $null }
                $LatestDis = if ($DisFiles.Count -gt 0) { $DisFiles[0] } else { $null }
                $LatestGam = if ($GamFiles.Count -gt 0) { $GamFiles[0] } else { $null }

                $PedAprobado = ($null -ne $LatestPed -and $LatestPed.estado -eq "APROBADO")
                $DisAprobado = ($null -ne $LatestDis -and $LatestDis.estado -eq "APROBADO")
                $GamListo = ($null -ne $LatestGam)

                $Unidades = @(
                    "Período diagnóstico — Unidad introductoria",
                    "Unidad 1 — La microeconomía. Aspectos generales",
                    "Unidad 2 — La microeconomía. Análisis de los mercados",
                    "Unidad 3 — La microeconomía. Elementos para el análisis de la distribución del ingreso",
                    "Unidad 4 — La macroeconomía. Herramientas conceptuales para el análisis del ingreso nacional",
                    "Unidad 5 — La macroeconomía. Las políticas macroeconómicas",
                    "Unidad 6 — La macroeconomía. Oferta y demanda agregada"
                )

                $Data = [PSCustomObject]@{
                    ok = $true
                    pedido = [PSCustomObject]@{
                        raw    = $PedidoRaw
                        parsed = $PedidoParsed
                    }
                    unidades = $Unidades
                    pedagogo = [PSCustomObject]@{
                        latest   = $LatestPed
                        aprobado = $PedAprobado
                        archivos = $PedFiles
                    }
                    disenador = [PSCustomObject]@{
                        latest    = $LatestDis
                        aprobado  = $DisAprobado
                        archivos  = $DisFiles
                        bloqueado = (-not $PedAprobado)
                    }
                    gamificador = [PSCustomObject]@{
                        latest    = $LatestGam
                        listo     = $GamListo
                        archivos  = $GamFiles
                        bloqueado = (-not $DisAprobado)
                    }
                }
                Send-Json $Res $Data 200
                continue
            }
            if ($Path.StartsWith("/api/archivo/")) {
                $Parts = $Path.Trim('/').Split('/')
                if ($Parts.Length -ge 4) {
                    $Agente = $Parts[2]
                    $Filename = $Parts[3]
                    $FilePath = Join-Path $BaseDir "salidas\$Agente\$Filename"
                    if (Test-Path $FilePath -PathType Leaf) {
                        $Content = [System.IO.File]::ReadAllText($FilePath, [System.Text.Encoding]::UTF8)
                        Send-Json $Res ([PSCustomObject]@{ ok = $true; filename = $Filename; content = $Content }) 200
                        continue
                    }
                }
                Send-Json $Res ([PSCustomObject]@{ ok = $false; error = "Archivo no encontrado" }) 404
                continue
            }
            Send-Text $Res "No encontrado" 404 "text/plain; charset=utf-8"
            continue
        }

        if ($Req.HttpMethod -eq "POST") {
            $Reader = New-Object System.IO.StreamReader($Req.InputStream, [System.Text.Encoding]::UTF8)
            $RawBody = $Reader.ReadToEnd()
            $Payload = if ($RawBody) { $RawBody | ConvertFrom-Json } else { [PSCustomObject]@{} }

            if ($Path -eq "/api/pedido") {
                $PedidoFile = Join-Path $BaseDir "entradas\pedido.md"
                if ($Payload.raw) {
                    $Content = $Payload.raw.Trim() + "`n"
                } else {
                    $UT = if ($Payload.unidad_tema) { $Payload.unidad_tema.Trim() } else { "Unidad 1 — Elasticidad precio de la demanda" }
                    $CG = if ($Payload.curso_grupo) { $Payload.curso_grupo.Trim() } else { "5.º año, orientación Economía. Grupo de ritmos heterogéneos" }
                    $TI = if ($Payload.tiempo) { $Payload.tiempo.Trim() } else { "1 clase de 80 minutos" }
                    $MO = if ($Payload.modalidad) { $Payload.modalidad.Trim() } else { "trabajo en grupos de 4" }
                    $CH = if ($Payload.cuesta_hoy) { $Payload.cuesta_hoy.Trim() } else { "los ejercicios del manual usan ejemplos lejanos" }
                    $RE = if ($Payload.restricciones) { $Payload.restricciones.Trim() } else { "sin computadoras en el aula; hay proyector" }
                    $EV = if ($Payload.evitar) { $Payload.evitar.Trim() } else { "ejemplos con marcas reales o con cifras que no pueda verificar" }
                    $OB = if ($Payload.observaciones) { $Payload.observaciones.Trim() } else { "(opcional)" }
                    $Content = "# Pedido del docente`n`nEditá este archivo antes de lanzar al Agente 1. Es lo único que tenés que escribir para arrancar.`n`n- **Unidad y tema:** $UT`n- **Curso y grupo:** $CG`n- **Tiempo disponible:** $TI`n- **Modalidad:** $MO`n- **Qué me cuesta hoy:** $CH`n- **Restricciones:** $RE`n- **Algo que quiero evitar:** $EV`n- **Observaciones:** $OB`n`n> Guardado desde el Panel de Control Docente.`n"
                }
                [System.IO.File]::WriteAllText($PedidoFile, $Content, [System.Text.Encoding]::UTF8)
                Send-Json $Res ([PSCustomObject]@{ ok = $true; message = "Pedido guardado correctamente." }) 200
                continue
            }
            if ($Path -eq "/api/aprobar" -or $Path -eq "/api/desaprobar") {
                $Aprobar = ($Path -eq "/api/aprobar")
                $Agente = $Payload.agente
                $Filename = $Payload.filename
                $FilePath = Join-Path $BaseDir "salidas\$Agente\$Filename"
                if (-not (Test-Path $FilePath)) {
                    Send-Json $Res ([PSCustomObject]@{ ok = $false; error = "Archivo no encontrado" }) 404
                    continue
                }
                $Content = [System.IO.File]::ReadAllText($FilePath, [System.Text.Encoding]::UTF8)
                $NuevoEstado = if ($Aprobar) { "APROBADO" } else { "BORRADOR" }
                if ($Content -match "(?i)Estado:\s*(APROBADO|BORRADOR)") {
                    $Content = [regex]::Replace($Content, "(?i)Estado:\s*(APROBADO|BORRADOR)", "Estado: $NuevoEstado", 1)
                } else {
                    $Content = "Estado: $NuevoEstado`n" + $Content
                }
                [System.IO.File]::WriteAllText($FilePath, $Content, [System.Text.Encoding]::UTF8)
                Send-Json $Res ([PSCustomObject]@{ ok = $true; agente = $Agente; filename = $Filename; nuevo_estado = $NuevoEstado; message = "El archivo ahora está en estado $NuevoEstado." }) 200
                continue
            }
            if ($Path -eq "/api/guardar-archivo") {
                $Agente = $Payload.agente
                $Filename = $Payload.filename
                $FilePath = Join-Path $BaseDir "salidas\$Agente\$Filename"
                [System.IO.File]::WriteAllText($FilePath, $Payload.content, [System.Text.Encoding]::UTF8)
                Send-Json $Res ([PSCustomObject]@{ ok = $true; message = "Cambios guardados correctamente." }) 200
                continue
            }
        }
    } catch {
        Write-Host "Error en petición: $_" -ForegroundColor Yellow
    }
}
