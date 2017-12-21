$(document).ready(function() {
  var thermostat = new Thermostat();

  function updatePowerSaveStatus() {
    $('#powersave').text(thermostat.powerSave ? "Power Save Mode: On" : "Power Save Mode: Off")
  }

  function updateCurrentTemperature() {
    $('#temperature').text("Current Temp: " + thermostat.temp)
  }

  updateCurrentTemperature()
  $('#energy_usage').text("Current Energy Usage: " + thermostat.energyUsage())
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


})
