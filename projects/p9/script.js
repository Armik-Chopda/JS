const API_KEY='df220fa15fa3716015173b254bc426f0'

const cityName=document.querySelector('#cityInput');
const temp=document.querySelector('#temperature')
const btn=document.querySelector('#searchBtn')
const city=document.querySelector('#cityName')
const description=document.querySelector('#description')
const Humidity1=document.querySelector('#humidity')
btn.addEventListener('click', function(e) {
    if (cityName.value.trim() !== '') {
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value.trim()}&appid=${API_KEY}&units=metric`;

        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                if(data) {
                    temp.innerHTML = `Temperature: ${data.main.temp} °C`;
                    city.innerHTML=`${cityName.value.trim()[0].toUpperCase()+cityName.value.trim().slice(1)}`;
                    description.innerHTML=`${data.weather[0].description}`;
                    Humidity1.innerHTML=`Humidity: ${data.main.humidity}%`
                    
                    
                } else {
                    temp.innerHTML = `City not found`;
                }
            })
            .catch(error => {
                console.log('Error fetching weather data:', error);
                temp.innerHTML = `Error fetching weather data`;
            });
    } else {
        temp.innerHTML = `Please enter a city name`;
    }
   
});

