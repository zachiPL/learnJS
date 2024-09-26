var box = document.getElementById('box');

var x1 = document.getElementById('x1');
var y1 = document.getElementById('y1');

var x2 = document.getElementById('x2');
var y2 = document.getElementById('y2');

var x3 = document.getElementById('x3');
var y3 = document.getElementById('y3');

var x4 = document.getElementById('x4');
var y4 = document.getElementById('y4');


x1.addEventListener("input", updateElement);
x2.addEventListener("input", updateElement);
x3.addEventListener("input", updateElement);
x4.addEventListener("input", updateElement);
y1.addEventListener("input", updateElement);
y2.addEventListener("input", updateElement);
y3.addEventListener("input", updateElement);
y4.addEventListener("input", updateElement);

function updateElement()
{
    box.style.borderTopLeftRadius = x1.value + "% " + y1.value + "%";
    box.style.borderTopRightRadius = x2.value + "% " + y2.value + "%";
    box.style.borderBottomLeftRadius = x3.value + "% " + y3.value + "%";
    box.style.borderBottomRightRadius = x4.value + "% " + y4.value + "%";
}

updateElement();
