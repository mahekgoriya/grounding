console.log("Hello");
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form=document.querySelector('form');
const search=document.querySelector('#search');
const weather=document.querySelector('#weather');

const getweather=async(city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response=await fetch(url);
    // console.log(response);
    const data=await response.json();
    const lat= data.coord.lat;
    const lon= data.coord.lon;
    const url2=`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const polution=await fetch(url2);
    const data2=await polution.json();
    console.log(data);
    console.log(data2);
    showWeather(data,data2);
    const co2=data2.list[0].components.co;
    console.log(co2);
}

const showWeather = (data,data2)=>{
    weather.innerHTML=`
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${data.main.temp} ℃</h2>
        <h2>Feels like : ${data.main.feels_like} ℃</h2>
        <h2>Humidity : ${data.main.humidity}</h2>
        <h4>${data.weather[0].main}</h4>
        <h4>Air Quality=${data2.list[1].components.pm2_5}</h4>
    </div>`
}

form.addEventListener('submit',function(events){
    getweather(search.value);    
    events.preventDefault();
});