# The Supreme Weather Dashboard 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

Clone the repo and add API Key for 
https://api.weatherapi.com/v1/


add .env to gitignore

add .envFile and key to weather api in following format:
NG_APP_WEATHER_KEY="*******************************"

This is my playground project.
Currently, I am looking at Tailwind, nx and standalone components


Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Push the search button and type in the name of the town you want to know the weather for.

application uses local storage to store your selections in order to be 
able to get them upon next load. (no other nasty cookies... :) ) 