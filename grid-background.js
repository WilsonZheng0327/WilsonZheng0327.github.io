// Gravitational Grid Distortion Background
class GravitationalGrid {
    constructor() {
        this.canvas = document.getElementById('gravitationalGrid');
        this.ctx = this.canvas.getContext('2d', { alpha: false }); // Disable alpha for better performance
        this.mouse = { x: 0, y: 0, active: false };
        this.gridSpacing = 75; // Distance between grid lines
        this.gravitationalStrength = 250; // How strong the pull is
        this.gravitationalRadius = 300; // How far the effect reaches
        this.gridPadding = 200; // Extra grid space beyond viewport
        this.animationEnabled = true; // Toggle for gravitational animation
        this.lastFrameTime = 0;
        this.targetFPS = 60;
        this.frameInterval = 1000 / this.targetFPS;

        this.resizeCanvas();
        this.setupEventListeners();
        this.animate();
    }

    resizeCanvas() {
        // Extend canvas beyond viewport to prevent seeing grid edges
        this.canvas.width = window.innerWidth + this.gridPadding * 2;
        this.canvas.height = window.innerHeight + this.gridPadding * 2;
        this.canvas.style.left = `-${this.gridPadding}px`;
        this.canvas.style.top = `-${this.gridPadding}px`;

        // Calculate grid points with padding
        this.cols = Math.ceil(this.canvas.width / this.gridSpacing) + 1;
        this.rows = Math.ceil(this.canvas.height / this.gridSpacing) + 1;
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.resizeCanvas());

        window.addEventListener('mousemove', (e) => {
            // Adjust for grid padding offset
            this.mouse.x = e.clientX + this.gridPadding;
            this.mouse.y = e.clientY + this.gridPadding;
            this.mouse.active = true;
        });

        window.addEventListener('mouseleave', () => {
            this.mouse.active = false;
        });

        // Mobile touch support
        window.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                this.mouse.x = e.touches[0].clientX + this.gridPadding;
                this.mouse.y = e.touches[0].clientY + this.gridPadding;
                this.mouse.active = true;
            }
        });

        window.addEventListener('touchend', () => {
            this.mouse.active = false;
        });
    }

    // Calculate gravitational distortion for a point
    applyGravity(x, y) {
        if (!this.mouse.active) {
            return { x, y };
        }

        const dx = this.mouse.x - x;
        const dy = this.mouse.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If outside the gravitational radius, no effect
        if (distance > this.gravitationalRadius) {
            return { x, y };
        }

        // Calculate gravitational force (inverse square law, but clamped for visual appeal)
        // Using a modified formula for smooth visual effect
        const force = Math.pow(1 - (distance / this.gravitationalRadius), 2);
        const pullStrength = force * this.gravitationalStrength;

        // Calculate displacement toward the cursor
        const angle = Math.atan2(dy, dx);
        const displacementX = Math.cos(angle) * pullStrength;
        const displacementY = Math.sin(angle) * pullStrength;

        return {
            x: x + displacementX,
            y: y + displacementY
        };
    }

    drawGrid() {
        this.ctx.strokeStyle = 'rgba(200, 200, 200, 0.3)'; // Silver grid lines
        this.ctx.lineWidth = 1;

        // Optimize: Only draw lines that might be affected by gravity
        const shouldAnimate = this.animationEnabled && this.mouse.active;
        const effectiveRadius = shouldAnimate ? this.gravitationalRadius : 0;
        const minX = shouldAnimate ? Math.max(0, Math.floor((this.mouse.x - effectiveRadius) / this.gridSpacing) - 1) : 0;
        const maxX = shouldAnimate ? Math.min(this.cols, Math.ceil((this.mouse.x + effectiveRadius) / this.gridSpacing) + 1) : this.cols;
        const minY = shouldAnimate ? Math.max(0, Math.floor((this.mouse.y - effectiveRadius) / this.gridSpacing) - 1) : 0;
        const maxY = shouldAnimate ? Math.min(this.rows, Math.ceil((this.mouse.y + effectiveRadius) / this.gridSpacing) + 1) : this.rows;

        // Draw all vertical lines (optimized)
        this.ctx.beginPath();
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                const x = i * this.gridSpacing;
                const y = j * this.gridSpacing;

                // Only apply gravity to points near the cursor if animation is enabled
                let distorted;
                if (shouldAnimate && i >= minX && i <= maxX && j >= minY && j <= maxY) {
                    distorted = this.applyGravity(x, y);
                } else {
                    distorted = { x, y };
                }

                if (j === 0) {
                    this.ctx.moveTo(distorted.x, distorted.y);
                } else {
                    this.ctx.lineTo(distorted.x, distorted.y);
                }
            }
        }
        this.ctx.stroke();

        // Draw all horizontal lines (optimized)
        this.ctx.beginPath();
        for (let j = 0; j < this.rows; j++) {
            for (let i = 0; i < this.cols; i++) {
                const x = i * this.gridSpacing;
                const y = j * this.gridSpacing;

                // Only apply gravity to points near the cursor if animation is enabled
                let distorted;
                if (shouldAnimate && i >= minX && i <= maxX && j >= minY && j <= maxY) {
                    distorted = this.applyGravity(x, y);
                } else {
                    distorted = { x, y };
                }

                if (i === 0) {
                    this.ctx.moveTo(distorted.x, distorted.y);
                } else {
                    this.ctx.lineTo(distorted.x, distorted.y);
                }
            }
        }
        this.ctx.stroke();

        // Draw gravitational field visualization only if animation is enabled
        if (shouldAnimate) {
            const gradient = this.ctx.createRadialGradient(
                this.mouse.x, this.mouse.y, 0,
                this.mouse.x, this.mouse.y, this.gravitationalRadius
            );

            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
            gradient.addColorStop(0.5, 'rgba(200, 200, 200, 0.05)');
            gradient.addColorStop(1, 'rgba(200, 200, 200, 0)');

            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(this.mouse.x, this.mouse.y, this.gravitationalRadius, 0, Math.PI * 2);
            this.ctx.fill();

            // Draw cursor "mass" point
            const massGradient = this.ctx.createRadialGradient(
                this.mouse.x, this.mouse.y, 0,
                this.mouse.x, this.mouse.y, 20
            );

            massGradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
            massGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            this.ctx.fillStyle = massGradient;
            this.ctx.beginPath();
            this.ctx.arc(this.mouse.x, this.mouse.y, 20, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    animate(currentTime = 0) {
        // Throttle to target FPS for better performance
        const deltaTime = currentTime - this.lastFrameTime;

        if (deltaTime >= this.frameInterval) {
            this.lastFrameTime = currentTime - (deltaTime % this.frameInterval);

            // Clear canvas
            this.ctx.fillStyle = '#0a0a0a'; // Black background
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Draw the distorted grid
            this.drawGrid();
        }

        requestAnimationFrame((time) => this.animate(time));
    }
}

// Initialize when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    window.gravitationalGrid = new GravitationalGrid();
});
