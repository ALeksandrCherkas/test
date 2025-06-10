const buttons = document.querySelector(".loginForm__gender");

buttons.addEventListener('click', (event)=>{
    buttons.querySelectorAll('button').forEach((e)=>{e.classList.remove('active')})
    event.target.classList.toggle('active');
})