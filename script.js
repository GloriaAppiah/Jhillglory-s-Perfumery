const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name===""){
        formMessage.textContent = "Please enter your name.";
        return;
    }
    if(email===""){
        formMessage.textContent = "Please enter your email.";
        return;
    }
    if(message===""){
        formMessage.textContent = "Please enter your message.";
        return;
    }
    formMessage.textContent=
    "Thank you! Your message has been recieved.";
    
    form.reset();
})

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
menuToggle.addEventListener("click", function(){
    const isOpen = navMenu.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
})

const navLinks = navMenu.querySelectorAll("a");
navLinks.forEach(function(links){
    links.addEventListener("click",function(){
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    })
})

