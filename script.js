// Get all navigation links and the title
const navLinks = document.querySelectorAll('nav a');
const body = document.body;
const title = document.querySelector('h1'); // Get the title element

// Store the original background
const originalBackground = getComputedStyle(body).backgroundImage;


// Add event listeners to each link
navLinks.forEach(link => {
    // Get background image from data attribute
    const bgImage = link.getAttribute('bg');
    
    link.addEventListener('mouseenter', () => {
        // Hide the title
        title.style.opacity = '0';
        title.style.transform = 'translateY(-20px)';
        
        // Apply new background with overlay
        body.style.background = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
                                url('${bgImage}') no-repeat center center fixed`;
        body.style.backgroundSize = 'cover';
    });
    
    link.addEventListener('mouseleave', () => {
        // Show the title
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
        
        // Restore original background
        body.style.background = originalBackground;
        body.style.backgroundSize = 'cover';
    });
});