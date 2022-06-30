const searchForm = document.querySelector(".search-form");
const inputValue = document.querySelector(".input-value");



function buttonClickHandle(event){
    event.preventDefault();
    fetch('http://api.openweathermap.org/geo/1.0/direct?q='+ inputValue.value +'&limit=1&appid=dd2013fa50ff58801aff47ba696348c0')
    .then(function(response) {
        if (response.ok) {
          response.json().then(function(data) {
            runLatLon(data);
          });
        } else {
          alert('City Not Found');
        }
    });

};

function runLatLon(data) {
    let lat = data[0].lat; 
    let lon = data[0].lon;
    console.log(lat);
    console.log(lon);
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+ lat +'&lon='+ lon +'&appid=dd2013fa50ff58801aff47ba696348c0&units=imperial')
    
    .then(function(response) {
        if (response.ok) {
          response.json().then(function(data) {
            console.log(data)
          });
        } else {
          alert('lat lon not working');
        }
    });
};


searchForm.addEventListener("submit", buttonClickHandle);