const { SearchSource } = require("jest");

const api_key ="9e34b673339f7bd9282f9ed2fa6f9a1e";
const api_url ="https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${API_KEY}";
//Code to get weather information for each city.
function getWeather(city) {
    const url = api_url.replace('{city}', city);
    fetch(url)
    .then(response => response.json())
    .then(data => {})
.catch(error => {
    console.error(error);
})
}
getWeather('San Antonio');

localStorage.setItem("search", SearchSource);
let name = localStorage.getItem("search");


