window.addEventListener('mousemove', function(e) { 
    console.log(e.clientX);
    if (e.clientX <= 10) {
        console.log(e.clientX);
        document.getElementById("navbar").classList.add("show-nav");
    }
    if (e.clientX > 300) {
        console.log(e.clientX);
        document.getElementById("navbar").classList.remove("show-nav");
    }
});