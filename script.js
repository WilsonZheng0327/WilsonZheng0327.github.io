// Controls Panel Toggle
const controlsToggle = document.getElementById('controlsToggle');
const controlsPanel = document.getElementById('controlsPanel');

controlsToggle.addEventListener('click', () => {
    controlsPanel.classList.toggle('active');
});

// Close controls when clicking outside
document.addEventListener('click', (e) => {
    if (!controlsPanel.contains(e.target)) {
        controlsPanel.classList.remove('active');
    }
});

// Grid Controls
window.addEventListener('DOMContentLoaded', () => {
    const gridToggle = document.getElementById('gridToggle');
    const gridSpacingInput = document.getElementById('gridSpacing');
    const gravityStrengthInput = document.getElementById('gravityStrength');
    const gravityRadiusInput = document.getElementById('gravityRadius');

    const spacingValue = document.getElementById('spacingValue');
    const strengthValue = document.getElementById('strengthValue');
    const radiusValue = document.getElementById('radiusValue');

    // Helper to save settings
    const saveSettings = () => {
        const settings = {
            animationEnabled: gridToggle.checked,
            spacing: parseInt(gridSpacingInput.value),
            strength: parseInt(gravityStrengthInput.value),
            radius: parseInt(gravityRadiusInput.value)
        };
        localStorage.setItem('gridSettings', JSON.stringify(settings));
    };

    // Load settings from localStorage
    const savedSettings = JSON.parse(localStorage.getItem('gridSettings'));
    if (savedSettings) {
        if (savedSettings.animationEnabled !== undefined) {
            gridToggle.checked = savedSettings.animationEnabled;
        }
        if (savedSettings.spacing) {
            gridSpacingInput.value = savedSettings.spacing;
            spacingValue.textContent = savedSettings.spacing;
        }
        if (savedSettings.strength) {
            gravityStrengthInput.value = savedSettings.strength;
            strengthValue.textContent = savedSettings.strength;
        }
        if (savedSettings.radius) {
            gravityRadiusInput.value = savedSettings.radius;
            radiusValue.textContent = savedSettings.radius;
        }
    }

    // Apply initial settings to grid if it exists
    if (window.gravitationalGrid) {
        window.gravitationalGrid.animationEnabled = gridToggle.checked;
        window.gravitationalGrid.gridSpacing = parseInt(gridSpacingInput.value);
        window.gravitationalGrid.gravitationalStrength = parseInt(gravityStrengthInput.value);
        window.gravitationalGrid.gravitationalRadius = parseInt(gravityRadiusInput.value);
        window.gravitationalGrid.resizeCanvas();
    }

    // Toggle grid animation
    gridToggle.addEventListener('change', (e) => {
        if (window.gravitationalGrid) {
            window.gravitationalGrid.animationEnabled = e.target.checked;
        }
        saveSettings();
    });

    // Update grid spacing
    gridSpacingInput.addEventListener('input', (e) => {
        const value = parseInt(e.target.value);
        spacingValue.textContent = value;
        if (window.gravitationalGrid) {
            window.gravitationalGrid.gridSpacing = value;
            window.gravitationalGrid.resizeCanvas();
        }
        saveSettings();
    });

    // Update gravity strength
    gravityStrengthInput.addEventListener('input', (e) => {
        const value = parseInt(e.target.value);
        strengthValue.textContent = value;
        if (window.gravitationalGrid) {
            window.gravitationalGrid.gravitationalStrength = value;
        }
        saveSettings();
    });

    // Update gravity radius
    gravityRadiusInput.addEventListener('input', (e) => {
        const value = parseInt(e.target.value);
        radiusValue.textContent = value;
        if (window.gravitationalGrid) {
            window.gravitationalGrid.gravitationalRadius = value;
        }
        saveSettings();
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Fade in sections on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.section, .hero').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    fadeInObserver.observe(el);
});

// Add subtle parallax effect to cards
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.scrollY;
            const cards = document.querySelectorAll('.card');

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.top + rect.height / 2;
                const viewportCenter = window.innerHeight / 2;
                const distance = cardCenter - viewportCenter;
                const parallax = distance * 0.02;

                card.style.transform = `translateY(${parallax}px)`;
            });

            ticking = false;
        });
        ticking = true;
    }
});

// Prevent parallax on hover
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transition = 'transform 0.8s ease, box-shadow 0.3s ease';
    });
});

// Video placeholder interaction (for future video/GIF integration)
document.querySelectorAll('.video-placeholder').forEach(placeholder => {
    placeholder.addEventListener('click', function () {
        // Placeholder for future functionality
        console.log('Video placeholder clicked - ready for media integration');
    });
});

// Add keyboard navigation hint
document.addEventListener('keydown', (e) => {
    // Space or arrow down to scroll down
    if (e.code === 'Space' && !e.shiftKey) {
        e.preventDefault();
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }
    // Shift + Space or arrow up to scroll up
    else if (e.code === 'Space' && e.shiftKey) {
        e.preventDefault();
        window.scrollBy({ top: -window.innerHeight * 0.8, behavior: 'smooth' });
    }
});

// Easter egg: Konami code for fun
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        // Easter egg activated!
        if (window.gravitationalGrid) {
            // Create multiple gravitational waves
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const x = Math.random() * window.innerWidth;
                    const y = Math.random() * window.innerHeight;
                    window.gravitationalGrid.createWave(x, y, 100);
                }, i * 100);
            }
        }
        console.log('🌌 Gravitational chaos unleashed!');
    }
});
