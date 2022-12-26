var accessCityForm = document.getElementById("search-cities");
var key = "3a4ac90642ce86fd1e76b8306513376c";

accessCityForm.addEventListener("submit", function (event){
    event.preventDefault();
    var city = document.getElementById("city").value;
    getWeather(city)
    getForecast(city)
})
var buttonId = document.getElementById("clear-history");
buttonId.addEventListener("click",function(){
    var ul = document.getElementById("city-list");
    ul.innerHTML = "";
}) 

function getWeather(city) {
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`

    fetch(apiURL)
    .then(response => response.json())
    .then(currentWeatherData => {
        console.log(currentWeatherData)
        var li = $("<li>").text(city)
        $("#city-list").append(li)

        var cardTitleEl = $("#city-name");
        var cardTempEl = $("#temp");
        var cardHumidEl = $("#humid");
        var cardWindEl = $("#wind");

        cardTitleEl.text(city)
        cardTempEl.text("Temp: " + currentWeatherData.main.temp + " °C")
        cardHumidEl.text("Humidity: " + currentWeatherData.main.humidity + "%");
        cardWindEl.text("Wind speed: " + currentWeatherData.wind.speed + "kmph")
    })
}

function getForecast(city) {
    var apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=imperial`

    fetch(apiURL)
    .then(response => response.json())
    .then(weatherForecastData => {
        console.log(weatherForecastData)


        // FIRST DAY
        var cardTempEl1 = $("#temp1");
        var cardHumidEl1 = $("#humid1");
        var cardWindEl1 = $("#wind1");

        cardTempEl1.text("Temp: " + weatherForecastData.list[0].main.temp + " °C")
        cardHumidEl1.text("Humidity: " + weatherForecastData.list[0].main.humidity + "%");
        cardWindEl1.text("Wind speed: " + weatherForecastData.list[0].wind.speed + "kmph")

        // SECOND DAY
        var cardTempEl2 = $("#temp2");
        var cardHumidEl2 = $("#humid2");
        var cardWindEl2 = $("#wind2");

        cardTempEl2.text("Temp: " + weatherForecastData.list[8].main.temp + "°C")
        cardHumidEl2.text("Humidity: " + weatherForecastData.list[8].main.humidity + "%");
        cardWindEl2.text("Wind speed: " + weatherForecastData.list[8].wind.speed + "kmph")

         // THIRD DAY
         var cardTempEl2 = $("#temp3");
         var cardHumidEl2 = $("#humid3");
         var cardWindEl2 = $("#wind3");
 
         cardTempEl2.text("Temp: " + weatherForecastData.list[16].main.temp + " °C")
         cardHumidEl2.text("Humidity: " + weatherForecastData.list[16].main.humidity + "%");
         cardWindEl2.text("Wind speed: " + weatherForecastData.list[16].wind.speed + "kmph")

          // FOURTH DAY
        var cardTempEl2 = $("#temp4");
        var cardHumidEl2 = $("#humid4");
        var cardWindEl2 = $("#wind4");

        cardTempEl2.text("Temp: " + weatherForecastData.list[24].main.temp + "°C")
        cardHumidEl2.text("Humidity: " + weatherForecastData.list[24].main.humidity + "%");
        cardWindEl2.text("Wind speed: " + weatherForecastData.list[24].wind.speed + "kmph")

         // FIFTH DAY
         var cardTempEl2 = $("#temp5");
         var cardHumidEl2 = $("#humid5");
         var cardWindEl2 = $("#wind5");
 
         cardTempEl2.text("Temp: " + weatherForecastData.list[32].main.temp + " °C")
         cardHumidEl2.text("Humidity: " + weatherForecastData.list[32].main.humidity + "%");
         cardWindEl2.text("Wind speed: " + weatherForecastData.list[32].wind.speed + "kmph")

    })
}
