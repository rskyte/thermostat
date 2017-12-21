DEFAULT_TEMPERATURE = 20
MIN_TEMPERATURE = 10
POWERSAVE_MAX_TEMP = 25
STANDARD_MAX_TEMP = 32

function Thermostat() {
  this.temp = DEFAULT_TEMPERATURE;
  this.maxTemp = POWERSAVE_MAX_TEMP;
  this.powerSave = true
};

Thermostat.prototype.up = function(degrees) {
  if(this.temp + degrees >= this.maxTemp) {
    return this.temp = this.maxTemp;
  } else {
    this.temp += degrees;
  }
}

Thermostat.prototype.down = function(degrees) {
  if(this.temp - degrees <= MIN_TEMPERATURE) {
    return this.temp = MIN_TEMPERATURE;
  } else {
    this.temp -= degrees;
  }
}
