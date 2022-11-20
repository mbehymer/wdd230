// api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}

const apiURL = "https://pro.openweathermap.org/data/2.5/weather?id=5861897&units=imperial&appid=ee30be4297b37d8d9d2208239d8d098e";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);
    document.querySelector('#current-temp').textContent = jsObject.main.temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

};
getWeather();
