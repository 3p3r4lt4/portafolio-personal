const express = require('express');
const path = require('path');
const router = express.Router();

// Página de Inicio
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Inicio - Portafolio',
        page: 'home',
        user: {
            name: 'Tu Nombre',
            profession: 'Analista de Sistemas Odoo',
            tagline: 'Especialista en desarrollo y mantenimiento de ERP Odoo'
        }
    });
});

// Página Sobre Mí
router.get('/about', (req, res) => {
    const skills = {
        technical: [
            'Desarrollo Odoo (Python, XML)',
            'Mantenimiento de ERP',
            'Despliegue en servidores (Linode, DigitalOcean)',
            'Bases de datos PostgreSQL',
            'JavaScript y Node.js',
            'Sistemas Linux'
        ],
        professional: [
            'Análisis de requerimientos',
            'Documentación técnica',
            'Pruebas de testing',
            'Soporte a usuarios',
            'Gestión de proyectos',
            'Capacitación'
        ]
    };

    res.render('about', {
        title: 'Sobre Mí - Portafolio',
        page: 'about',
        about: {
            title: 'Analista & Desarrollador Odoo',
            description: 'Soy un profesional especializado en el análisis, desarrollo y mantenimiento de sistemas ERP Odoo. Me apasiona crear soluciones que optimicen los procesos empresariales.',
            experience: 'Más de 3 años de experiencia en el ecosistema Odoo, trabajando en implementaciones, desarrollos personalizados y mantenimiento de sistemas en producción.'
        },
        skills: skills
    });
});

// Página de Proyectos
router.get('/projects', (req, res) => {
    const projects = [
        {
            id: 1,
            title: 'Módulo de Inventario Avanzado',
            description: 'Desarrollo de módulo personalizado para gestión de inventarios con tracking en tiempo real.',
            technologies: ['Odoo', 'Python', 'XML', 'PostgreSQL'],
            category: 'odoo',
            features: [
                'Control de stock en tiempo real',
                'Reportes automatizados',
                'Integración con código de barras'
            ]
        },
        {
            id: 2,
            title: 'Sistema de Facturación Electrónica',
            description: 'Implementación de facturación electrónica adaptada a regulaciones locales.',
            technologies: ['Odoo', 'Python', 'API REST', 'XML'],
            category: 'odoo',
            features: [
                'Generación de XML para SUNAT',
                'Comunicación con PSE',
                'Reportes de contingencia'
            ]
        },
        {
            id: 3,
            title: 'Dashboard de Analytics',
            description: 'Panel de control personalizado para métricas empresariales.',
            technologies: ['Odoo', 'Python', 'JavaScript', 'Chart.js'],
            category: 'odoo',
            features: [
                'Métricas en tiempo real',
                'Gráficos interactivos',
                'Exportación de datos'
            ]
        },
        {
            id: 4,
            title: 'Migración a Servidor Cloud',
            description: 'Despliegue y migración de instancia Odoo a Linode.',
            technologies: ['Linux', 'Docker', 'Nginx', 'PostgreSQL'],
            category: 'deployment',
            features: [
                'Configuración de servidor',
                'Backup automatizado',
                'Monitorización de recursos'
            ]
        }
    ];

    res.render('projects', {
        title: 'Proyectos - Portafolio',
        page: 'projects',
        projects: projects
    });
});

// Página de Contacto
router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contacto - Portafolio',
        page: 'contact',
        contactInfo: {
            email: 'tu.email@ejemplo.com',
            phone: '+51 XXX XXX XXX',
            location: 'Lima, Perú',
            linkedin: 'linkedin.com/in/tunombre',
            github: 'github.com/tuusuario'
        }
    });
});

// Manejar envío de formulario de contacto
router.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Aquí puedes integrar con un servicio de email
    console.log('Nuevo mensaje de contacto:');
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Asunto:', subject);
    console.log('Mensaje:', message);
    
    res.json({
        success: true,
        message: '¡Mensaje enviado correctamente! Te contactaré pronto.'
    });
});

module.exports = router;