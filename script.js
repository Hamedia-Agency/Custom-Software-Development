// Custom Cursor Glow
const cursor = document.querySelector('.cursor-glow');

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
            // Stop observing once animated
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

// Tab Switching functionality
function switchTab(tabId) {
    // Update tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    if (tabId === 'process') {
        document.querySelectorAll('.tab')[0].classList.add('active');
        
        document.getElementById('process-content').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('process-content').style.display = 'block';
            document.getElementById('timeline-content').style.display = 'none';
            // Trigger reflow
            void document.getElementById('process-content').offsetWidth;
            document.getElementById('process-content').style.opacity = '1';
        }, 150);
        
    } else {
        document.querySelectorAll('.tab')[1].classList.add('active');
        
        document.getElementById('timeline-content').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('process-content').style.display = 'none';
            document.getElementById('timeline-content').style.display = 'block';
            // Trigger reflow
            void document.getElementById('timeline-content').offsetWidth;
            document.getElementById('timeline-content').style.opacity = '1';
        }, 150);
    }
}
