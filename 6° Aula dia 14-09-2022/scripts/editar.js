//Buscar na API pelo ID informado
//Preencher os campos Nome e preço com os valores obtidos na API
//Mudar  os valores no formulario (por exenplo, o preco)
//Enviar novament os Novos valores para a API (put)

const params = new URLSearchParams(window.location.search)
const id = params.get('id');