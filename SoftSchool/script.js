// Event listener for contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Tack för ditt meddelande! Vi återkommer snart.');
            form.reset();
        });
    }
});