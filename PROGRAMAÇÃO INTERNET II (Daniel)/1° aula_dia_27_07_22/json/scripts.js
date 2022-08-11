let infoNome = document.getElementById("infoNome");
let infoDisciplinas = document.querySelector("infoDisciplinas");

infoNome.innerText = bd.nome;
infoResumo.innerText = bd.resumo;
infoNota.innerText = bd.nota;
infoFoto.innerHTML = bd.fotoPoster;

let image = document.querySelector("image");
image.setAttribute("src", bd.fotoPoster);


// let html = '';
// for(let i = 0; i < alunos[0].disciplinas.length; i++){
//     let nomeDisc = alunos[0].disciplinas[i].nome;
//     let status = (alunos[0].disciplinas[i].cursado == true) ? 'cursado' : 'crusando';

//     html += '<b>'+ nomeDisc + '</b> ('+ status + ')<br>';
//     html += `<b>${nomeDisc}</b> ${status} <br/>`;
// }
// infoDisciplinas.innerHTML = html;