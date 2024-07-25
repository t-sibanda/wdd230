
const apiKey = '93c3d3c144892821ca43ff0e67b909f6';
const lat = '42.69'; 
const lon = '-86.22';  

const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

const currentTemp = document.querySelector('#current-temp');
const currentCondition = document.querySelector('#current-condition');
const weatherIcon = document.querySelector('#weather-icon');
const iconDesc = document.querySelector('#icon-desc');

async function fetchWeather() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      throw new Error('Failed to fetch weather data');
    }
  } catch (error) {
    console.error(error);
  }
}

function displayWeather(data) {
  currentTemp.textContent = data.main.temp.toFixed(1);
  currentCondition.textContent = data.weather[0].description;
  const icon = data.weather[0].icon;
  const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  weatherIcon.setAttribute('src', iconURL);
  weatherIcon.setAttribute('alt', data.weather[0].description);
  iconDesc.textContent = data.weather[0].description;
}

fetchWeather();
