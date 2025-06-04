
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

// Función para descargar CV (simulada)
function downloadCV() {
    // Aquí puedes cambiar la URL por la de tu CV real
    const cvUrl = 'path/to/your/cv.pdf';
    
    // Crear elemento temporal para descarga
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Gianluca_DOnofrio_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Mensaje temporal mientras no tienes el archivo
    alert('Funcionalidad de descarga de CV - Cambia la URL en script.js por la ruta de tu CV real');
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

// Efecto de paralaje sutil en el mouse
function initializeParallax() {
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const dots = document.querySelectorAll('.floating-dot');
        dots.forEach((dot, index) => {
            const speed = (index % 3 + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            dot.style.transform += ` translate(${x}px, ${y}px)`;
        });
    });
}

// Cambiar color del gradiente del nombre cada cierto tiempo
function initializeNameGradientAnimation() {
    setInterval(() => {
        const name = document.querySelector('.name');
        const colors = [
            'linear-gradient(135deg, #e91e63, #9c27b0, #3f51b5, #2196f3)',
            'linear-gradient(135deg, #ff6b6b, #ee5a24, #0fb9b1, #3742fa)',
            'linear-gradient(135deg, #a8edea, #fed6e3, #ff9a9e, #fecfef)',
            'linear-gradient(135deg, #667eea, #764ba2, #f093fb, #f5576c)',
            'linear-gradient(135deg, #ffecd2, #fcb69f, #ff8a80, #ff5722)'
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        name.style.background = randomColor;
    }, 8000);
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

// Función para crear partículas adicionales en hover
function createHoverEffect() {
    const heroSection = document.querySelector('.container');
    let particles = [];
    
    heroSection.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.95) { // Solo crear partículas ocasionalmente
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.background = 'rgba(255, 255, 255, 0.6)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.left = e.clientX + 'px';
            particle.style.top = e.clientY + 'px';
            particle.style.transition = 'all 1s ease-out';
            particle.style.zIndex = '10';
            
            document.body.appendChild(particle);
            particles.push(particle);
            
            // Animar la partícula
            setTimeout(() => {
                particle.style.opacity = '0';
                particle.style.transform = 'translateY(-50px) scale(0)';
            }, 100);
            
            // Remover la partícula después de la animación
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
                particles = particles.filter(p => p !== particle);
            }, 1100);
        }
    });
}

// Inicializar todas las funcionalidades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Crear elementos flotantes
    createFloatingElements();
    
    // Inicializar observadores de scroll
    initializeObservers();
    
    // Inicializar efecto de paralaje
    initializeParallax();
    
    // Inicializar animación de gradiente del nombre
    initializeNameGradientAnimation();
    
    // Inicializar efectos de botones sociales
    initializeSocialButtons();
    
    // Inicializar efecto de partículas en hover
    createHoverEffect();
    
    console.log('🚀 Portafolio de Gianluca D\'Onofrio cargado exitosamente!');
});

// Función para manejar el redimensionamiento de ventana
window.addEventListener('resize', function() {
    // Re-calcular posiciones si es necesario
    const dots = document.querySelectorAll('.floating-dot');
    dots.forEach(dot => {
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
    });
});

// Exportar funciones para uso externo si es necesario
window.portfolioFunctions = {
    downloadCV,
    createFloatingElements,
    initializeObservers,
    initializeParallax
};