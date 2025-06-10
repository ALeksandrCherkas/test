const emailForm = document.querySelector(".loginForm__emailSign");
const nameForm = document.querySelector(".loginForm__name");


const formSwitch = document.querySelector(".loginForm__switch");

formSwitch.addEventListener("click", (e) => {
    if (e.target.classList.contains("loginForm__button")){
        document.querySelectorAll(".loginForm__button").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");

        const index = Array.from(formSwitch.children).indexOf(e.target);

        if (index === 1) {
            emailForm.classList.toggle("disabled");
            nameForm.classList.toggle("disabled");
        }
        
        if (index === 0) {
            emailForm.classList.toggle("disabled");
            nameForm.classList.toggle("disabled");
        }
    }
})

