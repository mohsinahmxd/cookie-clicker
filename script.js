const cookieImage = document.getElementById("cookie-image");
const body = document.body;
const counter = document.getElementById("count");
const restartButton = document.getElementById("restart");
const doubleButton = document.getElementById("double");

counter.innerText = 0;

cookieImage.addEventListener("click", event => {
    counter.innerText++;

    if (counter.innerText > 5 && counter.innerText < 25) {
        body.style.backgroundColor = "pink";
        restartButton.removeAttribute("hidden");
    } else if (counter.innerText > 24) {
        doubleButton.removeAttribute("hidden");
    };
})

restartButton.addEventListener("click", event => {
    counter.innerText = 0;
    body.style.backgroundColor = "red";
    restartButton.setAttribute("hidden", "");
    doubleButton.setAttribute("hidden", ""); 
})

doubleButton.addEventListener("click", event => {
    counter.innerText *= 2;
})

