function hitTheLights() {
    if (document.getElementById("myCheckbox").checked == true){
        document.querySelector("H1").textContent = "Good Bye";
        document.querySelector("p").innerHTML = "<em>All done.</em>";
        document.querySelector("form label").textContent = "I've been Checked!";
        document.querySelector("body").classList.add("opposite");
        document.getElementsByTagName("div")[0].classList.add("opposite");
        document.querySelector("a").classList.remove("invisible");
        document.querySelector("i").classList.remove("fa-sun")
        document.querySelector("i").classList.add("fa-moon");
    } else {
        document.querySelector("H1").textContent = "Hello";
        document.querySelector("p").innerHTML = "Here's a little something...";
        document.querySelector("form label").textContent = "Check the box!";
        document.querySelector("body").classList.remove("opposite");
        document.getElementsByTagName("div")[0].classList.remove("opposite");
        document.querySelector("a").classList.add("invisible");
        document.querySelector("i").classList.add("fa-sun")
        document.querySelector("i").classList.remove("fa-moon");
    }
}

