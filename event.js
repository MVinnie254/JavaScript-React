const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target);
        //alert(button.id);
        button.textContent="You Clicked Me!";
        button.style.backgroundColor = "Red";
        button.style.color = "white";
    })
})