describe("Thermostat", function () {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat
  })
  describe("Has a default temperature", function () {
    it("has a default temperature of 20 degrees", function () {
      expect(thermostat.currentTemperature()).toBe(20)      
    });
  });
});
