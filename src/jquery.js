$(document).ready(function() {
  var thermostat = new Thermostat();

  function updatePowerSaveStatus() {
    $('#powersave').text(thermostat.powerSave ? "Power Save Mode: On" : "Power Save Mode: Off")
  }

  $('#temperature').text("Current Temp: " + thermostat.temp)
  $('#energy_usage').text("Current Energy Usage: " + thermostat.energyUsage())
  updatePowerSaveStatus()

  $('#powersave_off').click(function() {
    thermostat.powerSaveOff()
    updatePowerSaveStatus()
  })

  $('#powersave_on').click(function() {
    thermostat.powerSaveOn()
    updatePowerSaveStatus()
  })
})
