function Thermostat() {
  this.POWER_SAVING_MAX_TEMP = 25;
  this.NORMAL_MAX_TEMP = 32;
  this.MIN_TEMPERATURE = 10;
  this.STARTING_TEMPERATURE = 20;
  this._maxTemperature = this.POWER_SAVING_MAX_TEMP;
  this._temperature = this.STARTING_TEMPERATURE;
  this.powerSaving = true
};

Thermostat.prototype.temperatureUp = function () {
  if (this._isPowerSaving() === true && this._currentTemperature() > this.POWER_SAVING_MAX_TEMP) {
    throw "Above Eco mode maximum temperature, please reduce temperature";
  }
  if (this._currentTemperature() === this._currentMaxTemperature()) {
    throw "Maximum temperature reached";
  }
  this._temperature++;
};

Thermostat.prototype.temperatureDown = function () {
  if (this._currentTemperature() === this.MIN_TEMPERATURE) {
    throw "Minimum temperature reached";
  }
  this._temperature--;
};

Thermostat.prototype.switchMode = function () {
  if (this._isPowerSaving() == false) {
    this._powerSavingOn();
  }
  else {
    this._powerSavingOff();
  }
};

Thermostat.prototype.thermoReset = function () {
  this._temperature = this.STARTING_TEMPERATURE;
  this._powerSavingOn();
};

Thermostat.prototype.energyUsage = function () {
  if (this._currentTemperature() >= 25 ) {
    return "High-usage";
  }
  if (this._currentTemperature() >= 18 && this._currentTemperature() < 25 ) {
    return "Medium-usage"
  }
  if (this._currentTemperature() < 18) {
    return "Low-usage"
  }
};

Thermostat.prototype._currentTemperature = function () {
  return this._temperature;
};

Thermostat.prototype._isPowerSaving = function () {
  return this.powerSaving;
};

Thermostat.prototype._currentMaxTemperature = function () {
  return this._maxTemperature;
};

Thermostat.prototype._powerSavingOn = function () {
  this.powerSaving = true;
  this._maxTemperature = this.POWER_SAVING_MAX_TEMP;
};

Thermostat.prototype._powerSavingOff = function () {
  this.powerSaving = false;
  this._maxTemperature = this.NORMAL_MAX_TEMP;
};
