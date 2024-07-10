document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Here you can add AJAX to send form data to your server
        
        form.reset();
    });
});
