let mode = document.getElementById("mode");
mode.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        mode.src = "light.png"
    }
    else {
        mode.src = "dark.png"
    }
}
