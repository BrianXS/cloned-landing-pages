function tabletSlider(evt, tabId) {
    let tabs = document.getElementsByClassName("tab");
    for(let i = 0; i<tabs.length; i++){
        tabs[i].className = tabs[i].className.replace("active", "");
    }

    evt.currentTarget.className += " tab-active";
}


function openMenu() {
    console.log("asdasda");
    document.getElementById("overlay-menu").style.display = "block";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeMenu() {
    document.getElementById("overlay-menu").style.display = "none";
}

