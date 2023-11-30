const apiKey = "fbadc456e855f6cb8dd0f0fd2692ba8f"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const searchInput = document.querySelector(".search-box__input")
const btnPlay = document.querySelector(".btn")
const weatherImage = document.querySelector(".weather__image-value")
const weather = document.querySelector(".weather")
const error = document.querySelector(".error")

async function createWeather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
	if (response.status === 404) {
		error.style.display = "block"
		weather.style.display = "none"
	}	
	const data = await response.json()
	console.log(data)
	document.querySelector(".weather__temp").innerHTML = data.name
	document.querySelector(".weather__city").innerHTML = Math.round(data.main.temp) + "°C"
	document.querySelector(".details__humidity-value").innerHTML = data.main.humidity + "%"
	document.querySelector(".details__wind-value").innerHTML = data.wind.speed + " km/h"
	if (data.weather[0].main === "Clear")
		weatherImage.src = "./image/sun-anim.gif"
	else if (data.weather[0].main === "Rain")
		weatherImage.src = "./image/rain-anim.gif"
	else if (data.weather[0].main === "Mist")
		weatherImage.src = "./image/mist-anim.gif"
	else if (data.weather[0].main === "Clouds")
		weatherImage.src = "./image/cloudy-anim.gif"
	else if (data.weather[0].main === "Snow")
		weatherImage.src = "./image/snow-anim.gif"
	weather.style.display = "block"
	error.style.display = "none"

}


btnPlay.onclick = () => {
	createWeather(searchInput.value)
	searchInput.value = ""

}


searchInput.addEventListener("keydown", (event) => {
	if (event.keyCode === 13) {
		createWeather(searchInput.value)
		searchInput.value = ""
	}
})
