const search_glass=document.querySelector(".search-box button")
const user_input=document.querySelector(".search-box input")
const tempertaure=document.querySelector(".weather-box #temperature");
const description=document.querySelector(".weather-box #description");
const humidity=document.querySelector(".humidity-box #humidity");
const wind=document.querySelector(".wind-box #wind");
const location_not_found=document.querySelector(".location-not-found");
let weather_image=document.querySelector(".weather-body img");


function displayDetails(data){
    location_not_found.style.display="none";
    document.querySelector(".weather-body").style.display="flex";
    document.querySelector(".humidity-details").style.display="flex";

    tempertaure.innerHTML=`${Math.round(data.main.temp-273.15)}°C`;
    description.innerHTML=data.weather[0].description;
    humidity.innerHTML=`${data.main.humidity}%`;
    wind.innerHTML=`${data.wind.speed} km/h`;

    let imageName=data.weather[0].main;

    switch(imageName){
        case "Clouds":weather_image.src="images/cloud.png";
        break;
        case "Clear":weather_image.src="images/clear.png";
        break;
        case "Rain":weather_image.src="images/rain.png";
        break;
        case "Mist":weather_image.src="images/mist.png";
        break;
        case "Snow":weather_image.src="images/snow.png";
        break;
    }
    return;

}

async function displayWeather(city){
    const api_key="016175d002adf314ee4b336e94d577bd";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    let response=await fetch(url);
    const data=await response.json();

    console.log(data);
    
    if(data.cod=="404"){
        document.querySelector(".weather-body").style.display="none";
    document.querySelector(".humidity-details").style.display="none";

        location_not_found.style.display="flex";
        return;
    }

    displayDetails(data);
}

search_glass.addEventListener("click",()=>{
    displayWeather(user_input.value);
})

