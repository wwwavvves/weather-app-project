// search function
let searchInput = document.querySelector("#search-input");
let searchBtn = document.querySelector("#search-btn");
let city = document.querySelector("#city");

searchBtn.addEventListener("click", changeCity);
function changeCity(event) {
  event.preventDefault();
  let searchInputValue = searchInput.value;
  city.innerHTML = `${searchInputValue}`;
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
