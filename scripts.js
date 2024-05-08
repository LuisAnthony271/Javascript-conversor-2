
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyName = document.getElementById("currency-name")
const currency = document.querySelector(".currency")
const currencyImage = document.querySelector(".currency-img")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor do real a ser convertido//
    const currencyConverted = document.querySelector(".currency-value") // Valor convertido em dolar //

    console.log(currencySelect.value)

    const dolarToday = 5.2
    const euroToday = 5.49
    const libraToday = 0.16
    const bitcoinToday = 0.0000031

    if (currencySelect.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'USD'
        })
            .format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-Uk", {
            style: 'currency',
            currency: 'EUR'})
            .format(inputCurrencyValue / euroToday)
     }

     
    if (currencySelect.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-Uk", {
            style: 'currency',
            currency: 'GBP'})
            .format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin"){
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'BTC'})
            .format(inputCurrencyValue / bitcoinToday)
        }    
    


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: 'currency',
        currency: 'BRL'})
        .format(inputCurrencyValue)
}

function changeCurrency(){
    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "US$ Dolar Americano"
        currencyImage.src = "./assets/dollar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "€ Euro"
        currencyImage.src = "./assets/euro.png"
    }
    
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "£ libra"
        currencyImage.src = "./assets/libra.png"
    }

    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "BTC Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

