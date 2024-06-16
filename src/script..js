// search function
let searchInput = document.querySelector("#search-input");
let searchBtn = document.querySelector("#search-btn");
let city = document.querySelector("#city");

searchBtn.addEventListener("click", changeCity);
function changeCity(event) {
  event.preventDefault();
  let searchInputValue = searchInput.value;
  if (searchInputValue.length !== 0) {
    city.innerHTML = `${searchInputValue}`;
  } else {
    alert("Input field is empty, please enter a city");
  }
}

// api connection
let queryCity = "Paris";
let apiKey = "68a066fb34dtb3fc9d4875c8d3bo09b6";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${queryCity}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(getCityWeather);

function getCityWeather(response) {
  let degrees = Math.round(response.data.temperature.current);
  let cityTemperature = document.querySelector("#city-temperature-degrees");
  cityTemperature.innerHTML = `${degrees}`;
}

// day/time function
let dayContainer = document.querySelector("#day");
let hourContainer = document.querySelector("#hours");
let minuteContainer = document.querySelector("#minutes");
let currentDate = new Date();

let weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekday = weekdays[currentDate.getDay()];
dayContainer.innerHTML = `${weekday}`;

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
if (hours < 10) {
  hourContainer.innerHTML = `0${hours}`;
} else {
  hourContainer.innerHTML = `${hours}`;
}
if (minutes < 10) {
  minuteContainer.innerHTML = `0${minutes}`;
} else {
  minuteContainer.innerHTML = `${minutes}`;
}
