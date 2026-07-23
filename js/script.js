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
        title: "Enlace Satelital Starlink + Monitor de Red",
        description: `
            <h2>Conectividad Satelital y Monitoreo de Red en Mina</h2>

            <h3>🎯 El Problema</h3>
            <p>En una unidad minera a más de 4,000 m s. n. m., sin cobertura de operadores tradicionales, la conectividad depende de un enlace satelital Starlink. La red presentaba desconexiones intermitentes que afectaban operaciones y eran difíciles de diagnosticar: ¿era la antena, el router, el DNS o la red interna?</p>

            <h3>⚙️ La Solución</h3>
            <ul>
                <li><strong>Administración del enlace:</strong> configuración y operación del servicio Starlink como salida principal a internet de la unidad</li>
                <li><strong>Monitor de red como servicio Linux (systemd):</strong> script que registra de forma continua latencia, pérdida de paquetes, resolución DNS y estado del enlace en cada capa</li>
                <li><strong>Diagnóstico por descarte:</strong> con los registros se descartaron la antena y la tarjeta de red como causas, acotando la falla a la capa de red local (router/DNS/segmentación)</li>
            </ul>

            <h3>🛠️ Stack Tecnológico</h3>
            <ul>
                <li><strong>Enlace:</strong> Starlink (terminal, router y app de gestión)</li>
                <li><strong>Monitoreo:</strong> Bash/Python, systemd service, logs estructurados</li>
                <li><strong>Diagnóstico:</strong> ping/mtr, análisis DNS, revisión de topología de red</li>
            </ul>

            <h3>🎓 Lo Que Demuestra</h3>
            <p>Capacidad de operar conectividad crítica en condiciones extremas y de diagnosticar problemas de red con método y evidencia, no a ciegas: instrumentar primero, concluir después.</p>
        `,
        tags: ["Starlink", "Redes", "Linux", "systemd", "Bash", "DNS"]
    },
    2: {
        title: "Detección de Duplicados en Comedor Minero",
        description: `
            <h2>Pipeline Antifraude para Comedor de Mina</h2>

            <h3>🎯 El Problema</h3>
            <p>Los pedidos de almuerzo se registraban por WhatsApp y la asistencia del personal por marcador biométrico — dos sistemas que no se hablaban entre sí. Esto permitía que se registraran y cobraran almuerzos duplicados sin que nadie pudiera detectarlo manualmente.</p>

            <h3>⚙️ La Solución</h3>
            <ul>
                <li><strong>Ingesta automática:</strong> captura de pedidos desde WhatsApp mediante flujos de n8n</li>
                <li><strong>Cruce de fuentes:</strong> correlación de pedidos contra marcaciones biométricas en PostgreSQL</li>
                <li><strong>Detección de duplicados:</strong> reglas que identifican registros dobles por persona y fecha</li>
                <li><strong>Infraestructura reproducible:</strong> todo el stack (n8n + PostgreSQL) desplegado en contenedores Docker</li>
            </ul>

            <h3>🛠️ Stack Tecnológico</h3>
            <ul>
                <li><strong>Automatización:</strong> n8n (flujos de ingesta y procesamiento)</li>
                <li><strong>Base de Datos:</strong> PostgreSQL</li>
                <li><strong>Infraestructura:</strong> Docker / Docker Compose, self-hosted</li>
                <li><strong>Integración:</strong> API de WhatsApp, datos de marcador biométrico</li>
            </ul>

            <h3>🎓 Lo Que Demuestra</h3>
            <p>Integración de sistemas que no fueron diseñados para hablarse, automatización de un control operativo real y despliegue self-hosted de principio a fin.</p>
        `,
        tags: ["n8n", "PostgreSQL", "Docker", "WhatsApp API", "Automatización"]
    },
    3: {
        title: "Respaldo Corporativo Anti-borrado",
        description: `
            <h2>Sistema de Backup con Recuperación ante Borrados</h2>

            <h3>🎯 El Problema</h3>
            <p>La información operativa de la unidad se almacenaba en carpetas compartidas sin protección: un borrado accidental —o malintencionado— significaba pérdida definitiva de información de trabajo.</p>

            <h3>⚙️ La Solución</h3>
            <ul>
                <li><strong>NAS Synology centralizado:</strong> carpetas compartidas de red como repositorio corporativo único</li>
                <li><strong>Papelera de red (#recycle):</strong> primera línea de recuperación ante borrados accidentales</li>
                <li><strong>Snapshots Btrfs programados:</strong> instantáneas diarias automáticas que permiten restaurar el estado previo incluso si alguien vacía la papelera</li>
                <li><strong>Operación con restricciones reales:</strong> el diseño contempla cortes de energía programados de la unidad, que obligan a proteger la persistencia de snapshots</li>
            </ul>

            <h3>🛠️ Stack Tecnológico</h3>
            <ul>
                <li><strong>Hardware:</strong> NAS Synology</li>
                <li><strong>Filesystem:</strong> Btrfs con snapshots programados</li>
                <li><strong>Red:</strong> SMB/carpetas compartidas Windows, permisos por usuario</li>
            </ul>

            <h3>🎓 Lo Que Demuestra</h3>
            <p>Diseño de continuidad de datos con capas de defensa (papelera + snapshots), pensado para las condiciones reales de una operación minera, no para un laboratorio.</p>
        `,
        tags: ["Synology", "Btrfs", "Backups", "SMB", "Continuidad de datos"]
    },
    4: {
        title: "Pipeline de Datos & BI Minero",
        description: `
            <h2>Pipeline de Datos Operativos con Dashboards en Power BI</h2>

            <h3>🎯 El Problema</h3>
            <p>Los datos operativos llegaban dispersos y sin estructura: armar un reporte gerencial implicaba trabajo manual repetitivo y propenso a errores.</p>

            <h3>⚙️ La Solución</h3>
            <ul>
                <li><strong>Extracción y limpieza:</strong> procesamiento de las fuentes con Python (Pandas) y SQL</li>
                <li><strong>Modelado:</strong> estructura de datos pensada para análisis y series de tiempo</li>
                <li><strong>Visualización:</strong> dashboards en Power BI con indicadores operativos para toma de decisiones</li>
                <li><strong>Reproducibilidad:</strong> el pipeline se puede volver a ejecutar de punta a punta con datos nuevos</li>
            </ul>

            <h3>🛠️ Stack Tecnológico</h3>
            <ul>
                <li><strong>Procesamiento:</strong> Python (Pandas, NumPy), SQL</li>
                <li><strong>Visualización:</strong> Power BI (modelado y dashboards)</li>
                <li><strong>Experiencia relacionada:</strong> reportes gerenciales sobre SAP Business One HANA</li>
            </ul>

            <h3>🎓 Lo Que Demuestra</h3>
            <p>El ciclo completo de datos —de fuente cruda a dashboard gerencial— aplicado al contexto minero, donde los reportes alimentan decisiones operativas reales.</p>
        `,
        tags: ["Power BI", "Python", "SQL", "ETL", "Pandas"]
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