@echo off
chcp 65001 >nul
title Panel de Control Docente - Economia (5to ano)
cd /d "%~dp0"
echo ==========================================================
echo   Iniciando Panel de Control Docente - Economia 5. ano   
echo ==========================================================
echo Abriendo navegador en http://localhost:4123...

REM Abrir navegador con una leve pausa en segundo plano para dar tiempo a que levante el servidor
start /b cmd /c "timeout /t 1 /nobreak >nul & start http://localhost:4123"

REM 1. Intentar con Node.js (instalado en el sistema)
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    node "panel\servidor.js"
    goto :fin
)

REM 2. Intentar con Python real (verificando que no sea el alias vacio de Microsoft Store)
python --version >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    python "panel\servidor.py"
    goto :fin
)

REM 3. Fallback universal para Windows: PowerShell nativo (no requiere instalar nada)
powershell -NoProfile -ExecutionPolicy Bypass -File "panel\servidor.ps1"

:fin
pause
