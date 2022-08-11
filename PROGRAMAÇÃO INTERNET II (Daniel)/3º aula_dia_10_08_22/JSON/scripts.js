// scripts.js
//JAVASCRIOT OBJECT NOTATION

let box = document.querySelector("#box"); //selecionando div obj

let json = JSON.stringify(bd);

box.innerText = json;
// obj.innerText = bd;

let str = '{"nome": "Ana", "filho":[{"nome":"Aninha", "idade":5}, {"nome":"Joaozinho", "idade":3}]}';

let obj = JSON.parse(str);
alert(str.nome)
alert(obj.filho[0].nome)
