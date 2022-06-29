const searchForm = document.querySelector(".search-form");
const inputValue = document.querySelector(".input-value");



function buttonClickHandle(event){
    event.preventDefault();
    fetch('http://api.openweathermap.org/geo/1.0/direct?q='+ inputValue.value +'&limit=1&appid=dd2013fa50ff58801aff47ba696348c0')
    .then(response => response.json())
    .then(data => console.log(data))

    .catch(error => alert("wrong city name!"))

};


searchForm.addEventListener("submit", buttonClickHandle);