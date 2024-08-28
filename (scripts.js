// script.js

// Toggle the navigation menu
document.querySelector('.toggle-btn').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Contact form submission handling
document.querySelector('.contact-form form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);

    // Contact Form 7 code or EmailJS code
    // Replace the placeholder below with your actual EmailJS or form handling logic
    emailjs.sendForm('service_bg6ngmt', ' template_z6emd2e', formData)
        .then((result) => {
            alert('Message sent successfully!');
            form.reset(); // Reset the form after successful submission
        }, (error) => {
            alert('An error occurred: ' + error.text);
        });
});
