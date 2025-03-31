const convertButton = document.querySelector(".convert-button") // Variável do botão

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value // Variável onde obtém o valor do input

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Moedas lado esquerdo

    const currencyValueConverted = document.querySelector(".currency-value") // Moedas lado direito

    const dolarToday = 5.76 // Valor do Dólar

    const convertedValue = inputCurrencyValue / dolarToday // Valor do Dólar dividido pelo valor do Input

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) // Recebe o valor do input e mostra-o formatado embaixo da moeda lado esquerdo

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedValue) // Recebe o valor do input convertido e mostra-o formatdo embaixo da moeda lado direito

} // Função de converter valor

convertButton.addEventListener("click", convertValues) // Evento de clique do botão e chamando valor do input

const inputNumero = document.querySelector(".input-currency") // Variável do input apenas números

function inputValues () {
    this.value = this.value.replace(/[^0-9]/g, "")
} // Função para conter apenas digitos númericos

inputNumero.addEventListener("input", inputValues) // Evento do input apenas números
