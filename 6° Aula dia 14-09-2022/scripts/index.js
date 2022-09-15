const apiUrl = "http://localhost:3333/produtos";

fetch(apiUrl)
    .then(dados => dados.json())
    .then(dados => preencheLista(dados))
    .catch(erro => alert(erro));

function preencheLista(dados) {
    // console.log(dados);
    let img = 1;
    for (let produto of dados){
        let html = `
            <li class="bg-stale-50 border-2 border-stale-300 flex justify-start p-2 my-2">
                <img class="w-[80px]" 
                    src="imagens/foto${img}.jpg" alt="">
                <div class="flex flex-1 justify-between items-center px-3">
                    <a class="text-xl font-semibold text-sky-500"
                    href="editar.html?id=${produto.id}">
                        ${produto.nome}
                    </a>
                    <span class="text-right text-3x1 font-semibold text-red-400">
                        ${produto.preco}
                    </span>
                </div>
            </li>
        `;
        document.querySelector("#ulProdutos").insertAdjacentHTML("beforeend", html);
        
        img = (img == 1 ) ? 2 : 1;
    }    
}    