const express = require('express');
const path = require('path');
const app = express();
// const PORT = process.env.PORT || 3000;
const PORT = process.env.PORT || 3001; 


// Middlewares
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos HTML estáticos
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/about.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/projects.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/contact.html'));
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '../views/404.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log('=================================');
    console.log('🚀 PORTAFOLIO PERSONAL INICIADO');
    console.log('=================================');
    console.log(`📍 Puerto: ${PORT}`);
    console.log(`🌐 URL: http://localhost:${PORT}`);
    console.log('=================================');
});