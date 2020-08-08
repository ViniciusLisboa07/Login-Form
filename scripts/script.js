const btnLogin = document.querySelector(".btn-login");
const container = document.querySelector(".container");

btnLogin.addEventListener("click", event => {
    event.preventDefault();

    const fields = [ ...document.querySelectorAll(".input-block input")];

    fields.forEach(filed => {
        if(fild.value == "") container.classList.add("validate-error")
    });

    const formError = document.querySelector(".validate-error");    

    container.classList.add("container-hide");
    if(formError){
        formError.addEventListener("animationend", (event) => {
            if(event.animationName == "nono"){
                formError.classList.remove("validate-error");
            }
        });
    } else{
        formError.classList.add("form-hide");
    }
});

container.addEventListener("animationstart", event => {
    if(event.animationName == "down"){
        document.querySelector("body").style.overflow = "hidden";
    }
});

container.addEventListener("animationend", (event) => {
    if(event.animationName == "down"){
        container.style.display = "none";
        document.querySelector("body").style.overflow = "none";
    }
});