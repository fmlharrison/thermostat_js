function Thermostat() {
  STARTING_TEMPERATURE = 20;
  this.temperature = STARTING_TEMPERATURE;
};

Thermostat.prototype.currentTemperature = function () {
  return this.temperature;
};
