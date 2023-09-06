
//zavolá se až po načtení html a css
document.addEventListener("DOMContentLoaded", function () {
    //načtení všech potřebných objektů
    var elementdark = document.querySelector(".dark-mode");
    var elementlight = document.querySelector(".light-mode");
    var compareButton = document.querySelector(".porovnathesla");
    var sipka = document.getElementById("sipka");
    var hamburgerButton = document.querySelector(".menu-hamburger");
    var navElement = document.querySelector("nav");

    //temný režim
    elementdark.addEventListener("click", function () {
        elementdark.classList.toggle("selected");
        elementlight.classList.toggle("selected");
        elementdark.parentElement.parentElement.parentElement.classList.toggle("dark-mode-selected");
    });

    //světlý režim
    elementlight.addEventListener("click", function () {
        elementlight.classList.toggle("selected");
        elementdark.classList.toggle("selected");
        elementlight.parentElement.parentElement.parentElement.classList.toggle("dark-mode-selected");
    });

    //porovnání hesla
    compareButton.addEventListener("click", function () {
        //načtu si hesla
        var password1 = document.getElementById("password1").value;
        var password2 = document.getElementById("password2").value;

        //porovnám
        if (password1 === password2) {
            alert("Hesla se shodují.");
            //vyčistím pro další pokusy
            document.getElementById("password1").value = "";
            document.getElementById("password2").value = "";
        } else {
            alert("Hesla se neshodují.");
            //vyčistím pro další pokusy
            document.getElementById("password1").value = "";
            document.getElementById("password2").value = "";
        }
    });
    
    //zobrazení šipky nahoru
    window.addEventListener("scroll", function() {
        if (window.scrollY+200 > window.innerHeight) {
            sipka.style.display = "flex";
        } else {
            sipka.style.display = "none";
        }
    });    
    
    //hamburger
    hamburgerButton.addEventListener("click", function() {
        navElement.classList.toggle("open");
        hamburgerButton.classList.toggle("open");
    });
});
