let weather = {
    apiKey: "ba8240ac7089faca4a60770f12e8b51b",
    // city: document.querySelector('searchBar').value,
    async getData(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`)
            const apiData = await response.json()
            return (apiData)
            // return this.displayData(apiData)
        } catch (error) {
            console.log(error)
        }

    },
    async displayData(apiData) {
        try {
            document.getElementById('location').innerText = document.getElementById('searchBar').value
            // document.getElementById('icon').innerText = apiData.weather[0].icon
            document.getElementById('description').innerText = apiData.weather[0].description
            document.getElementById('temperature').innerText = apiData.main.temp
            document.getElementById('feelsLike').innerText = apiData.main.feels_like
            document.getElementById('minTemp').innerText = apiData.main.temp_min
            document.getElementById('maxTemp').innerText = apiData.main.temp_max
            document.getElementById('humidity').innerText = apiData.main.humidity
            document.getElementById('windSpeed').innerText = apiData.wind.speed
            document.getElementById('windDirection').innerText = apiData.wind.deg
        } catch (error) {
            console.log(error)
        }
    }

}


document.getElementById('searchButton').addEventListener('click', async function(){
    let apiData = []
    let city = document.getElementById('searchBar').value
    try {
        apiData = await weather.getData(city)
        weather.displayData(apiData)

    } catch (error) {
        console.log(error)
    }
    console.log(apiData)
})







        // const {name} = apiData
        // const {icon, description} = apiData.weather[0]
        // const {temp, feels_like, temp_min, temp_max, humidity} = apiData.main
        // const {speed, deg} = apiData.wind
        
        // console.log(name, icon, description, temp, feels_like, temp_min, temp_max, humidity, speed, deg)







// const apiKey = "ba8240ac7089faca4a60770f12e8b51b"
//     // city: document.querySelector('searchBar').value,
// async function getData(city) {
//     try {
//         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
//         const apiData = await response.json()
//         return (apiData)
//         // return this.displayData(apiData)
        
//     } catch (error) {
//         console.log(error)
//     }
// }






    // async displayData(apiData) {
    //     const {name} = apiData
    //     const {icon, description} = apiData.weather[0]
    //     const {temp, feels_like, temp_min, temp_max, humidity} = apiData.main
    //     const {speed, deg} = apiData.wind

    //     console.log(name, icon, description, temp, feels_like, temp_min, temp_max, humidity, speed, deg)
    // }

