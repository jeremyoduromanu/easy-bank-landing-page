var dropToggler = document.getElementById("dropdown-toggler");

dropToggler.addEventListener('click', openDropMenu);

var dropmenu = document.getElementById("dropmenu");
function openDropMenu(){

    
    dropmenu.classList.toggle("dropmenu-active");

    let heroPage = document.getElementById("hero-page");

    heroPage.style.backgroundColor = 'rgba(0, 0, 0, 0.521)';

    if (dropmenu.classList.contains('dropmenu-active')){
        dropToggler.innerHTML = '<img src=" ./images/icon-close.svg" alt="open" id="close-btn">';
    }

    else{
        dropToggler.innerHTML = '<img src=" ./images/icon-hamburger.svg" alt="open" id="close-btn">';
        heroPage.style.backgroundColor = "transparent";
    }

    
}



