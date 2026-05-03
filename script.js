let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // scrolling down → hide header
        navbar.classList.add("hide");
    } else {
        // scrolling up → show header
        navbar.classList.remove("hide");
    }

    lastScrollY = window.scrollY;
});

// js for butoon
const button1 = document.querySelector(".btn1");

button1.addEventListener("click", () => {

    document.querySelector("#sec3").scrollIntoView({
        behavior: "smooth"
    });

});

const button2 = document.querySelector(".btn2");

button2.addEventListener("click", () => {

    document.querySelector("#sec2").scrollIntoView({
        behavior: "smooth"
    });

});

const butoon3 = document.querySelector("download-cv");
butoon3.addEventListener("click", () => {
    alert("their is no file in the server , once got it will start downloading into you system");
});
