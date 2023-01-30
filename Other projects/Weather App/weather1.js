apiKey = "ba8240ac7089faca4a60770f12e8b51b"
    // city: document.querySelector('searchBar').value,
async function getData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`)
        // const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${this.apiKey}&units=metric`)

        const apiData = await response.json()
        return (apiData)
        // return this.displayData(apiData)
    } catch (error) {
        console.log(error)
    }

}

// http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${this.apiKey}&units=metric
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=${this.apiKey}&units=metric


    document.getElementById('searchButton').addEventListener("click", async () => {
    let apiData = []
    let city = document.getElementById('searchBar').value
    try {
        apiData = await getData(city)
    } catch (error) {
        console.log(error)
    }
    console.log(apiData)

    document.getElementById('location').innerText = `${apiData.name}, ${apiData.sys.country}`
    document.getElementById('description').innerText = apiData.weather[0].description
    document.getElementById('temperature').innerText = apiData.main.temp + '℃'
    document.getElementById('feelsLike').innerText = apiData.main.feels_like + '℃'
    document.getElementById('minTemp').innerText = apiData.main.temp_min + '℃'
    document.getElementById('maxTemp').innerText = apiData.main.temp_max + '℃'
    document.getElementById('humidity').innerText = apiData.main.humidity + '%'
    document.getElementById('windSpeed').innerText = apiData.wind.speed + ' Km/h'
    document.getElementById('windDirection').innerText = apiData.wind.deg + '°'
    document.getElementById('icon').src = `http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`
    document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + city + "')";
})

    searchBar.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
        searchButton.click()
        }
    })

