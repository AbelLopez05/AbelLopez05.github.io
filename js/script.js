// ============================================
// INICIALIZACIÓN DE ICONOS LUCIDE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    initializeAnimations();
    initializeMobileMenu();
});

// ============================================
// MENÚ MÓVIL HAMBURGUESA
// ============================================
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ============================================
// ANIMACIONES AL HACER SCROLL
// ============================================
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Elementos a animar
    const animatedElements = document.querySelectorAll(
        '.proyecto-card, .skill-category, .highlight-card, .contacto-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 217, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ============================================
// MODAL DE PROYECTOS
// ============================================

// Información detallada de cada proyecto
const proyectosInfo = {
    1: {
        title: "Smart Inventory Management System",
        description: `
            <h2>Sistema Inteligente de Gestión de Inventarios</h2>
            
            <h3>🎯 Descripción del Proyecto</h3>
            <p>Sistema completo de control de inventarios que integra inteligencia artificial para predicción de demanda y optimización de stock. Incluye módulo de ventas, reportes gerenciales en tiempo real y análisis predictivo.</p>
            
            <h3>✨ Características Principales</h3>
            <ul>
                <li><strong>Control de Inventario:</strong> Gestión de entradas/salidas con trazabilidad completa</li>
                <li><strong>Módulo de Ventas:</strong> Proceso de venta integrado con actualización automática de stock</li>
                <li><strong>Predicción con IA:</strong> Análisis de patrones de consumo y predicción de demanda</li>
                <li><strong>Dashboard Ejecutivo:</strong> Visualización de KPIs en tiempo real</li>
                <li><strong>Alertas Inteligentes:</strong> Notificaciones automáticas de stock mínimo y productos críticos</li>
                <li><strong>Reportes Gerenciales:</strong> Generación automática de informes de ventas y rotación</li>
            </ul>
            
            <h3>🛠️ Stack Tecnológico</h3>
            <ul>
                <li><strong>Backend:</strong> Python (Flask/Django)</li>
                <li><strong>Base de Datos:</strong> MySQL con optimización de consultas</li>
                <li><strong>Machine Learning:</strong> Scikit-learn para predicción de demanda</li>
                <li><strong>Visualización:</strong> Dashboard interactivo con gráficos dinámicos</li>
                <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript (AJAX)</li>
            </ul>
            
            <h3>🎓 Aprendizajes Clave</h3>
            <p>Este proyecto me permitió integrar conocimientos de desarrollo backend, bases de datos relacionales, y aplicar conceptos de machine learning a un caso de uso empresarial real. Aprendí a diseñar arquitecturas escalables y a crear interfaces intuitivas para usuarios no técnicos.</p>
        `,
        tags: ["Python", "IA/ML", "MySQL", "Dashboard", "Scikit-learn", "Flask"]
    },
    2: {
        title: "IoT Datacenter Environmental Control",
        description: `
            <h2>Sistema IoT de Control Ambiental para Datacenter</h2>
            
            <h3>🎯 Descripción del Proyecto</h3>
            <p>Sistema de monitoreo y control automatizado de condiciones ambientales en datacenters utilizando Arduino y ESP32. Incluye sensores de temperatura y humedad con activación automática de sistemas de ventilación cuando se superan umbrales críticos (>80% humedad).</p>
            
            <h3>✨ Características Principales</h3>
            <ul>
                <li><strong>Monitoreo en Tiempo Real:</strong> Lectura continua de temperatura y humedad</li>
                <li><strong>Control Automatizado:</strong> Activación inteligente de ventiladores cuando humedad > 80%</li>
                <li><strong>Dashboard Web:</strong> Visualización de datos históricos y estado actual</li>
                <li><strong>Sistema de Alertas:</strong> Notificaciones cuando se superan valores críticos</li>
                <li><strong>Registro de Datos:</strong> Almacenamiento de lecturas para análisis de tendencias</li>
                <li><strong>Interfaz de Control:</strong> Posibilidad de control manual remoto de dispositivos</li>
            </ul>
            
            <h3>🛠️ Stack Tecnológico</h3>
            <ul>
                <li><strong>Hardware:</strong> Arduino Uno, ESP32 (WiFi)</li>
                <li><strong>Sensores:</strong> DHT22 (Temperatura y Humedad)</li>
                <li><strong>Actuadores:</strong> Relés para control de ventiladores y luces</li>
                <li><strong>Comunicación:</strong> Protocolo MQTT para IoT</li>
                <li><strong>Backend:</strong> Node.js / Python para procesamiento de datos</li>
                <li><strong>Dashboard:</strong> Interface web responsiva con gráficos en tiempo real</li>
                <li><strong>Base de Datos:</strong> InfluxDB para series temporales</li>
            </ul>
            
            <h3>⚙️ Funcionamiento</h3>
            <p>El ESP32 lee los sensores cada 5 segundos y envía datos al servidor vía WiFi. Cuando la humedad supera el 80%, el sistema activa automáticamente los ventiladores. El dashboard web permite visualizar datos históricos, configurar umbrales personalizados y controlar dispositivos manualmente si es necesario.</p>
            
            <h3>🎓 Aprendizajes Clave</h3>
            <p>Este proyecto me introdujo al mundo del IoT y la automatización industrial. Aprendí sobre protocolos de comunicación inalámbrica, programación de microcontroladores, diseño de circuitos electrónicos y creación de sistemas de monitoreo en tiempo real.</p>
        `,
        tags: ["Arduino", "ESP32", "IoT", "Sensores DHT22", "MQTT", "Node.js", "Dashboard"]
    },
    3: {
        title: "Librería Online - E-commerce Platform",
        description: `
            <h2>Plataforma E-commerce para Librería</h2>
            
            <h3>🎯 Descripción del Proyecto</h3>
            <p>Plataforma web completa para gestión y venta de libros online. Sistema con catálogo interactivo, carrito de compras, gestión de inventario y panel administrativo para control de pedidos y productos.</p>
            
            <h3>✨ Características Principales</h3>
            <ul>
                <li><strong>Catálogo de Productos:</strong> Búsqueda avanzada por título, autor, género y editorial</li>
                <li><strong>Sistema de Carrito:</strong> Añadir/eliminar productos con cálculo automático de totales</li>
                <li><strong>Gestión de Usuarios:</strong> Registro, login y perfil de cliente</li>
                <li><strong>Panel Administrativo:</strong> CRUD completo de productos, categorías y pedidos</li>
                <li><strong>Control de Inventario:</strong> Actualización automática de stock tras cada venta</li>
                <li><strong>Sistema de Búsqueda:</strong> Filtros múltiples y ordenamiento de resultados</li>
                <li><strong>Diseño Responsive:</strong> Totalmente adaptable a dispositivos móviles</li>
            </ul>
            
            <h3>🛠️ Stack Tecnológico</h3>
            <ul>
                <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript (Vanilla JS)</li>
                <li><strong>Backend:</strong> Python (Flask) / PHP (según implementación)</li>
                <li><strong>Base de Datos:</strong> MySQL con relaciones normalizadas</li>
                <li><strong>Seguridad:</strong> Validación de formularios, SQL injection prevention</li>
                <li><strong>Sesiones:</strong> Manejo de sesiones de usuario y carrito persistente</li>
            </ul>
            
            <h3>📊 Arquitectura de Base de Datos</h3>
            <p>Diseño relacional con tablas principales: usuarios, productos, categorías, pedidos, detalle_pedidos. Implementación de claves foráneas y triggers para mantenimiento de integridad referencial.</p>
            
            <h3>🎓 Aprendizajes Clave</h3>
            <p>Este proyecto me permitió trabajar con un stack completo (full-stack), desde el diseño de base de datos hasta la interfaz de usuario. Aprendí sobre arquitectura MVC, manejo de sesiones, seguridad web y optimización de consultas SQL para mejorar el rendimiento.</p>
        `,
        tags: ["HTML/CSS", "JavaScript", "Python/PHP", "MySQL", "MVC", "E-commerce"]
    }
};

// Función para abrir modal
function openModal(proyectoId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    const proyecto = proyectosInfo[proyectoId];

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${proyecto.title}</h2>
        </div>
        <div class="modal-description">
            ${proyecto.description}
        </div>
        <div class="modal-tags">
            ${proyecto.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Reinicializar iconos en el modal
    setTimeout(() => lucide.createIcons(), 100);
}

// Función para cerrar modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera
document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        closeModal();
    }
});

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// SMOOTH SCROLL MEJORADO
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Ajuste por navbar fija
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// BOTÓN SCROLL TO TOP (Opcional)
// ============================================
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i data-lucide="arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 6rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--color-primary);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 998;
    display: flex;
    align-items: center;
    justify-content: center;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Inicializar iconos del botón scroll to top
lucide.createIcons();

// ============================================
// CONSOLE LOG PERSONALIZADO (Easter Egg)
// ============================================
console.log('%c¡Hola Developer! 👋', 'color: #00D9FF; font-size: 20px; font-weight: bold;');
console.log('%cSi estás revisando mi código, significa que eres de los míos 🚀', 'color: #7C3AED; font-size: 14px;');
console.log('%c¡Conectemos en LinkedIn! linkedin.com/in/alopezt05', 'color: #00D9FF; font-size: 12px;');