let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");

let answer = document.getElementById("answer");

// let inp1val = input1.value;
// let inp2val = input2.value;
// let inp3val = input3.value;
// let inp4val = input4.value;

function myfunc() {
    let inp1val = parseInt(input1.value, 10);
    let inp2val = parseInt(input2.value, 10);
    let inp3val = parseInt(input3.value, 10);
    let inp4val = parseInt(input4.value, 10);
    
input3.value = inp2val;
input4.value = inp1val;

let base = inp1val; // You can change the base to any other value if needed
let number = inp2val;

let result = Math.log(number) / Math.log(base);

answer.innerHTML = result;

}


function myfunc2() {
    let inp1val = parseInt(input1.value, 10);
    let inp2val = parseInt(input2.value, 10);
    let inp3val = parseInt(input3.value, 10);
    let inp4val = parseInt(input4.value, 10);
    
input1.value = inp4val;
input2.value = inp3val;

let base = inp4val; // You can change the base to any other value if needed
let number = inp3val;

let result = Math.log(number) / Math.log(base);

answer.innerHTML = result;

}