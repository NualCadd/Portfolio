
window.onload = function() {
    if(!sessionStorage.getItem("hasLoaded")){
        document.getElementById("loading-screen").style.display = "block";
        this.setTimeout(function() {
            document.getElementById("loading-screen").classList.add("hidden");
        }, 4500);
        sessionStorage.setItem("hasLoaded", "true");
    }
    else{
        document.getElementById("loading-screen").style.display = "none";
    }
    
}