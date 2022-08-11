//---------------Callbacks----------------------
let btn = document.querySelector("#btn");
btn.addEventListener("click", (ev) => console.log(ev.target));

function botaoClicado(){
    console.log("O botão foi clicado ");
    buscaUsuario();
}
function buscaUsuario(){
    console.log("Buscando Usuario");
    listaPedidos();
}
function listaPedidos(){
    console.log("Listando pedidos");
    verificaStatus();
}
function verificaStatus(){
    console.log("Verificando Status")

}

//----------Arrow Fuction----------

// function somar (n1,n2){
//     return n1 + n2;

// }

// let somar = function (n1,n2){
//     return n1 + n2;
// }

// let somar = (n1, n2)=>{
//     return n1 + n2;
// }

let somar = (n1, n2) => n1 + n2;


let res = somar(10,20);
console.log(res);

//-----------Promises -----------
//Síncrona: acontece uma após a outra
//Assincrona: acontecem em paralelo
function soAceitaPares(numero){
  let promessa = new Promise( (resolve, reject) => {
    if (numero %2 == 0) { //par
        let resultado = ("O numero é par");
        resolve(numero)
    }else{                //impar
        reject( new Error("O numero é ímpar"))
    }
  });
  
  return promessa;
}
// let resposta = soAceitaPares(10);
// console.log(resposta);

function soAceitaPositivos(numero){
    return new Promise ((resolve, reject) => {
        if (numero >= 0 ){
            resolve("O Número é Positivo");
        }else{
            reject("O Número é Negativo")
        }
    });
}




soAceitaPares(10)
    .then( (responsePar) => soAceitaPositivos(responsePar))
    .then((responsePositivo) => console.log(responsePositivo))
    .catch( (err) => console.log(err) );

console.log("PROGRAMA");

//---------------APIs-------------
fetch("https://restcountries.com/v3.1/name/Brazil")
    .then( (response) => response.json() )
    .then( (dados) => console.log(dados[0].name.common))
    .catch( (err) => console.log(err));