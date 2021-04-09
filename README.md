# Weather web app

This is a web application made using [Next.js](https://nextjs.org/). Check [this](https://weather-app-nextjs-arpitgoyalgg.vercel.app/) link.

It shows Weather of an area using its geographic `latitude` and `longitude`. 

There are three main components driving this application

- TodayWeather - This component is on the left of the application. It shows `Today's Temperature`,`time and day`,`a current weather desciption` and a `beautiful weather icon`.
- WeekWeather - This component is on the top right of the application. It shows `temperature` and `weather icon` for current day and next 7 days.
- TodayHighlights - This component is on the bottom right of the application. It shows `UV Index`,`Wind Status`,`Sunrise and Sunset timings` for the current day,`Humidity`,`Visibility` and `Air Quality` for the current day.

# How to edit or contribute this project

## Prerequisites - these should be installed on your local machine

- Nodejs and npm

## Steps to run the project
- Clone this repository in your local machine and `cd` into it.
- Run `npm install` to install the dependencies required to run this project.
- Run `npm run dev` to start the development server.

# How to look for the weather of a specific location
To look for the weather of a specific location, you need the geographic `latitude` and `longitude` of that location. A simple web search would get that for you. By default, the [home page](https://weather-app-nextjs-arpitgoyalgg.vercel.app/) of the application shows weather for the following coordinates.

`latitude` - 26.922070


`longitude` - 75.778885

To look for your specifically chosen coordinates, pass them to the `url` of the application like this.

`url` - `https://weather-app-nextjs-arpitgoyalgg.vercel.app/latitude/longitude`
where `latitude` and `longitude` should be replaced with your chosen values.

### Example

If I want to know the weather of Chicago, I would search for Chicago's coordinates on the web and put them in the `url` like this.

`https://weather-app-nextjs-arpitgoyalgg.vercel.app/41.8781/87.6298`

where `41.8781` is the `latitude` and  `87.6298` is the `longitude` of Chicago.
