import { Router } from 'express';
const router = Router();

import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req, res) => {
  console.log (req.body)

  const weatherService= new WeatherService (req.body.cityName)

  weatherService.getWeatherForCity(req.body.cityName)
    .then(data=>{
      return res.json(data)
    })

    // or const weatherData = await weatherService.getWeatherForCity(req.body.cityName)
    //if (!weatherData){
    // return
    // }
    // res.json(weatherData)

  // const weatherUrl= `${process.env.API_BASE_URL}/data/2.5/forecast?q=${req.body.cityName}&appid=${process.env.API_KEY}`
  // const response = await fetch (weatherUrl) 

  // const data = await response.json()
    // console.log (data) 
    // res.json(data)
//   // TODO: GET weather data from city name
//   // TODO: save city to search history
})

// TODO: GET search history
router.get('/history', async (_req, res) => {
  HistoryService.read()
  .then(data=>{
    console.log (data)
    return res.json(data)
  })
});

// * BONUS TODO: DELETE city from search history
// router.delete('/history/:id', async (req, res) => {});

export default router;
