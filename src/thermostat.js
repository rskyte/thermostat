DEFAULT_TEMPERATURE = 20
MIN_TEMPERATURE = 10

function Thermostat() {
  this.temp = DEFAULT_TEMPERATURE;
};

Thermostat.prototype.up = function(degrees) {
  this.temp += degrees;
}

Thermostat.prototype.down = function(degrees) {
  if(this.temp - degrees <= MIN_TEMPERATURE) {
    return this.temp = MIN_TEMPERATURE;
  } else {
    this.temp -= degrees;
  }
}
