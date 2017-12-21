DEFAULT_TEMPERATURE = 20
MIN_TEMPERATURE = 10
POWERSAVE_MAX_TEMP = 25
STANDARD_MAX_TEMP = 32
MIN_ENERGY_USAGE_THRESHOLD = 18

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

Thermostat.prototype.powerSaveOn = function() {
  this.powerSave = true;
  this._adjustMaxTemp();
};

Thermostat.prototype.powerSaveOff = function() {
  this.powerSave = false;
  this._adjustMaxTemp();
};

Thermostat.prototype._adjustMaxTemp = function() {
  this.maxTemp = this.powerSave ? POWERSAVE_MAX_TEMP :
  STANDARD_MAX_TEMP;
};

Thermostat.prototype.resetTemp = function() {
  this.temp = DEFAULT_TEMPERATURE;
}

Thermostat.prototype.energyUsage = function() {
  if(this.temp < MIN_ENERGY_USAGE_THRESHOLD)
    return "Low-usage"
  else if(this.temp < POWERSAVE_MAX_TEMP)
    return "Medium-usage"
  else
    return "High-usage"
}
