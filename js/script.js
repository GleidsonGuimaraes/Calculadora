let x, y, z, resultado;

let visor = document.getElementById("inp1");
const num1 = document.getElementById("bt5");
const num2 = document.getElementById("bt6");
const num3 = document.getElementById("bt7");
const num4 = document.getElementById("bt9");
const num5 = document.getElementById("bt10");
const num6 = document.getElementById("bt11");
const num7 = document.getElementById("bt13");
const num8 = document.getElementById("bt14");
const num9 = document.getElementById("bt15");
const num0 = document.getElementById("bt17");
const bSoma = document.getElementById("bt8");
const bSub = document.getElementById("bt12");
const bMult = document.getElementById("bt2");
const bDiv = document.getElementById("bt3");
const bRes = document.getElementById("bt16");
const bPonto = document.getElementById("bt18");

num1.addEventListener('click', event => {
  if(visor.value.length < 8){
    if(visor.value == "+"||visor.value == "-"||visor.value == "*"||visor.value == "/"||visor.value==x){
      visor.value = "";
    }
    visor.value = visor.value + "1";
  }
});
num2.addEventListener('click', event => {
  if(visor.value.length < 8){
    if(visor.value == "+"||visor.value == "-"||visor.value == "*"||visor.value == "/"||visor.value==x){
      visor.value = "";
    }
    visor.value = visor.value + "2";
  }
});
num3.addEventListener('click', event => {
  if(visor.value.length < 8){
    if(visor.value == "+"||visor.value == "-"||visor.value == "*"||visor.value == "/"||visor.value==x){
      visor.value = "";
    }
    visor.value = visor.value + "3";
  }
});
num4.addEventListener('click', event => {
  if(visor.value.length < 8){
    if(visor.value == "+"||visor.value == "-"||visor.value == "*"||visor.value == "/"||visor.value==x){
      visor.value = "";
    }
    visor.value = visor.value + "4";
  }
});
num5.addEventListener('click', event => {
  if(visor.value.length < 8){
    if(visor.value == "+"||visor.value == "-"||visor.value == "*"||visor.value == "/"||visor.value==x){
      visor.value = "";
    }
    visor.value = visor.value + "5";
  }
});
num6.addEventListener('click', event => {
  if(visor.value.length < 8){
    if(visor.value == "+"||visor.value == "-"||visor.value == "*"||visor.value == "/"||visor.value==x){
      visor.value = "";
    }
    visor.value = visor.value + "6";
  }
});
num7.addEventListener('click', event => {
  if(visor.value.length < 8){
    if(visor.value == "+"||visor.value == "-"||visor.value == "*"||visor.value == "/"||visor.value==x){
      visor.value = "";
    }
    visor.value = visor.value + "7";
  }
});
num8.addEventListener('click', event => {
  if(visor.value.length < 8){
    if(visor.value == "+"||visor.value == "-"||visor.value == "*"||visor.value == "/"||visor.value==x){
      visor.value = "";
    }
    visor.value = visor.value + "8";
  }
});
num9.addEventListener('click', event => {
  if(visor.value.length < 8){
    if(visor.value == "+"||visor.value == "-"||visor.value == "*"||visor.value == "/"||visor.value==x){
      visor.value = "";
    }
    visor.value = visor.value + "9";
  }
});
num0.addEventListener('click', event => {
  if(visor.value.length < 8){
    if(visor.value == "+"||visor.value == "-"||visor.value == "*"||visor.value == "/"||visor.value==x){
      visor.value = "";
    }
    visor.value = visor.value + "0";
  }
});
bPonto.addEventListener('click', event => {
  if(visor.value.length < 8){
    if(visor.value == "+"||visor.value == "-"||visor.value == "*"||visor.value == "/"||visor.value == ""){
      visor.value = "0";
    }
  visor.value = visor.value + ".";
  }
});

// Funçao modificada e testada
function Somar(){
  if(visor.value == bSoma.innerHTML){
    visor.value = resultado;
  }else if(visor.value == resultado){
    visor.value = bSoma.innerHTML;
  }else if(!x){
    x = parseFloat(visor.value);
    visor.value = bSoma.innerHTML;
    z = bSoma.innerHTML;
  }else if(x && !y){
    y = parseFloat(visor.value);
    z = bSoma.innerHTML;
    visor.value = `${x} + ${y}`;
  }
  console.log("Soma", x, y, z);
}

// Próxima função a ser modificada e testada
 
function Subtrair(){
  if(!x){
    x = parseFloat(visor.value);
    visor.value = "-";
  }else if(x && !y){
    y = parseFloat(visor.value);
    z = "-";
    if(x && y){
      x -= y;
      visor.value = x;
      y = null;
    }
  }
  console.log(x, y, z);
}

function Multiplicar(){
  operacaoCalc.push(parseFloat(visor.value));
  operacaoCalc.push(bMult.value);
  memoriaCalc.push(operacaoCalc);
  console.log(memoriaCalc);
  operacaoCalc = [];
  visor.value = "";
}

function Dividir(){
  operacaoCalc.push(parseFloat(visor.value));
  operacaoCalc.push(bDiv.value);
  memoriaCalc.push(operacaoCalc);
  console.log(memoriaCalc);
  operacaoCalc = [];
  visor.value = "";
}

// Função testada junto com a operação Somar
function Resultado(){
  if(z === "+" && x && !y){
    y = parseFloat(visor.value);
    resultado = x + y;
    visor.value = resultado;
    x = resultado;
    y = null;
    z = null;
  }else if(visor.value === `${x} + ${y}`){
    resultado = x + y;
    visor.value = resultado;
    x = resultado;
    y = null;
    z = null;
  }
  console.log(x, y, z, resultado);
}

function LimparCampo(){
  visor.value = historico[historico.length - 1];
  historico.pop();
  // let palavra = visor.value;
  // let limparUltCampo = palavra.substring(0, palavra.length - 1);
  // visor.value = limparUltCampo;
}

function Reset(){
  x = null;
  y = null;
  console.clear();
  visor.value = "";
}