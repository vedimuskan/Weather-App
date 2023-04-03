document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a79f4d129msh5cb0c06902c560bp1006dcjsn313d7fc94768',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (e)=>{
  fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+e, options
  )
  .then((e)=> e.json())
  .then((e)=>{
    console.log(e),
    (temp.innerHTML = e.temp),
    (fl.innerHTML = e.feels_like),
    (humidity.innerHTML= e.humidity),
    (cpct.innerHTML = e.cloud_pct),
    (wind_speed.innerHTML= e.wind_speed);
  })
  (cityname.innerHTML=`<h2>${e}</h2>`);
}

submit.addEventListener("click", (e)=>{
  e.preventDefault();
  getWeather(city.value);
}),
getWeather("Vadodara");


/*  getWeather = (e) => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + e,
      options
    )
      .then((e) => e.json())
      .then((e) => {
        console.log(e),
          (cloud_pct.innerHTML = e.cloud_pct),
          (feels_like.innerHTML = e.feels_like),
          (humidity.innerHTML = e.humidity),
          (max_temp.innerHTML = e.max_temp),
          (min_temp.innerHTML = e.min_temp),
          (temp.innerHTML = e.temp),
          (wind_speed.innerHTML = e.wind_speed),
          (c = e.cloud_pct);
      }),
      (cityname.innerHTML = `<h1>${e}</h1>`);
  };

submit.addEventListener("click", (e) => {
  e.preventDefault(), getWeather(city.value), getTime(city.value);
}),
  getTime("Delhi"),
  getWeather("Delhi");
const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e9f143aebamsh42804accb42e0a1p1d6daejsn76ce50acce31",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  },
  optionss = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e9f143aebamsh42804accb42e0a1p1d6daejsn76ce50acce31",
      "X-RapidAPI-Host": "world-time-by-api-ninjas.p.rapidapi.com",
    },
  };
let c, h;
const getTime = (e) => {
    fetch(
      "https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=" + e,
      optionss
    )
      .then((e) => e.json())
      .then((e) => {
        (date.innerHTML = e.date),
          (day.innerHTML = e.day_of_week),
          (hour.innerHTML = e.hour),
          (minute.innerHTML = e.minute),
          (h = e.hour);
      })
      .catch((e) => console.error(e));
  },
*/

