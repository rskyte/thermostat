$(document).ready(function() {
  var thermostat = new Thermostat();

  function updatePowerSaveStatus() {
    $('#powersave').text(thermostat.powerSave ? "Power Save Mode: On" : "Power Save Mode: Off")
  }

  function updateCurrentTemperature() {
    $('#temperature').text("Current Temp: " + thermostat.temp)
    $('#temperature').attr('class', thermostat.energyUsage());
    $('#energy_usage').text("Current Energy Usage: " + thermostat.energyUsage())
  }

  updateCurrentTemperature()
  updatePowerSaveStatus()

  $('#powersave_off').click(function() {
    thermostat.powerSaveOff()
    updatePowerSaveStatus()
  })

  $('#powersave_on').click(function() {
    thermostat.powerSaveOn()
    updatePowerSaveStatus()
    updateCurrentTemperature()
  })

  $("#turn_up").click(function() {
    thermostat.up(1)
    updateCurrentTemperature()
  })

  $("#turn_down").click(function() {
    thermostat.down(1)
    updateCurrentTemperature()
  })

  $("#reset_temp").click(function() {
    thermostat.resetTemp()
    updateCurrentTemperature()
  })

  $("#submit_city").click(function() {
    var city = document.getElementById("city").value;
    $("#current_city").text("Current City: " + city);
    $.get( `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=94ee09f461c4eefbb6b36f5ebb56f760`, function(data) {
      $("#outside_temp").text("Outside Temp: " + Math.round(data.main.temp));
    });
  });




})
