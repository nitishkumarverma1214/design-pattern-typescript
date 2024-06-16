import { CurrentConditionsDisplay } from "./CurrentConditionsDisplay";
import { WeatherData } from "./WeatherData"

export const observerPattern =()=>{

    const weatherData = new WeatherData();
    const currentWeather = new CurrentConditionsDisplay(weatherData);
    weatherData.setMeasurements(20, 3, 23);
    weatherData.setMeasurements(25, 30, 22);
    weatherData.setMeasurements(30, 10, 28);

}