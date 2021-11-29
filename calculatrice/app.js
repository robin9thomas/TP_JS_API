

// inputs 
const valeur1 = document.getElementById("val1");
const valeur2 = document.getElementById("val2");
const result = document.getElementById("result");
// buttons 
const addButton = document.getElementById("add");
const subButton = document.getElementById("sub");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

console.log(valeur1);
console.log(valeur2);
console.log(result);


console.log(addButton);
console.log(subButton);
console.log(multiplyButton);
console.log(divideButton);

function add ( valeur1 , valeur2) {
    result.value= Number.parseInt(valeur1)+Number.parseInt(valeur2);
}
function substract (valeur1 , valeur2) {
    result.value= Number.parseInt(valeur1)-Number.parseInt(valeur2);
}
function multiply (valeur1 , valeur2) {
    result.value= Number.parseInt(valeur1)*Number.parseInt(valeur2);
}
function divide (valeur1 , valeur2) {
    let val2 = Number.parseInt(valeur2)
    if(val2 === 0 ) { 
        alert('Impossible de diviser par 0')
        return new Error('Division par 0.')
    }
    result.value= Number.parseInt(valeur1)/Number.parseInt(val2);
}


addButton.addEventListener('click', function() {
    add(valeur1.value,valeur2.value)
})

subButton.addEventListener('click', function() {
    substract(valeur1.value,valeur2.value)
})

multiplyButton.addEventListener('click', function() {
    multiply(valeur1.value,valeur2.value)
})
divideButton.addEventListener('click', function() {
    divide(valeur1.value,valeur2.value)
})

