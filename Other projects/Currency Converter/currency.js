apiKey = "5e83e6cba02c9b2581af274c";

const dropList = document.querySelectorAll("form select")
const fromCurrency = document.querySelector("#fromSelection")
const toCurrency = document.querySelector("#toSelection")
const getButton = document.querySelector("#exchangeButton")
const swapButton = document.querySelector("#swapButton")

async function getData(from) {
    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`)
        const apiData = await response.json()
        return (apiData)
        // return this.displayData(apiData)
    } catch (error) {
        console.log(error)
    }
}

for (let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list){
        let selected;

        if (i === 0) {
            if (currency_code === "GBP") {
                selected = "selected";
            } else {
                selected = "";
            }
        } else {
            if (currency_code === "USD") {
                selected = "selected";
            } else {
                selected = "";
            }
        }
        // let selected = i == 0 ? currency_code == "GBP" ? "selected" : "" : currency_code == "USD" ? "selected" : "";
    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;

    dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", event =>{
        console.log(event.target)
        loadFlag(event.target);
    });
}

function loadFlag(element) {
    for(country_id in country_list) {
        if (country_id === element.value) {
            let imgTag = element.parentNode.querySelector('img')
            imgTag.src = `https://flagcdn.com/48x36/${country_list[country_id].toLowerCase()}.png`
        }
    }
}

swapButton.addEventListener('click', function(e) {
    e.preventDefault()
    swap()
})
function swap() {
    let tempData = fromCurrency.value
    fromCurrency.value = toCurrency.value
    toCurrency.value = tempData
    loadFlag(fromCurrency)
    loadFlag(toCurrency)
}

getButton.addEventListener('click', async function(event) {
    event.preventDefault()
    let amount = document.querySelector('input').value
    let from = fromCurrency.value
    let to = toCurrency.value
    console.log(amount)
    console.log(from)
    console.log(to)

    try {
        apiData = await getData(from)
        console.log(apiData)
        
    } catch (error) {
        console.log(error)
    }

    let toEx = apiData.conversion_rates[to]
    console.log(toEx)
    let exchangeResult = amount * toEx
    console.log(exchangeResult)

    document.querySelector('.exchange-rate').innerText = `${amount} ${from} = ${exchangeResult} ${to}`
    exchangeResult = 0
})



