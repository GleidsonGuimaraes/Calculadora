/*
  As variáveis x e y recebem os valores que vão ser utilizadas nas operações.
  A variável z recebe o sinal que determina qual operação será realizada.
*/
let x, y, z, resultado, visor;
visor = document.getElementById("inp1");

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
const bAC = document.getElementById("bt1");
const bC = document.getElementById("bt4");

num1.addEventListener('click', () => {
  if(visor.value.length < 8){
    verificandoVisor();
    visor.value = visor.value + "1";
  }
});
num2.addEventListener('click', () => {
  if(visor.value.length < 8){
    verificandoVisor();
    visor.value = visor.value + "2";
  }
});
num3.addEventListener('click', () => {
  if(visor.value.length < 8){
    verificandoVisor();
    visor.value = visor.value + "3";
  }
});
num4.addEventListener('click', () => {
  if(visor.value.length < 8){
    verificandoVisor();
    visor.value = visor.value + "4";
  }
});
num5.addEventListener('click', () => {
  if(visor.value.length < 8){
    verificandoVisor();
    visor.value = visor.value + "5";
  }
});
num6.addEventListener('click', () => {
  if(visor.value.length < 8){
    verificandoVisor();
    visor.value = visor.value + "6";
  }
});
num7.addEventListener('click', () => {
  if(visor.value.length < 8){
    verificandoVisor();
    visor.value = visor.value + "7";
  }
});
num8.addEventListener('click', () => {
  if(visor.value.length < 8){
    verificandoVisor();
    visor.value = visor.value + "8";
  }
});
num9.addEventListener('click', () => {
  if(visor.value.length < 8){
    verificandoVisor();
    visor.value = visor.value + "9";
  }
});
num0.addEventListener('click', () => {
  if(visor.value.length < 8){
    verificandoVisor();
    visor.value = visor.value + "0";
  }
});
bPonto.addEventListener('click', () => {
  if(visor.value.length < 8){
    verificandoVisor();
    if(visor.value == ""){
      visor.value = 0;
    }
    visor.value = visor.value + ".";
  }
});

bSoma.addEventListener("click", Somar);
bSub.addEventListener("click", Subtrair);
bMult.addEventListener("click", Multiplicar);
bDiv.addEventListener("click", Dividir);
bRes.addEventListener("click", Resultado);
bAC.addEventListener("click", Reset);
bC.addEventListener("click", LimparCampo);

function verificandoVisor(){
  let v = visor.value;
  if(v == "+"||v == "-"||v == "*"||v == "/"||v == "ERR"||v == x){
    visor.value = "";
  }
}

function limitandoVisor(){
  let valor = resultado.toString();
  if(valor.length > 8){
    resultado = "ERR";
  }
  visor.value = resultado;
  
}

function Somar(){
  if(visor.value == "+"||visor.value == "-"||visor.value == "*"||visor.value == "/"){
    visor.value = bSoma.innerHTML;
  }else if(visor.value == resultado){
    x = resultado;
    visor.value = bSoma.innerHTML;
    z = bSoma.innerHTML;
    resultado = null;
    y = null;
  }else if(!x || x && !y && !z){
    x = parseFloat(visor.value);
    visor.value = bSoma.innerHTML;
    z = bSoma.innerHTML;
  }else if(x && !y && z){
    y = parseFloat(visor.value);
    if(z != bSoma.innerHTML){
      visor.value = `${x} ${z} ${y}`;
    }else{
      visor.value = `${x} + ${y}`;
    }
  }
  console.log("Soma", x, y, z);
}

function Subtrair(){
  if(visor.value == "+"||visor.value == "-"||visor.value == "*"||visor.value == "/"){
    visor.value = bSub.innerHTML;
  }else if(visor.value == resultado){
    x = resultado;
    visor.value = bSub.innerHTML;
    z = bSub.innerHTML;
    resultado = null;
    y = null;
  }else if(!x || x && !y && !z){
    x = parseFloat(visor.value);
    visor.value = bSub.innerHTML;
    z = bSub.innerHTML;
  }else if(x && !y && z){
    y = parseFloat(visor.value);
    if(z != bSub.innerHTML){
      visor.value = `${x} ${z} ${y}`;
    }else{
      visor.value = `${x} + ${y}`;
    }
  }
  console.log("Subtrair", x, y, z);
}

function Multiplicar(){
  if(visor.value == "+"||visor.value == "-"||visor.value == "*"||visor.value == "/"){
    visor.value = bMult.innerHTML;
  }else if(visor.value == resultado){
    x = resultado;
    visor.value = bMult.innerHTML;
    z = bMult.innerHTML;
    resultado = null;
    y = null;
  }else if(!x || x && !y && !z){
    x = parseFloat(visor.value);
    visor.value = bMult.innerHTML;
    z = bMult.innerHTML;
  }else if(x && !y && z){
    y = parseFloat(visor.value);
    if(z != bMult.innerHTML){
      visor.value = `${x} ${z} ${y}`;
    }else{
      visor.value = `${x} + ${y}`;
    }
  }
  console.log("Multiplicar", x, y, z);
}

function Dividir(){
  if(visor.value == "+"||visor.value == "-"||visor.value == "*"||visor.value == "/"){
    visor.value = bDiv.innerHTML;
  }else if(visor.value == resultado){
    x = resultado;
    visor.value = bDiv.innerHTML;
    z = bDiv.innerHTML;
    resultado = null;
    y = null;
  }else if(!x || x && !y && !z){
    x = parseFloat(visor.value);
    visor.value = bDiv.innerHTML;
    z = bDiv.innerHTML;
  }else if(x && !y && z){
    y = parseFloat(visor.value);
    if(z != bDiv.innerHTML){
      visor.value = `${x} ${z} ${y}`;
    }else{
      visor.value = `${x} + ${y}`;
    }
  }
  console.log("Dividir", x, y, z);
}

function Resultado(){
  if(z === "+" && x && !y){ //Soma
    y = parseFloat(visor.value);
    resultado = x + y;
    limitandoVisor();
  }else if(visor.value === `${x} + ${y}`){
    resultado = x + y;
    limitandoVisor();
  }else if(x && y && z == "+"){
    resultado = x + y;
    limitandoVisor();
  }else if(z === "-" && x && !y){ //Subtração
    y = parseFloat(visor.value);
    resultado = x - y;
    limitandoVisor();
  }else if(visor.value === `${x} - ${y}`){
    resultado = x - y;
    limitandoVisor();
  }else if(x && y && z == "-"){
    resultado = x - y;
    limitandoVisor();
  }else if(z === "*" && x && !y){ //Multiplicação
    y = parseFloat(visor.value);
    resultado = x * y;
    limitandoVisor();
  }else if(visor.value === `${x} * ${y}`){
    resultado = x * y;
    limitandoVisor();
  }else if(x && y && z == "*"){
    resultado = x * y;
    limitandoVisor();
  }else if(z === "/" && x && !y){ //Divisão
    y = parseFloat(visor.value);
    resultado = x / y;
    limitandoVisor();
  }else if(visor.value === `${x} / ${y}`){
    resultado = x / y;
    limitandoVisor();
  }else if(x && y && z == "/"){
    resultado = x / y;
    limitandoVisor();
  }
  console.log(x, y, z, resultado);
}

function LimparCampo(){
  if(visor.value == resultado || visor.value == `${x} ${z} ${y}`){
    visor.value = y;
    resultado = null;
  }else if(visor.value == y){
    visor.value = z;
    y = null;
  }else if(visor.value == z){
    visor.value = x;
    z = null;
  }else if(visor.value == x || visor.value && !x){
    visor.value = "";
    x = null;
  }else if(!y && visor.value){
    visor.value = z;
  }
  console.log(x, y, z, resultado);
}

function Reset(){
  x = null;
  y = null;
  z = null;
  resultado = null;
  console.clear();
  visor.value = "";
}