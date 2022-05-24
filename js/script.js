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
  if(visor.value.length < 8)
  visor.value = visor.value + "1";
});
num2.addEventListener('click', event => {
  if(visor.value.length < 8)
  visor.value = visor.value + "2";
});
num3.addEventListener('click', event => {
  if(visor.value.length < 8)
  visor.value = visor.value + "3";
});
num4.addEventListener('click', event => {
  if(visor.value.length < 8)
  visor.value = visor.value + "4";
});
num5.addEventListener('click', event => {
  if(visor.value.length < 8)
  visor.value = visor.value + "5";
});
num6.addEventListener('click', event => {
  if(visor.value.length < 8)
  visor.value = visor.value + "6";
});
num7.addEventListener('click', event => {
  if(visor.value.length < 8)
  visor.value = visor.value + "7";
});
num8.addEventListener('click', event => {
  if(visor.value.length < 8)
  visor.value = visor.value + "8";
});
num9.addEventListener('click', event => {
  if(visor.value.length < 8)
  visor.value = visor.value + "9";
});
num0.addEventListener('click', event => {
  if(visor.value.length < 8)
  visor.value = visor.value + "0";
});
bPonto.addEventListener('click', event => {
  visor.value = visor.value + ".";
});
bSoma.value = "+";
bSub.value = "-";
bMult.value = "*";
bDiv.value = "/";

let memoriaCalc = [], operacaoCalc = [];

function Somar(){
  operacaoCalc.push(parseFloat(visor.value));
  operacaoCalc.push(bSoma.value);
  memoriaCalc.push(operacaoCalc);
  console.log(memoriaCalc);
  operacaoCalc = [];
  visor.value = "";
}

function Subtrair(){
  operacaoCalc.push(parseFloat(visor.value));
  operacaoCalc.push(bSub.value);
  memoriaCalc.push(operacaoCalc);
  console.log(memoriaCalc);
  operacaoCalc = [];
  visor.value = "";
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

// Função dando erro ao executar expressões
function Resultado(){

  let l, result;

  operacaoCalc.push(parseFloat(visor.value));
  operacaoCalc.push("");
  memoriaCalc.push(operacaoCalc);

  for(l = 0; l < memoriaCalc.length; l++){
    if(memoriaCalc[l][1] === "*"){        
      result = memoriaCalc[l][0] * memoriaCalc[l+1][0];
    }else if(memoriaCalc[l][1] === "/"){
      result = memoriaCalc[l][0] / memoriaCalc[l+1][0];
    }else if(memoriaCalc[l][1] === "+"){        
      result = memoriaCalc[l][0] + memoriaCalc[l+1][0];
    }else if(memoriaCalc[l][1] === "-"){
      result = memoriaCalc[l][0] - memoriaCalc[l+1][0];
    }
  }

  if(result.toString().length < 8){
    visor.value = result;
  }else{
    visor.value = "ERR";
  }
  operacaoCalc = [];
  memoriaCalc = [];
  console.log(typeof(result), result);
}

function LimparCampo(){
  let palavra = visor.value;
  let limparUltCampo = palavra.substring(0, palavra.length - 1);
  visor.value = limparUltCampo;
}

function Reset(){
  memoriaCalc = [];
  operacaoCalc = [];
  console.clear();
  visor.value = "";
}