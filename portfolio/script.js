// =====================================================
// MOBILE MENU
// =====================================================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


// When menu button is clicked
menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close mobile menu when a link is clicked

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =====================================================
// CONTACT FORM
// =====================================================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();


    // Get values
    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    // Check empty fields

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.style.color = "red";

        return;
    }


    // Check email

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.style.color = "red";

        return;
    }


    // Success message

    formMessage.textContent =
        "Thank you! Your message has been submitted.";

    formMessage.style.color = "green";


    // Clear form

    contactForm.reset();

});