// Custom Cursor Glow
const cursor = document.querySelector('.cursor-glow');

if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        if (cursor.style.opacity === '0' || !cursor.style.opacity) {
            cursor.style.opacity = '1';
        }
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
}

// Header Scroll Effect
const header = document.querySelector('.site-header');
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Mobile Navigation Toggle
const mobileToggleBtn = document.getElementById('mobileNavToggle');
const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');

if (mobileToggleBtn && mobileMenuDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
        const isOpen = mobileMenuDrawer.classList.contains('open');
        if (isOpen) {
            mobileMenuDrawer.classList.remove('open');
        } else {
            mobileMenuDrawer.classList.add('open');
        }
    });
}

// Mobile Accordion Toggle Helper
window.toggleMobileAccordion = function(accordionId) {
    const accordion = document.getElementById(accordionId);
    if (!accordion) return;
    const isOpen = accordion.classList.contains('open');
    if (isOpen) {
        accordion.classList.remove('open');
    } else {
        accordion.classList.add('open');
    }
};

// Scroll Reveal Animation (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(element => {
    observer.observe(element);
});

// Initial trigger for hero section elements
setTimeout(() => {
    document.querySelectorAll('.hero .fade-in-up').forEach(el => el.classList.add('visible'));
}, 100);

// Tab Switching functionality (exposed globally for inline onclick)
window.switchTab = function(tabId) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    const processContent = document.getElementById('process-content');
    const timelineContent = document.getElementById('timeline-content');
    
    if (tabId === 'process') {
        if (document.querySelectorAll('.tab')[0]) document.querySelectorAll('.tab')[0].classList.add('active');
        if (processContent && timelineContent) {
            processContent.style.opacity = '0';
            setTimeout(() => {
                processContent.style.display = 'block';
                timelineContent.style.display = 'none';
                void processContent.offsetWidth;
                processContent.style.opacity = '1';
            }, 150);
        }
    } else {
        if (document.querySelectorAll('.tab')[1]) document.querySelectorAll('.tab')[1].classList.add('active');
        if (processContent && timelineContent) {
            timelineContent.style.opacity = '0';
            setTimeout(() => {
                processContent.style.display = 'none';
                timelineContent.style.display = 'block';
                void timelineContent.offsetWidth;
                timelineContent.style.opacity = '1';
            }, 150);
        }
    }
};
