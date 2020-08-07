const btnLogin = document.querySelector(".btn-login");
const container = document.querySelector(".container");

btnLogin.addEventListener("click", event => {
    event.preventDefault();
    container.classList.add("container-hide");
});

container.addEventListener("animationend", (event) => {
    if(event.animationName == "down"){
        container.style.display = "none";
    }
});