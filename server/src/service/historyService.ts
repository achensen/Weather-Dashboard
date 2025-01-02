// TODO: Define a City class with name and id properties
import fs from "fs"
import { v4 } from 'uuid';
// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  async read() {
    const data = fs.readFileSync('db/db.json', "utf-8")
    return JSON.parse(data)
  }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  // private async write(cities: City[]) {}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  // async getCities() {}
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    const currentCities = await this.read()
    const matchingCity = currentCities.find((item: any) => item.name.toLowerCase() === city.toLowerCase())
    if (matchingCity) return
    const newCity = {
      name: city,
      id: v4()
    }
    console.log(newCity)
    currentCities.push(newCity)
    fs.writeFileSync("db/db.json", JSON.stringify(currentCities))
  }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
}

export default new HistoryService();
