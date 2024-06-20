document.addEventListener('DOMContentLoaded', function() {
    // Interactive menu (example for dropdown)
    const menuButton = document.querySelector('.menu-button');
    if (menuButton) {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        menuButton.addEventListener('click', function() {
            dropdownMenu.classList.toggle('show');
        });
    }

    // Dynamic content loading
    const loadButton = document.getElementById('loadButton');
    if (loadButton) {
        loadButton.addEventListener('click', function() {
            // Simulate fetching dynamic content
            const dynamicContent = 'This is dynamic content';
            document.getElementById('content').innerHTML = sanitizeInput(dynamicContent);
        });
    }

    // Form submission handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            // Simulate form submission
            setTimeout(function() {
                window.location.href = 'submission-success.html';
            }, 500); // Delay for simulation, remove if not needed
        });
    }
});

// Sanitize input to prevent XSS
function sanitizeInput(input) {
    const element = document.createElement('div');
    element.innerText = input;
    return element.innerHTML;
}
