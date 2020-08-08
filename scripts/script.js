const btnLogin = document.querySelector(".btn-login");
const container = document.querySelector(".container");
const div = document.querySelector("div")

btnLogin.addEventListener("click", event => {
    event.preventDefault();

    const fields = [ ...document.querySelectorAll(".input-block input")];
    

    fields.forEach(fild => {
        if(fild.value == "") {
            container.classList.add("validate-error");
        }
    });

    const formError = document.querySelector(".validate-error");    
    if(formError){
        formError.addEventListener("animationend", (event) => {
            if(event.animationName == "nono"){
                formError.classList.remove("validate-error");
            }
        });
    } else{
        container.classList.add("form-hide");
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