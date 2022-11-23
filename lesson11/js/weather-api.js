// api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}

const apiURL = "https://pro.openweathermap.org/data/2.5/weather?id=5605242&units=imperial&appid=ee30be4297b37d8d9d2208239d8d098e";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    document.querySelector('#temp').textContent = jsObject.main.temp;
    document.querySelector('#wind-speed').textContent = jsObject.wind.speed + 5;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weather-icon').setAttribute('src', iconsrc);
    document.querySelector('#weather-icon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

    const temp = document.querySelector("#temp").textContent;
    const windspeed = document.querySelector("#wind-speed").textContent;
    const windchill = document.querySelector("#wind-chill");

    if (windspeed >= 3 && temp <= 50) {
        chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
        windchill.innerHTML = chill + "&#8457;";
    }


};
getWeather();
