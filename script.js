let arrowUp = document.getElementById('arrow-up');
let arrowDown = document.getElementById('arrow-down');
let counterValue = document.getElementById('counter-value');
let counterBg = document.getElementById('counter-background');

let counter = 0;

arrowUp.addEventListener('click', function(){
    counter ++;
    counterValue.textContent = counter;
    ChangeColor();
})

arrowDown.addEventListener('click', function(){
    counter --;
    counterValue.textContent = counter;
    ChangeColor();
})

function ChangeColor() {
    counterBg.style.backgroundColor = counter >= 1 ? "#008000": counter < 0 ? "#ff0000": "#211d1d";
}