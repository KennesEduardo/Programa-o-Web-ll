var select = document.getElementById('selectPaises');
    select.addEventListener('change', function(puxarNomes){
    let valor = this.value 
    console.log(valor) 
   
        fetch("https://restcountries.com/v3.1/name/"+valor)
            .then ((response) => response.json())
            .then((informacoes) => puxarInfos(informacoes))
            .catch(( err) => console.log(err));


            
            function puxarInfos(informacoes){

                
                for(let info of informacoes){
                    let html =`

                        <li class="flag"><img src="${info.flags.png}" alt="Bandeiras"></li>
                        <li class="name">Nome: ${info.name.common}</li>
                        <li class="capital">Capital: ${info.capital}</li>
                        <li class="population">População: ${info.population}</li>
                        <li class="area">Área: ${info.area}</li>
                        <li class="coin">Moeda: ${info.currenties}</li>
                        <li class="language">Idioma: ${info.languages}</li>
                        <li class="fontier">Frontreiras: ${info.borders}</li>
                        

                    `;

                    document.querySelector(".informacoes").innerHTML = html 
                    
                     
                }
                console.log(info)
                moeda = info.currencies
                moeda2 = Object.values(moeda)

                idioma = info.languages
                idioma2 =Object.values(idioma)
                
            }

    });
    


fetch("https://restcountries.com/v3.1/all?fields=name")
    .then ((response) => response.json())
    .then((namePaises) => puxarNomes(namePaises))
    .catch( (err) => console.log(err));

function puxarNomes(namePaises){

    for (let paisesName of namePaises){
        
        let html =`
            <option value="${paisesName.name.common}" id="optPaises">${paisesName.name.common}</option>
        `;
        document.querySelector("#optPaises").insertAdjacentHTML("beforebegin", html)
    }
}