// alert("Funcionou");

// let nome = "jose";
//criando um vetor
let nomes = ['Ana', 'Bruno', 'Carlos'];
console.log(nomes);

//Acessando o Vetor
let primeiro = nomes[0];
console.log(primeiro);

//Contando o tamanho da lista
let tamanho = nomes.length;
console.log("A lista possui " + tamanho + " elementos")

//Trocando elementos da lista
nomes[0] = "Ana Maria";
console.log(nomes);

//adicionando valor do vetor 
// nomes[1] += 'Henrique';
nomes[1] = nomes[1] + ' Henrique';
console.log(nomes);

// Inserindo um novo elemento na ultima posição lista
nomes.push('Daniel', 'Kennes', 'Altair' );
console.log(nomes);

//Removendo o Ultimo elemento da lista
nomes.pop();
console.log(nomes);

// Inserindo um novo elemento na lista no comedo da lista
nomes.unshift('Pedro', 'João', 'Herique' );
console.log(nomes);

//Removendo o Primeiro elemento da lista
nomes.shift();
console.log(nomes);


for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}

//For OF nao modifica o que esta no vetor
console.log("###### FOR OF #########")
for (let nome of nomes){
    nome = 'Dr ' + nome;
    console.log(nome);
}
console.log(nomes);

console.log("########################")
console.log("OBJETOS")

// let ficha = new Object();
let ficha = {
    nome: 'Ana',
    idade: 30, 
    cidade:'Ituiutaba', 
    devendo:false
};
console.log(ficha)

let campo = 'cidade';
console.log(ficha[campo]);

console.log("###### FOR IN #########")

for (let item in ficha){
    console.log(item + ":", ficha[item]);
}

console.log("########################")

let alunos = [
    {
        nome: 'Ana',
        nota: 9.7,
        disciplinas:[
            {
                nome: "PI",
                cursado: true
            },
            {
                nome: "P II",
                cursado: false
            }
        ]
    },
    {
        nome: 'Bruno',
        nota: 2.4,
    },
    {
        nome: 'Carlos',
        nota: 6.0,
    }
];
console.log(alunos);

for (let item of alunos){
    console.log([item.nome])
}

console.log( alunos[0].disciplinas[0].nome)

for (let i = 0; i < alunos.length; i++){
    console.log(alunos [i].nome, alunos[i].nota)
}

//Manipulando o HTML
let infoNome = document.getElementById("infoNome");
let infoDisciplinas = document.querySelector("#infoDisciplinas");

infoNome.innerText = alunos[0].nome;

let html = '';
for(let i = 0; i < alunos[0].disciplinas.length; i++){
    let nomeDisc = alunos[0].disciplinas[i].nome;
    let status = (alunos[0].disciplinas[i].cursado == true) ? 'cursado' : 'crusando';

    // html += '<b>'+ nomeDisc + '</b> ('+ status + ')<br>';
    html += `<b>${nomeDisc}</b> ${status} <br/>`;
}
infoDisciplinas.innerHTML = html;




// alunos.sort(item => item.nota - item.nota);
// console.log([alunos]);

