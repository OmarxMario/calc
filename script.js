let tryx = true;
let Ans;
let cls=true

function appertolist(inputx) {
    if (tryx) {
        if(cls){
        document.getElementById('text').value = "";
        document.getElementById('text').value += inputx;
        cls=false
        }
        else{
            document.getElementById('text').value += inputx;
        }
    }
}

function clearDisplay() {
    document.getElementById('text').value = "";
    tryx = true;
    document.getElementById('text').value='0';
    cls=true;
}

function calc() {
    try {
        document.getElementById('text').value = eval(document.getElementById('text').value);
        Ans = document.getElementById('text').value;
    } catch {
        document.getElementById('text').value = "Syntax Error or Math Error. To ESC press AC";
        tryx = false;
    }
}

function deletex() {
    if (tryx) {
        let currentValue = document.getElementById('text').value;
        document.getElementById('text').value = currentValue.slice(0, -1);
        if(document.getElementById('text').value ==''){
            cls=true;
            document.getElementById('text').value='0';
        }
    }
}
