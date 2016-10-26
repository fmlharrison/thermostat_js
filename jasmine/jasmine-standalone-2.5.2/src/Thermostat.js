function Thermostat() {
  this.MIN_TEMPERATURE = 10;
  this.STARTING_TEMPERATURE = 20;
  this._temperature = this.STARTING_TEMPERATURE;
  this.powerSaving = true
};

Thermostat.prototype._currentTemperature = function () {
  return this._temperature;
};

Thermostat.prototype._isPowerSaving = function () {
  return this.powerSaving;
};

Thermostat.prototype.temperatureUp = function () {
  this._temperature += 1;
};

Thermostat.prototype.temperatureDown = function () {
  if (this._currentTemperature() === 10) {
    throw "Minimum temperature reached";
  }
  this._temperature -= 1;
};

Thermostat.prototype.powerSavingOn = function () {
  this.powerSaving = true;
};

Thermostat.prototype.powerSavingOff = function () {
  this.powerSaving = false;
};
