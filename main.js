function checkMyGasPrice() {
    if (document.querySelector("select").value == "Gas 95") {
        let price = 6.15 * parseFloat(document.querySelector("#value").value)
        document.querySelector("#show").innerHTML = price.toFixed(2)
    } else if (document.querySelector("select").value == "Gas 98") {
         let price = 6.55 * parseFloat(document.querySelector("#value").value)
        document.querySelector("#show").innerHTML = price.toFixed(2)
    } else if (document.querySelector("select").value == "Petrol") {
        let price = 7.15 * parseFloat(document.querySelector("#value").value)
        document.querySelector("#show").innerHTML = price.toFixed(2)
    } else if (document.querySelector("select").value == "Verva Petrol") {
        let price = 7.55 * parseFloat(document.querySelector("#value").value)
        document.querySelector("#show").innerHTML = price.toFixed(2)
    } else if (document.querySelector("select").value == "LPG") {
        let price = 3.39 * parseFloat(document.querySelector("#value").value)
        document.querySelector("#show").innerHTML = price.toFixed(2)
    } else {
        document.querySelector("#show").innerHTML = "Incorrect value"
    }
}
