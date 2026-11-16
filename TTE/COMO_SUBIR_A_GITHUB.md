# 🌐 Cómo Publicar este Proyecto en GitHub Pages (Gratis)

El proyecto ya está **100 % preparado** con:
- **`index.html`** en la raíz (Portal Principal con acceso directo al Gestor Web, las Diapositivas, las 2 Memorias y los paquetes ZIP).
- **Modo Híbrido (Offline + Servidor Local + GitHub Pages)** en `Opcion-2-Agentes-Con-Gestor-Web/panel/index.html` y `generador.js`:
  - Cuando lo usás en tu computadora con `iniciar-panel.bat` (o haciendo doble clic directamente en `index.html` sin conexión a Internet), funciona 100 % offline.
  - Cuando lo subís a **GitHub Pages**, funciona desde cualquier navegador o celular del mundo sin necesitar servidores pagos.
- **`.nojekyll`**: Archivo especial para que GitHub Pages publique todas las carpetas sin bloquear nada.

---

## 🚀 Opción A: Subirlo desde la página web de GitHub (Sin usar consola)

1. Entrá a [github.com](https://github.com) con tu cuenta y tocá el botón **`+` (arriba a la derecha) → `New repository`**.
2. Ponele un nombre (por ejemplo: `agentes-economia-5to`), elegí **`Public`**, tildá **`Add a README file`** y hacé clic en **`Create repository`**.
3. Adentro de tu repositorio recién creado, hacé clic en **`Add file` → `Upload files`**.
4. Arrastrá todos los archivos y carpetas de esta carpeta **`TTE`** hacia el navegador y abajo de todo hacé clic en el botón verde **`Commit changes`**.
5. Por último, activá la página web:
   - Arriba en tu repositorio, entrá a la pestaña **`Settings`** (⚙️).
   - En el menú de la izquierda, hacé clic en **`Pages`**.
   - Donde dice **Branch**, cambiá `None` por **`main`** (y dejá `/(root)`), y hacé clic en **`Save`**.
6. ¡Listo! En 1 minuto arriba en esa misma pantalla te va a aparecer el link público:
   `https://tu-usuario.github.io/agentes-economia-5to/`

---

## 💻 Opción B: Subirlo por Git desde la terminal (El repositorio local ya está inicializado)

Si tenés Git o GitHub Desktop instalado en tu PC, esta carpeta ya tiene el repositorio Git inicializado y el commit listo en la rama `main`. Solo tenés que crear un repositorio vacío en GitHub y ejecutar:

```powershell
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git branch -M main
git push -u origin main
```

Y luego activar **Settings → Pages → Branch: `main`** en GitHub.
