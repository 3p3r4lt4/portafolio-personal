# Portafolio Personal — Eduardo Peralta

Portafolio profesional de **Analista de Sistemas & Desarrollador Odoo**, construido con **React 18 + Vite** y listo para desplegar en **Netlify**.

## ✨ Características

- SPA en React con secciones: Inicio, Sobre mí, Servicios, Habilidades, Proyectos (con filtros), Experiencia y Contacto
- Diseño 100% responsive (móvil, tablet y escritorio) con menú hamburguesa
- Modo oscuro / claro (recuerda la preferencia del usuario)
- Animaciones al hacer scroll (respeta `prefers-reduced-motion`)
- Formulario de contacto con **Netlify Forms** (sin backend, con protección anti-spam)
- SEO básico, favicon y cabeceras de seguridad/caché

## 🛠️ Tecnologías

React · Vite · JavaScript · CSS moderno · lucide-react · Netlify

## 🚀 Desarrollo local

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # genera /dist
npm run preview   # previsualiza el build
```

## ✏️ Personalizar contenido

Todo el contenido está en **`src/data/profile.js`**: nombre, datos de contacto, servicios, habilidades, proyectos y experiencia.
Busca los comentarios `TODO` para reemplazar email, teléfono, LinkedIn y empresas.

- **Foto:** coloca tu imagen en `public/` (ej. `public/foto.jpg`) y en `profile.js` pon `photo: '/foto.jpg'`.
- **CV:** coloca el PDF en `public/` y pon `cv: '/cv.pdf'`.

## ☁️ Despliegue en Netlify

1. Sube los cambios a GitHub.
2. En [app.netlify.com](https://app.netlify.com) → **Add new site → Import an existing project** → elige GitHub y este repositorio.
3. Netlify detecta `netlify.toml` automáticamente:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. **Deploy**. Cada `git push` a `main` redepliega el sitio.
5. Los mensajes del formulario aparecen en **Site → Forms** (puedes activar notificaciones por email ahí).

## 📁 Estructura

```
├── index.html            # HTML base + formulario oculto para Netlify Forms
├── netlify.toml          # Configuración de build, redirects y headers
├── public/               # Archivos estáticos (favicon, foto, CV)
└── src/
    ├── components/       # Secciones de la página
    ├── data/profile.js   # ✏️ Contenido editable
    ├── hooks/            # Animaciones de scroll
    └── styles/global.css # Estilos y temas
```
