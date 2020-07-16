var buttonIds = ["btn0", "btn1", "btnClr", "btnEql", "btnSum", "btnSub", "btnMul", "btnDiv"];
var buttonText = ['0','1','C','=','+','-','*','/'];

var res = document.createElement('div');
res.id = 'res';

var btns = document.createElement('div');
btns.id = 'btns';


for(var i=0;i<8;i++) {
    var button = document.createElement('button');
    button.id = buttonIds[i];
    button.innerHTML = buttonText[i];
    button.onclick = function() {
        var ele = document.getElementById("res");
        if(this.innerHTML === 'C'){
            ele.innerHTML = '';
        }
        else if(this.innerHTML === '=') {
            var re = /(\d+)([+\-*\/])(\d+)/;
            var res = ''
            var text = ele.innerHTML.match(re);
            if(text) {
                var op1 = parseInt(text[1], 2);
                var op2 = parseInt(text[3], 2);
                console.log(op1,op2);
                if(text[2] == '+') {
                    res = (op1+op2);
                }
                else if(text[2] == '-') {
                    res = (op1-op2);
                }
                else if(text[2] == '*') {
                    res = (op1*op2);
                }
                else res = Number(op1/op2);

                ele.innerHTML = res.toString(2);
            }
        }
        else if(ele.innerHTML){
            ele.innerHTML = ele.innerHTML + this.innerHTML;
        }
        else 
            ele.innerHTML = this.innerHTML;
    }
    btns.appendChild(button);
}

document.body.appendChild(res);
document.body.appendChild(btns);