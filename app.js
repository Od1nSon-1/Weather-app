const apiKey = "fbadc456e855f6cb8dd0f0fd2692ba8f"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const searchInput = document.querySelector(".search-box__input")
const btnPlay = document.querySelector(".btn")
const weatherImage = document.querySelector(".weather__image-value")

async function createWeather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
	const data = await response.json()
	document.querySelector(".weather__temp").innerHTML = data.name
	document.querySelector(".weather__city").innerHTML = Math.round(data.main.temp) + "°C"
	document.querySelector(".details__humidity-value").innerHTML = data.main.humidity + "%"
	document.querySelector(".details__wind-value").innerHTML = data.wind.speed + " km/h"
	if (data.weather[0].main = "Clear")
		weatherImage.src = "./image/sun-anim.gif"
	elseif(data.weather[0].main = "Rain")
	weatherImage.src = "./image/rain-anim.gif"
	elseif(data.weather[0].main = "Mist")
	weatherImage.src = "./image/mist-anim.gif"
	elseif(data.weather[0].main = "Cloudy")
	weatherImage.src = "./image/cloudy-anim.gif"
	elseif(data.weather[0].main = "Snow")
	weatherImage.src = "./image/snow-anim.gif"


}


btnPlay.onclick = () => {
	createWeather(searchInput.value)
	searchInput.value = ""

}
