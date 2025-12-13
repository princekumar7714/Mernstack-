// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Form Validation
const form = document.getElementById("contactForm");
const statusTxt = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    statusTxt.textContent = "Sending...";

    setTimeout(() => {
        statusTxt.textContent = "Message Sent Successfully!";
        form.reset();
    }, 1200);
});
