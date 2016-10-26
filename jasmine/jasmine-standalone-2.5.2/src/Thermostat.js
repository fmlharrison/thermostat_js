function Thermostat() {
  this.STARTING_TEMPERATURE = 20;
  this._temperature = this.STARTING_TEMPERATURE;
};

Thermostat.prototype._currentTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.temperatureUp = function () {
  this._temperature += 1;
};
