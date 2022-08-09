const $botao7 = document.querySelector(".botao-7");
const $botao8 = document.querySelector(".botao-8");
const $botao9 = document.querySelector(".botao-9");
const $botaoSoma = document.querySelector(".botao-soma");
const $botaoApagaNumero = document.querySelector(".botao-apaga");
const $botao4 = document.querySelector(".botao-4");
const $botao5 = document.querySelector(".botao-5");
const $botao6 = document.querySelector(".botao-6");
const $botaoMultiplicacao = document.querySelector(".botao-x");
const $botaoApagaTudo = document.querySelector(".botao-CE");
const $botao1 = document.querySelector(".botao-1");
const $botao2 = document.querySelector(".botao-2");
const $botao3 = document.querySelector(".botao-3");
const $botaoSubtracao = document.querySelector(".botao-menos");
const $botao0 = document.querySelector(".botao-0");
const $botaoVirgula = document.querySelector(".botao-virgula");
const $botaoIgual = document.querySelector(".botao-igual");
const $visor = document.getElementById("visor");
let valorBotao = "";
let contadorVirgula = 0;
let resultado = 0
let calcula = "";

// click de botões

$botao0.addEventListener("click",function(){
   valorBotao = $botao0.value;
   preencheVisor(valorBotao);
})

$botao1.addEventListener("click",function(){
   valorBotao = $botao1.value;
   preencheVisor(valorBotao);
})

$botao2.addEventListener("click",function(){
   valorBotao = $botao2.value;
   preencheVisor(valorBotao);
})

$botao3.addEventListener("click",function(){
   valorBotao = $botao3.value;
   preencheVisor(valorBotao);
})

$botao4.addEventListener("click",function(){
   valorBotao =  $botao4.value;
   preencheVisor(valorBotao);
})

$botao5.addEventListener("click",function(){
   valorBotao = $botao5.value;
   preencheVisor(valorBotao);
})

$botao6.addEventListener("click",function(){
   valorBotao = $botao6.value;
   preencheVisor(valorBotao);
})

$botao7.addEventListener("click",function(){
   valorBotao = $botao7.value;
   preencheVisor(valorBotao);
})

$botao8.addEventListener("click",function(){
   valorBotao = $botao8.value;
   preencheVisor(valorBotao);
})

$botao9.addEventListener("click",function(){
   valorBotao = $botao9.value;
   preencheVisor(valorBotao);
})

$botaoVirgula.addEventListener("click",function(){
   valorBotao = $botaoVirgula.value;
   verificaVirgula(valorBotao, contadorVirgula);
   contadorVirgula ++
})

//Botões operadores
$botaoSoma.addEventListener("click",function(){
   valorBotao = $botaoSoma.value;
   verificaUltimoOperador(valorBotao);
   contadorVirgula = 0
})

$botaoMultiplicacao.addEventListener("click",function(){
   valorBotao = $botaoMultiplicacao.value;
   verificaUltimoOperador(valorBotao);
   contadorVirgula = 0
})

$botaoSubtracao.addEventListener("click",function(){
   valorBotao = $botaoSubtracao.value;
   verificaUltimoOperador(valorBotao);
   contadorVirgula = 0
})

//Botão ativa fuções

$botaoIgual.addEventListener("click",function(){
   resultado = document.getElementById("visor").innerText;
   if(resultado){
      resultadoTotal = calcular(resultado);
      document.getElementById("visor").innerText = eval(resultadoTotal);
   }
})

$botaoApagaTudo.addEventListener("click",function(){
   $visor.innerText = "";
   contadorVirgula = 0
})

$botaoApagaNumero.addEventListener("click",function(){
   let str = document.getElementById("visor").innerText;
   let ultimoNumero = str[str.length - 1]
   if(ultimoNumero == ","){
      contadorVirgula = 0
   }
   let str2 = str.substring(0, str.length - 1);
   //alert(str[str.length - 1])
   $visor.innerText = str2;
})

// funções da calculadora
function preencheVisor(valorClicado){
   $visor.innerText += valorClicado;
}

function verificaUltimoOperador(operador){
   str = $visor.innerText;
   ultimoValor = str[str.length - 1]
   if (ultimoValor == "+" || ultimoValor == "-" || ultimoValor == "x" ){
      str2 = str.replace(/.$/,operador);
      $visor.innerText =  str2
   }
   else if(ultimoValor == undefined){
   }
   else{
      $visor.innerText += operador;
   }
}

function verificaVirgula(virgula, contadorVirgula){
   str = $visor.innerText;
   ultimoValor = str[str.length - 1]
   if (ultimoValor == "+" || ultimoValor == "-" || ultimoValor == "x" || ultimoValor == ","  || contadorVirgula > 1 || ultimoValor == undefined){

   }
   else{
      $visor.innerText += virgula;
   }
}

function calcular(expressão){
   calcula = expressão;
   for(i=0; i <= calcula.length; i++){
      verificarOperador = calcula[i];
      if(verificarOperador == "x"){
         calcula = calcula.replace("x","*");
      }else if(verificarOperador == ","){
         calcula = calcula.replace(",",".");
      }
   }
   return calcula;
}