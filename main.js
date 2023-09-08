window.onload = () => {
    let open = false;
    const mobileNavButtonBars = document.getElementById("js--hamburger-menu-bars");
    const mobileNavButtonXmark = document.getElementById("js--hamburger-menu-xmark");
    const mobileNav = document.getElementById("js--mobile-nav");

    mobileNavButtonBars.addEventListener("click", (e) => {

        if (!open) {
            mobileNavButtonBars.classList.add("display-none");
            mobileNavButtonXmark.classList.remove("display-none");
            mobileNav.classList.remove("display-none");
            open = true;
        }
    });

    mobileNavButtonXmark.addEventListener("click", (e) => {

        if (open) {
            mobileNavButtonBars.classList.remove("display-none");
            mobileNavButtonXmark.classList.add("display-none");
            mobileNav.classList.add("display-none");
            open = false;    
        }
    });
}