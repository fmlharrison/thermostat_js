describe("Thermostat", function () {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat
  });

  describe("Has a default temperature", function () {
    it("has a default temperature of 20 degrees", function () {
      expect(thermostat._currentTemperature()).toBe(20)
    });
  });

  describe("Increase Temperature", function () {
    it("can increase the temperature", function () {
      thermostat.temperatureUp();
      expect(thermostat._currentTemperature()).toBe(21)
    });
  });
});
