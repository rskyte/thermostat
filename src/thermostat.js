DEFAULT_TEMPERATURE = 20

function Thermostat() {
  this.temp = DEFAULT_TEMPERATURE;
};

Thermostat.prototype.up = function(degrees) {
  this.temp += degrees;
}

Thermostat.prototype.down = function(degrees) {
  this.temp -= degrees;
}
