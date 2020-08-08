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
        container.classList.add("container-hide");
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

// BG

const ulSquares = document.querySelector("ul.squares");

for(let i = 0; i <= 10; i++) {
    const li = document.createElement("li");

    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 120));

    const position = random(1, 99);
    const delay = random(5, 0.1);
    const duration = random(24, 12);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;
    
    li.style.left = `${position}%`;
    
    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${ Math.random()}, ${ Math.random()}, ${ Math.random()}, ${ Math.random()})`;

    ulSquares.appendChild(li);
}