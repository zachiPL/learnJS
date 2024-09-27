const buttons = document.getElementsByClassName("divCell");
const displayElement = document.getElementById("cipherField");
let func = function (x, y) { return y };
let lastResult = 0;
let display = 0;
let argument = 0;
let clear = false;

function handleClickNumber(number) {
    if (clear)
        display = 0;
    if (display > 10000000)
        return;

    display *= 10;
    display += parseInt(number);
    argument = display;
    clear = false;
    updateDisplay();
}

function plus() {
    if (!clear)
        result();
    func = (x, y) => { return x + y };
}

function minus() {
    if (!clear)
        result();
    func = (x, y) => { return x - y };
}

function multiply() {
    if (!clear)
        result();
    func = (x, y) => { return x * y };
}

function divide() {
    if (!clear)
        result();
    func = (x, y) => { return x / y };
}

function result() {
    clear = true;
    lastResult = func(lastResult, argument);
    if(lastResult > 99999999)
        display = "ERR"
    else
        display = lastResult;
    updateDisplay();
}

function ac() {
    lastResult = 0;
    display = 0;
    argument = 0;
    updateDisplay();
    func = (x, y) => { return y };
}

function c() {
    display = 0;
    updateDisplay();
}

function pm() {
    display = -display;
    argument = display;
    updateDisplay();
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
            case '/':
                btn.addEventListener('click', (x) => divide());
                break;
            case '=':
                btn.addEventListener('click', (x) => result());
                break;
            case 'AC':
                btn.addEventListener('click', (x) => ac());
                break;
            case 'C':
                btn.addEventListener('click', (x) => c());
                break;
            case '+/-':
                btn.addEventListener('click', (x) => pm());
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