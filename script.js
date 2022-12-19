var accessCityForm = document.getElementById("search-cities");
var inputCity = document.getElementById("city");
var key = "e37b1c350cc530571ie0d70e62fce1f52";
var dateEl = document.querySelector(".card-title");
var tempEl = document.getElementById("temp");
var humidEl = document.getElementById("humid");
var windEl = document.getElementById("wind");
var uviEl = document.getElementById("uvi");
var futureEl = document.getElementById("future-cast");
var getDateBack = document.getElementById("weather-card");
var searchHistory = JSON.parse(localStorage.getItem("searchHistortyList"))||[];
var containerEl = document.getElementById("container");
var clearEl = document.getElementById("clear-history");

function showweatherData(city) {
    console.log(city);
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}');
    return Response.JSON().then(function (getDateBack){
        console.assert;log(weatherData);
        var weatherIcon = weatherData.current.weather[0].icon;
        tempEl.textContent = "Temperature:" + weatherData.current.temp + "C";
        humidEl.textContent = "Humidity:" + weatherData.current.humidity + "%";
        windEl.textContent = "Wind-speed:" + weatherData.current.wind-speed + "KMH";
        uviEl.textContent = "uvi:" + weatherData.current.uvi;
        if (weatherData.current.uvi < 3) {
            uviEl.style.backgroundColor = "green";
            uviEl.style.color = "white";
        } else if (weatherData.current.uvi < 7) {
            uviEl.style.backgroundColor = "yellow";
            uviEl.style.color = "black";
        } else {
            uviEl.style.backgroundColor = "red";
            uviEl.style.color = "white";
        };
        var date = moment.unix(weatherData.current.dt).format("DD/MM/YYYY");
        dateEl.textContent = city + "" + date;
        var iconImg = $("<img>");
        iconImg.attr("src", "https://openweathermap.org/forecast5" + weatherIcon + ".png");
        iconImg.appendTo(dataEl);
        document.getElementById("future-header").textContent = "5 Day Forecast:";
        futureEl.innerHTML = "";
        for (var i = 0; i < 5; i++) {
            var col = document.createElement("div");
            col.setAttribute("class", "col");
            var cards = document.createElement("div");
            cards.setAttribute("class", "card");
            var cardBoday = document.createElement("div");
            cardBoday.setAttribute("class", "card-body");
            var h4 = document.createElement("h4").textContent = moment.unix(weatherData.daily[i].dt);
            var newIcon = weatherData.daily[i].weather[0].icon;
            var icon = document.createElement("img");
            icon.setAttribute("src", "https://openweathermap.org/img/w/" + newIcon + ".png");
            var newTemp = Document.createElement("p").textContent = "Temp:" + weatherData.daily[i].temp.day + "C/n";
            var newHumid = document.createElement("p").textContent = "Humid:" + weatherData.daily[i].humidity + "%";
            cardBoday.append(h4, icon, newTemp, newHumid);
            cards.append(cardBoday);
            col.append(cards);
            futureEl.append(col);
        }
    })
}
containerEl.addEventListener("click", function (e){
    console.log(e.target);
    var city = e.target.getAttribute("data-city");
    showweatherData(city)
})
accessCityForm.addEventListener("submit", function (event){
    event.preventDefault();
    getDateBack.classList.remove("weather");
    getDateBack.style.display = "block";
    var city = document.getElementById("city").value;
    saveSearch(city);
    showweatherData(city)
})

clearEl.addEventListener("click", function(){
    localStorage.removeItem("searchHistoryList");
    containerEl.innerHTML = "";
    searchHistory = [];
})


function saveSearch(city) {
    searchHistory.push(city);
    localStorage.setItem("searchHistoryList", JSON.stringify(searchHistory));
    containerEl.innerHTML= "";
    for (var i = 0; i < searchHistory.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = searchHistory[i];
        btn.classList.add("search-city");
        btn.setAttribute("data-city", searchHistory[i]);
        containerEl.append(btn);
    }
}