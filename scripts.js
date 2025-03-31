const convertButton = document.querySelector(".convert-button") // Variável do botão
const currencySelect = document.querySelector("#converter-para") // Variável do select converter para

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // Variável onde obtém o valor do input

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Moeda lado esquerdo

    const currencyValueConverted = document.querySelector(".currency-value") // Moedas lado direito

    const dolarToday = 5.76 // Valor do Dólar
    const euroToday = 6.25 // Valor do Euro

    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    } // Se estiver selecionado a opção de Dólar vai mostrar o valor convertido aqui

    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    } // Se estiver selecionado a opção de Euro vai mostrar o valor convertido aqui

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) // Recebe o valor do input e mostra-o formatado embaixo da moeda lado esquerdo

} // Função de converter valor

function changeCurrency() {
    const currencyName = document.getElementById("currency-name") // Variável do nome da moeda
    const currencyImage = document.getElementById("currency-flag") // Variável da imagem da moeda

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/moeda-americana.png"
    } // Se selecionado a opção Dólar vai mostrar nome e imagem do Dólar americano aqui

    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/moeda-euro.png"
    } // Se selecionado a opção Euro vai mostrar nome e imagem do Euro aqui

    convertValues() // Chama o valor convertido junto com as funções

} // Função de troca de bandeira e valor

convertButton.addEventListener("click", convertValues) // Evento de clique do botão e chamando valor do input
currencySelect.addEventListener("change", changeCurrency) // Evento de troca do select ao trocar de moeda

const inputNumero = document.querySelector(".input-currency") // Variável do input apenas números

function inputValues() {
    this.value = this.value.replace(/[^0-9]/g, "")
} // Função para conter apenas digitos númericos

inputNumero.addEventListener("input", inputValues) // Evento do input apenas números
