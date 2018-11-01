$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature_up').on('click', function() {
      thermostat.up();
      updateTemperature();
  })

  $('#temperature_down').on('click', function() {
      thermostat.down();
      updateTemperature();
  })

  $('#temperature_reset').on('click', function() {
      thermostat.resetTemp();
      updateTemperature();
  })

  $('#powersaving_on').on('click', function() {
      thermostat.switchPowerSavingModeOn();
      $('#power_saving').text('Power saving mode is ON');
      updateTemperature();
  })

  $('#powersaving_off').on('click', function() {
      thermostat.switchPowerSavingModeOff();
      $('#power_saving').text('Power saving mode is OFF');
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.currentUsage());
  };

  function displayWeather(city) {
   var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
   var token = '&appid=265d1dd8c3bfac1bfd1227a45a4a280e';
   var units = '&units=metric';
   $.get(url + token + units, function(data) {
     $('#current-temperature').text(data.main.temp);
   })
  };

   displayWeather('London');

   $('#current-city').change(function() {
     var city = $('#current-city').val();
     displayWeather(city);
   })

});
