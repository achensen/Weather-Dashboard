import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object

// TODO: Define a class for the Weather object
class Weather {
  date:string;
  icon:string;
  iconDescription:string;
  tempF:number;
  windSpeed:number;
  humidity:number;
  city:string;

  constructor (
  date:string,
  icon:string,
  iconDescription:string,
  tempF:number,
  windSpeed:number,
  humidity:number,
  city:string,

  ){
    this.date=date
    this.icon=icon
    this.iconDescription=iconDescription
    this.tempF=tempF
    this.windSpeed=windSpeed
    this.humidity=humidity
    this.city=city
  }
}
//Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  cityName: string

  constructor (
    cityName:string

  ){
    this.cityName=cityName
  }
  // TODO: Create fetchLocationData method
  // private async fetchLocationData(query: string) {}
  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: Coordinates): Coordinates {}
  // TODO: Create buildGeocodeQuery method
  // private buildGeocodeQuery(): string {}
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  // private async fetchAndDestructureLocationData() {}
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
    const weatherUrl= `${process.env.API_BASE_URL}/data/2.5/forecast?q=${city}&units=imperial&appid=${process.env.API_KEY}`
    const response = await fetch (weatherUrl) 
  
    const data = await response.json()

    const filteredData = data.list.filter((_item:any,index:any)=>index===0 || index === 7 || index === 15 || index ===23 || index === 31 || index=== 39 )
    console.log ('filtered data', filteredData)

    const restructeredData = filteredData.map((item:any)=>{
      return new Weather(item.dt, item.weather[0].icon, item.weather[0].description, item.main.temp, item.wind.speed, item.wind.humidity, data.city.name)
    })
    return restructeredData
  }
}

export default WeatherService;
