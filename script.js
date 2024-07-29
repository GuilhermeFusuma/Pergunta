const naoBtn = document.getElementById("nao");

naoBtn.addEventListener("click", function() {
    let randomNum1, randomNum2;

    randomNum1 = Math.floor(Math.random() * 100 - 1);
    randomNum2 = Math.floor(Math.random() * 100 - 1);

    naoBtn.style.top = `${randomNum1}vh`;
    naoBtn.style.left = `${randomNum2}vw`;

    if(randomNum2 >= 50) {
        naoBtn.style.transform = 'translate(-100%)'
    }
})