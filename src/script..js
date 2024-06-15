let searchInput = document.querySelector("#search-input");
let searchBtn = document.querySelector("#search-btn");
let city = document.querySelector("#city");
let day = document.querySelector("#day");
let time = document.querySelector("#time");

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
day.innerHTML = `${weekday}`;

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
time.innerHTML = `${hours}:${minutes}`;
// create function for day/time
// add a zero if hours or minutes only have one character
