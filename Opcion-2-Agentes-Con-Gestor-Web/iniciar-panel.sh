#!/usr/bin/env bash
# Script universal para Mac y Linux
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

echo "=========================================================="
echo "  Iniciando Panel de Control Docente - Economía 5.° año   "
echo "=========================================================="

# Intentar abrir el navegador en segundo plano
(sleep 1 && (open "http://localhost:4123" 2>/dev/null || xdg-open "http://localhost:4123" 2>/dev/null)) &

python3 panel/servidor.py
