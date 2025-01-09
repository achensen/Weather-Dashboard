# Weather Dashboard
  ![license badge](https://img.shields.io/badge/license-MIT-blue)
## Table of Contents
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Contact Information](#contact-information)
* [Link To Deployed Application](#link-to-deployed-application)
* [Additional Notes](#additional-notes)

## Description
This application allows for user input to check the 5 day forecast of a city, so that the user can appropriately plan for travel

## License
This project is licensed with MIT

## Installation 
npm i

## Usage
First enter the city name you wish to know the weather for in the _Search for a City:_ section and click _Search_
![City Search Input Field](/images/WD%20search%20for%20city.png)

The Current Weater and 5-Day forcast for that city will populate on the page, and the city will be saved on the left side of the page 

![Example showing current weather and foract for Berlin](/images/WD%20Berlin%20forcast%20example.png)

Continue to add cities by searching for them in _Search for City_, and they will remain in the list 

![List of searched cities](/images/WD%20added%20cities%20.png)

To view the forcast of a city reamining on your list, simply click the name of the city on the list

![View of the city of Berlin again, with other cities populated in the list](/images/WD%20view%20Berlin%20again%20on%20the%20list.png)

Finally, to remove cities you no longer want on your list, select the trash can button next to the city name you wish to discard

![city of Tampa to be discarded](/images/WD%20city%20to%20discard.png)

But the rest of the cities you searched, will still remain

![previous city list now excluding Tampa](/images/WD%20new%20list%20excluding%20Tampa.png)

## Contributions
EDX Starter code, myself, with some tutoring assistance (see additional notes)

## Contact Information
My GitHub account is [GitHub Account Link](https://github.com/achensen)
To email me you can contact me at erinrjacobsen@gmail.com

## Link To Deployed Application
Please follow this link for my deployed application : [Weather Dashboard](https://weather-dashboard-render-atc8.onrender.com)

## Additional Notes 
 The initial code for this project was provided by EDX Engineering Services Company to complete an assignment for a Full Stack Web Development Course. My contribution was to complete the code to ensure it had full functionality similar to the mock up that was provided. I did receive tutoring assistance to help with my understanding of this assignment, specifically with weatherService.ts to ensure the date could be read in a user friendly format, and the bonus for getting the cities to properly delete when the button was selected, including help recognizing that placing the method on the backend would allow all the data for forcast and the formatted data could be returned at the same time, and finally to properly ensure routes on the server.ts.