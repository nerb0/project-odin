
const current = document.getElementById('res');
const previous = document.getElementById('prev');
const operationText = document.getElementById('operation');
const operator_inputs = document.querySelectorAll('.operator');
const num_inputs = document.querySelectorAll('.number');
const clearBtn = document.getElementById('clear');
const backSpace = document.getElementById('backSpace');

const DEGREE ={
    add: 1,
    subtract:1,
    multiply:2,
    divide:2,
    power:3
}
class Node{
    constructor(v, d,l = null, r = null){
        this.value = v;
        this.degree = d;
        this.left = l;
        this.right = r;
    }
}

let expNode = new Node();
let res = 0;
let num = "";
// let expression = "";
let onOperate = true;
let digits = [];
let onEquate = true;
let currentOperation = "add";
let onError = false;
let onDeci = false;
let start = true;
let operation = {
    add: function(){
        res += Number(num);
        num = "";
    },
    subtract: function(){
        res -= Number(num);
        num = "";
    },
    multiply: function(){
        res *= Number(num);
        num = "";
    },
    divide: function(){
        res /= Number(num);
        num = "";
    },
    power: function(){
        res = res ** Number(num);
        num = "";
    },
    equal: function(){
        console.log('blyat');
    }
}

current.textContent = "";
document.onkeyup = (e) => {
    if(+e.key || e.key == '.'){
        appendDigit(e.key);
    }else if(e.key == 'Backspace'){
        removeInput();
    }
}
num_inputs.forEach((input) => {
    input.onclick = function(){
        appendDigit(this.getAttribute('data-value'));
    }
})
operator_inputs.forEach((input) => {
    input.onclick = function(e) {
        insertOperation(e);
    }
})

function calculate(){
    if(!onOperate){
        // expression += num;
        previous.textContent = num;
        if(currentOperation == 'divide' && num == '0') {
            current.textContent = 'ARITHMETIC ERROR';
            onError = true;
            return;
        }
        operation[currentOperation]();
        current.textContent = res;
        // expression = `(ANS)`;
        onEquate = true;
        num = res;
        currentOperation = 'equal';
        start = true;
    } 
}
function insertOperation(e){
    if(current.textContent.length <= 21 && !onOperate && !onError){
        onDeci = false; 
        onOperate = true;
        previous.textContent = num;
        // expression += num + e.currentTarget.id;
        current.textContent = e.currentTarget.id;
        if(start) {
            res = Number(num);
            start = false;
        }
        else operation[currentOperation]();
        currentOperation = e.currentTarget.getAttribute('data-value');
        onEquate = true;
    }
}
function appendDigit(input){
    if(onError) clearDisplay();
    
    if(current.textContent.length <= 22 && !onEquate && !onOperate){
        if(input == '.') {
            if(onDeci) return;
            else onDeci = true;
        }
        num += input;
        onOperate = false;
        current.textContent += input;
    }else if(current.textContent.length <= 22 && onOperate){
        num = input;
        onOperate = false;
        onEquate = false;
        current.textContent = input;
    }
}
function removeInput(){
    const text = current.textContent;
    if(onEquate) clearDisplay();
    else if(onOperate){
        onOperate = false;
        onEquate = true;
        current.textContent = text.substr(0, text.length - 1);
    }
    else{
        num = num.substr(0, text.length - 1);
        current.textContent = text.substr(0, text.length - 1);
    }
    
}
function clearDisplay(){
    current.textContent = "";
    previous.textContent = "";
    res = 0;
    num = "";
    currentOperation = "add";
    onOperate = false;
    onEquate = false;
    start = true;
    onError = false;
    // expression = "";
}