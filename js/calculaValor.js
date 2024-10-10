const valorEntrada = document.getElementById("valor-entrada");
const valorSaida = document.getElementById("valor-saida");



const endpointAPI = "https://open.er-api.com/v6/latest/";


async function calculaValor(){
    let entrada = seletorMoedasEntrada.value
    let saida =  seletorMoedasSaida.value
    let valorRetornado = await getValoresAPI(entrada,saida)

    let quantidade = parseFloat(valorEntrada.value).toFixed(2)
    let resultado = parseFloat(valorRetornado * quantidade).toFixed(2);
    valorSaida.innerHTML = 
    `
    <p class="valor-saida" id="valor-saida"> ${quantidade} ${entrada} = ${resultado} ${saida} </p>
    `

}

async function getValoresAPI(entradaAPI,saidaAPI) {
    const res = await fetch(endpointAPI+entradaAPI)
    valores = await res.json()
    buscandoData(valores)
    return valores.rates[saidaAPI]
}