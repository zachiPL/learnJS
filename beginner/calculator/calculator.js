const buttons = document.getElementsByClassName("divCell");
const displayElement = document.getElementById("cipherField");
let func = function (x, y) { return y };
let accumulator = 0;
let display = 0;
let argument = 0;

function handleClickNumber(number) {
    if (display > 10000000)
        return;

    display *= 10;
    display += parseInt(number);
    argument = display;
    updateDisplay();
}

function plus() {
    func = (x, y) => { return x + y};
    postSignClick();
}

function minus() {
    func = (x, y) => { return x - y};
    postSignClick();
}

function multiply() {
    func = (x, y) => { return x * y};
    postSignClick();
}

function divide() {
    func = (x, y) => { return x / y};
    postSignClick();
}

function postSignClick()
{
    accumulator = display;
    display = 0;
    updateDisplay();
}

function result()
{
    display = func(accumulator, argument);
    accumulator = display;
    updateDisplay();
}

function ac() {
    accumulator = 0;
    display = 0;
    argument = 0;
    updateDisplay();
    func = (x, y) => { y };
}

function updateDisplay() {
    displayElement.innerHTML = display;
}

for (var i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    if (btn.innerHTML.length > 0 && isNaN(btn.innerHTML) == false) {
        btn.addEventListener('click', (x) => handleClickNumber(btn.innerHTML));
    } else {
        switch (btn.innerHTML) {
            case '+':
                btn.addEventListener('click', (x) => plus());
                break;
            case '-':
                btn.addEventListener('click', (x) => minus());
                break;
            case '*':
                btn.addEventListener('click', (x) => multiply());
                break;
            case '&div;':
                btn.addEventListener('click', (x) => divide());
                break;
            case '=':
                btn.addEventListener('click', (x) => result());
                break;
            case 'AC':
                btn.addEventListener('click', (x) => ac());
                break;
        }
    }
    btn.addEventListener("pointerdown", (z) => {
        btn.style.color = 'white';
    });
    btn.addEventListener('pointerup', (z) => {
        btn.style.color = 'black';
    });
    btn.addEventListener('pointerleave', (z) => {
        btn.style.color = 'black';
    });
}
ac();