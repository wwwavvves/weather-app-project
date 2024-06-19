// FORECAST
function formatDate(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function displayForecast(response) {
  console.log(response.data);
  let forecastSection = document.querySelector("#forecast-section");

  let weekdays = response.data.daily;
  let forecastDay = "";

  weekdays.forEach(function (day, index) {
    if (index > 0 && index < 6) {
      forecastDay += `
      <div class="forecast-day">
        <div class="forecast-weekday">${formatDate(day.time)}</div>
        <div class="forecast-icon"><img src="${day.condition.icon_url}" /></div>
        <div class="forecast-minmax">
          <div class="forecast-max">${Math.round(
            day.temperature.maximum
          )}º</div>
          <div class="forecast-min">${Math.round(
            day.temperature.minimum
          )}º</div>
        </div>
      </div>
    `;
    }
  });

  // or with a for loop
  // for (i = 0; i < weekdays.length; i++) {
  //   forecastDay += `
  //     <div class="forecast-day">
  //       <div class="forecast-weekday">${weekdays[i]}</div>
  //       <div class="forecast-icon">☁</div>
  //       <div class="forecast-minmax">
  //         <div class="forecast-max">24º</div>
  //         <div class="forecast-min">16º</div>
  //       </div>
  //     </div>
  //   `;
  // }

  forecastSection.innerHTML = forecastDay;
}

function getForecast(city) {
  let apiKey = "68a066fb34dtb3fc9d4875c8d3bo09b6";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayForecast);
}

// API + WEATHER SEARCH AND UPDATE
function updateCityWeather(response) {
  let message = response.data.message;
  if (message === "City not found") {
    alert("City not found");
  } else {
    let cityElement = document.querySelector("#city");
    let city = response.data.city;
    cityElement.innerHTML = city;

    let conditionElement = document.querySelector("#weather-condition");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let weatherConditions = response.data.condition.description;
    let humidity = response.data.temperature.humidity;
    let wind = response.data.wind.speed;
    conditionElement.innerHTML = weatherConditions;
    humidityElement.innerHTML = `${humidity}%`;
    windElement.innerHTML = `${wind}km/h`;

    let iconElement = document.querySelector("#city-temperature-icon");
    let iconUrl = response.data.condition.icon_url;
    iconElement.innerHTML = `<img src="${iconUrl}">`;

    let degrees = Math.round(response.data.temperature.current);
    let cityTemperatureElement = document.querySelector(
      "#city-temperature-degrees"
    );
    cityTemperatureElement.innerHTML = `${degrees}`;

    getForecast(city);
  }
}

function searchCityWeather(city) {
  let apiKey = "68a066fb34dtb3fc9d4875c8d3bo09b6";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(updateCityWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let searchInputValue = searchInput.value;

  if (searchInputValue.length === 0) {
    alert("Input field is empty, please enter a city");
  } else {
    searchCityWeather(searchInputValue);
  }
}

let searchFormElement = document.querySelector("#search-container");
searchFormElement.addEventListener("submit", handleSearchSubmit);

// DEFAULT CITY
searchCityWeather("Lisbon");

// DATE TIME
let currentDateTime = new Date();

function dateTime(date) {
  let dayContainer = document.querySelector("#day");
  let hourContainer = document.querySelector("#hours");
  let minuteContainer = document.querySelector("#minutes");
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = weekdays[currentDateTime.getDay()];
  dayContainer.innerHTML = `${weekday}`;

  let hours = currentDateTime.getHours();
  let minutes = currentDateTime.getMinutes();
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
}

dateTime(currentDateTime);
