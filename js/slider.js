// Hero Slider JavaScript
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.navDots = document.querySelectorAll('.nav-dot');
        this.prevButton = document.querySelector('.slider-arrow.prev');
        this.nextButton = document.querySelector('.slider-arrow.next');
        this.currentSlideIndex = 0;
        this.autoSlideInterval = null;
        this.autoSlideDelay = 2000; // 5 seconds

        this.init();
    }

    init() {
        // Initialize the slider
        this.showSlide(0);
        this.startAutoSlide();
        this.bindEvents();
    }

    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Remove active class from all nav dots
        this.navDots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Show current slide
        this.slides[index].classList.add('active');
        this.navDots[index].classList.add('active');

        this.currentSlideIndex = index;
    }

    nextSlide() {
        const nextIndex = (this.currentSlideIndex + 1) % this.slides.length;
        this.showSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex);
    }

    goToSlide(index) {
        this.showSlide(index);
        this.restartAutoSlide();
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoSlideDelay);
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }

    restartAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }

    bindEvents() {
        // Next button click
        this.nextButton.addEventListener('click', () => {
            this.nextSlide();
            this.restartAutoSlide();
        });

        // Previous button click
        this.prevButton.addEventListener('click', () => {
            this.prevSlide();
            this.restartAutoSlide();
        });

        // Navigation dots click
        this.navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });

        // Pause auto-slide on hover
        const sliderContainer = document.querySelector('.hero-slider');
        sliderContainer.addEventListener('mouseenter', () => {
            this.stopAutoSlide();
        });

        sliderContainer.addEventListener('mouseleave', () => {
            this.startAutoSlide();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
                this.restartAutoSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
                this.restartAutoSlide();
            }
        });

        // Touch/Swipe support for mobile
        let startX = 0;
        let endX = 0;

        sliderContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            this.stopAutoSlide();
        });

        sliderContainer.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe();
            this.startAutoSlide();
        });
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const swipeDistance = endX - startX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe right - go to previous slide
                this.prevSlide();
            } else {
                // Swipe left - go to next slide
                this.nextSlide();
            }
        }
    }
}

// Global functions for backward compatibility (used in HTML onclick attributes)
let heroSlider;

function currentSlide(index) {
    if (heroSlider) {
        heroSlider.goToSlide(index - 1); // Convert to 0-based index
    }
}

function changeSlide(direction) {
    if (heroSlider) {
        if (direction === 1) {
            heroSlider.nextSlide();
        } else {
            heroSlider.prevSlide();
        }
        heroSlider.restartAutoSlide();
    }
}

// Initialize the slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    heroSlider = new HeroSlider();
});

// Additional utility functions

// Function to add a new slide dynamically
function addSlide(imageSrc, title, description, buttonText) {
    const sliderContainer = document.querySelector('.slider-container');
    const sliderNav = document.querySelector('.slider-nav');

    // Create new slide element
    const newSlide = document.createElement('div');
    newSlide.className = 'slide';
    newSlide.innerHTML = `
        <img src="${imageSrc}" alt="${title}">
        <div class="slide-content">
            <h1>${title}</h1>
            <p>${description}</p>
            <button class="cta-button">${buttonText}</button>
        </div>
    `;

    // Add slide to container
    sliderContainer.appendChild(newSlide);

    // Create new navigation dot
    const navDot = document.createElement('button');
    navDot.className = 'nav-dot';
    const slideIndex = document.querySelectorAll('.slide').length;
    navDot.onclick = () => currentSlide(slideIndex);

    // Add dot to navigation
    sliderNav.appendChild(navDot);

    // Reinitialize slider if it exists
    if (heroSlider) {
        heroSlider.slides = document.querySelectorAll('.slide');
        heroSlider.navDots = document.querySelectorAll('.nav-dot');
    }
}

// Function to remove a slide
function removeSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const navDots = document.querySelectorAll('.nav-dot');

    if (index >= 0 && index < slides.length) {
        slides[index].remove();
        navDots[index].remove();

        // Reinitialize slider if it exists
        if (heroSlider) {
            heroSlider.slides = document.querySelectorAll('.slide');
            heroSlider.navDots = document.querySelectorAll('.nav-dot');

            // Adjust current slide index if necessary
            if (heroSlider.currentSlideIndex >= slides.length - 1) {
                heroSlider.currentSlideIndex = 0;
            }
            heroSlider.showSlide(heroSlider.currentSlideIndex);
        }
    }
}

// Function to update auto-slide delay
function setAutoSlideDelay(delayInMs) {
    if (heroSlider) {
        heroSlider.autoSlideDelay = delayInMs;
        heroSlider.restartAutoSlide();
    }
}

// Counter Animation for Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };

        updateCounter();
    });
}

// Countdown Timer
function startCountdown() {
    const countdownDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000); // 3 days from now

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = '<h3>Sale Ended!</h3>';
        }
    }, 1000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            // Animate counters when stats section is visible
            if (entry.target.classList.contains('stats-section')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease';
        observer.observe(section);
    });

    // Start countdown timer
    startCountdown();

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with email: ${email}`);
        e.target.reset();
    });
});