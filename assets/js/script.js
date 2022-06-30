const searchForm = document.querySelector(".search-form");
const inputValue = document.querySelector(".input-value");
const currentDay = document.querySelector("#current-day")


  // on button click the user input is passed into the API, API returns data into the runLatLon function
function buttonClickHandler(event){
    event.preventDefault();
    fetch('http://api.openweathermap.org/geo/1.0/direct?q='+ inputValue.value +'&limit=1&appid=dd2013fa50ff58801aff47ba696348c0')
    .then(function(response) {
        if (response.ok) {
          response.json().then(function(data) {
            runLatLon(data);
          });
        } else {
          alert('City not found');
        }
    });

};

// after latitude and longitude have been obtained in the buttonClickHandler API fetches weather data for that location
function runLatLon(data) {
    let lat = data[0].lat; 
    let lon = data[0].lon;
    let cityName = data[0].name;
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+ lat +'&lon='+ lon +'&appid=dd2013fa50ff58801aff47ba696348c0&units=imperial')
    
    .then(function(response) {
        if (response.ok) {
          response.json().then(function(data) {
            displayWeatherData(data, cityName);
          });
        } else {
          alert('something went wrong verifying latitude and longitude');
        }
    });
};

function displayWeatherData(data, cityName){
  let currentTemp = data.current.temp;
  let currentWind = data.current.wind_speed;
  let currentHumidity = data.current.humidity;
  let currentUVI = data.current.uvi;

  let displayCity = document.createElement("h2");
  let displayTemp = document.createElement("p");
  let displayWind = document.createElement("p");
  let displayHumidity = document.createElement("p");
  let displayUVI = document.createElement("p");
 

  displayCity.textContent = cityName;
  displayTemp.textContent = "Temp: " + currentTemp;
  displayWind.textContent = "Wind: " + currentWind + " MPH";
  displayHumidity.textContent = "Humidity " + currentHumidity + "%";
  displayUVI.textContent = "UV Index " + currentUVI;


  currentDay.append(displayCity);
  currentDay.append(displayTemp);
  currentDay.append(displayWind);
  currentDay.append(displayHumidity);
  currentDay.append(displayUVI);

};


searchForm.addEventListener("submit", buttonClickHandler);