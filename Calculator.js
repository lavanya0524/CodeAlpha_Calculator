const inputBox = document.getElementById('inputBox');
function appendCharacter(char){
    inputBox.value += char;
}
function Allclear(){
    inputBox.value = '';
}
function deleteLast(){
    inputBox.value = inputBox.value.slice(0, -1);
}
function calculateResult(){
    try{
        inputBox.value = eval(inputBox.value);
    }catch{
        inputBox.value = 'Error';
    }
}
document.addEventListener('keydown', function(event){
    const key = event.key;
    if (/^[0-9+\-*/.=]$/.test(key)){
        if (key === '=') calculateResult();
        else appendCharacter(key);
    }
    else if (key === 'Enter'){
        calculateResult();
    }
    else if (key === 'Backspace'){
        deleteLast();
    }
    else if (key === 'Escape'){
        clearDisplay();
}});