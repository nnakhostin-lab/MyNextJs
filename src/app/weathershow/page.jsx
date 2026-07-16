import Image from "next/image";

async function getweather(){
  //const response = await fetch("http://localhost:3000/api/weather");
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=1c0e32a9e5d5b1c96f6560bce14539b9&units=metric");
  //const response = await fetch("http://parsijoo.ir/api?serviceType=weather-API&q=Theran");

  const data = await response.json();
  return data
}


export default async function printweather(){
  let weather = await getweather()
  return(
    <div>
      <h2>{weather.name}</h2>
      <p>  {weather.main.temp}°c : دما</p>
      <p>{weather.main.feels_like}°c : دمای احساسی</p>
      <p>{weather.main.humidity} % : رطوبت</p>
      <p>{weather.weather[0].description}</p>
      <p>{weather.wind.speed}  :سرعت باد</p>
      <p>{weather.main.pressure} P  :فشار هوا </p>
      <p><img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" /></p>
      
      <ul>

          {
            Object.entries(weather).map(([key,value,third])=>(   
              <li key={key}>
               {key+" "}:<strong>{"   "+value}</strong> {third}
              </li>
            ))
          }
      </ul>
    </div>
    
  )   
}