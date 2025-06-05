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
    const cvUrl = 'path/to/your/cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Alejandro_Anton_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

// COMENTAMOS LA FUNCIÓN PROBLEMÁTICA TEMPORALMENTE
/*
function initializeNameGradientAnimation() {
    const name = document.querySelector('.name');
    if (!name) return;
    
    const colors = [
        'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 12.5%, #ff6b9d 25%, #c44569 37.5%, #6c5ce7 50%, #a29bfe 62.5%, #74b9ff 75%, #0984e3 87.5%, #00b894 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 25%, #ff9a9e 50%, #fecfef 75%, #ffecd2 100%)',
        'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 25%, #ff8a80 50%, #ff5722 75%, #e91e63 100%)',
        'linear-gradient(135deg, #00c9ff 0%, #92fe9d 25%, #00d2ff 50%, #3a7bd5 75%, #00d2ff 100%)'
    ];
    
    setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        name.style.background = randomColor;
        name.style.backgroundSize = '400% 400%';
        name.style.webkitBackgroundClip = 'text';
        name.style.webkitTextFillColor = 'transparent';
        name.style.backgroundClip = 'text';
    }, 10000);
}
*/

// Efecto de paralaje sutil en el mouse - SIMPLIFICADO
function initializeParallax() {
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const dots = document.querySelectorAll('.floating-dot');
        dots.forEach((dot, index) => {
            const speed = (index % 3 + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            // CORREGIMOS ESTE BUG - no usar += que acumula transformaciones
            dot.style.transform = `translate(${x}px, ${y}px)`;
        });
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

// Función para crear partículas adicionales en hover
function createHoverEffect() {
    const heroSection = document.querySelector('.container');
    let particles = [];
    
    heroSection.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.98) { // Reducimos la frecuencia
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
            
            setTimeout(() => {
                particle.style.opacity = '0';
                particle.style.transform = 'translateY(-50px) scale(0)';
            }, 100);
            
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
                particles = particles.filter(p => p !== particle);
            }, 1100);
        }
    });
}

// FUNCIÓN DE DIAGNÓSTICO
function debugNameElement() {
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        console.log('✅ Elemento .name encontrado');
        console.log('📝 Contenido:', nameElement.textContent);
        console.log('🎨 Estilos computados:', window.getComputedStyle(nameElement));
        
        // Verificar si el elemento es visible cada 2 segundos
        setInterval(() => {
            const styles = window.getComputedStyle(nameElement);
            const isVisible = styles.opacity !== '0' && styles.display !== 'none' && styles.visibility !== 'hidden';
            console.log(`👀 Elemento visible: ${isVisible} | Opacity: ${styles.opacity} | Display: ${styles.display}`);
            
            if (!isVisible) {
                console.log('❌ ¡ELEMENTO NO VISIBLE! Estilos:', {
                    opacity: styles.opacity,
                    display: styles.display,
                    visibility: styles.visibility,
                    color: styles.color,
                    background: styles.background
                });
            }
        }, 2000);
    } else {
        console.log('❌ No se encontró el elemento .name');
    }
}

// Inicializar todas las funcionalidades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Iniciando diagnóstico del portafolio...');
    
    // Función de diagnóstico
    debugNameElement();
    
    // Crear elementos flotantes
    createFloatingElements();
    
    // Inicializar observadores de scroll
    initializeObservers();
    
    // Inicializar efecto de paralaje
    initializeParallax();
    
    // COMENTAMOS TEMPORALMENTE LA ANIMACIÓN DEL GRADIENTE
    // initializeNameGradientAnimation();
    
    // Inicializar efectos de botones sociales
    initializeSocialButtons();
    
    // Inicializar efecto de partículas en hover
    createHoverEffect();
    
    console.log('✅ Portafolio de Alejandro Anton cargado (modo diagnóstico)');
});

// Función para manejar el redimensionamiento de ventana
window.addEventListener('resize', function() {
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