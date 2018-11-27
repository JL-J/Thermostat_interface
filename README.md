# Thermostat

A thermostat interface which allows you to control the temperature and also check the temperature outside. This program interacts with the OpenWeatherMap API to retrieve the current temperature in different cities.

## How to use ##

- Clone this repo
- Open `index.html` in your browser
- To run the tests open `SpecRunner.html` in your browser

## Specification ##
- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is   25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
- On the interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.
- Include a feature to display the weather in a city selected by the user.
