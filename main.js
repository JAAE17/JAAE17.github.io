// Crear elementos flotantes
function createFloatingElements() {
    const container = document.getElementById('floatingElements');
    
    // Crear puntos flotantes
    for (let i = 0; i < 15; i++) {
        const dot = document.createElement('div');
        dot.className = 'floating-dot';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        dot.style.animationDelay = Math.random() * 6 + 's';
        dot.style.animationDuration = (4 + Math.random() * 4) + 's';
        container.appendChild(dot);
    }
    
    // Crear líneas flotantes
    for (let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.className = 'floating-line';
        line.style.top = Math.random() * 100 + '%';
        line.style.animationDelay = Math.random() * 8 + 's';
        line.style.animationDuration = (6 + Math.random() * 4) + 's';
        container.appendChild(line);
    }
}

// Función para descargar CV
function downloadCV() {
    const cvUrl = 'path/to/your/cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Alejandro_Anton_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Funcionalidad de descarga de CV - Cambia la URL por la ruta de tu CV real');
}

// Smooth scroll para los enlaces
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Animación de aparición en scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Función para inicializar observadores
function initializeObservers() {
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
}

// Función para añadir efectos a los botones sociales
function initializeSocialButtons() {
    const socialButtons = document.querySelectorAll('.social-btn');
    
    socialButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Inicializar todas las funcionalidades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Iniciando portafolio de Alejandro Anton...');
    
    // Crear elementos flotantes
    createFloatingElements();
    
    // Inicializar observadores de scroll
    initializeObservers();
    
    // Inicializar efectos de botones sociales
    initializeSocialButtons();
    
    console.log('✅ Portafolio cargado exitosamente - versión estable');
});

// Función para manejar el redimensionamiento de ventana
window.addEventListener('resize', function() {
    const dots = document.querySelectorAll('.floating-dot');
    dots.forEach(dot => {
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
    });
});

// Exportar funciones para uso externo
window.portfolioFunctions = {
    downloadCV,
    createFloatingElements,
    initializeObservers
};