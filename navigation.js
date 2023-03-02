function scrollToAbout() {
    window.scroll({
        top: 900,
        left: 0,
        behavior: "smooth"
    }) 
}

function scrollToSkills() {
    var elem = document.querySelector(".skills");
    window.scroll({
        top: elem.offsetTop,
        left: 0,
        behavior: "smooth"
    }) 
}

function scrollToProjects() {
    window.scroll({
        top: 2730,
        left: 0,
        behavior: "smooth"
    }) 
}

function scrollToContact() {
    var elem = document.querySelector(".contact");
    window.scroll({
        top: elem.offsetTop,
        left: 0,
        behavior: "smooth"
    }) 
}