#!/bin/bash
# Script de inicio directo para macOS (doble clic)
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"

# Abrir el navegador automáticamente tras 1 segundo
(sleep 1 && open "http://localhost:4123") &

echo "=========================================================="
echo "  Iniciando Panel de Control Docente - Economía 5.° año   "
echo "=========================================================="
python3 panel/servidor.py
