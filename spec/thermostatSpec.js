describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("defaults to 20 degrees", function() {
    expect(thermostat.temp).toEqual(20)
  });

  it("increases the temperature with an up function", function() {
    thermostat.up(1);
    expect(thermostat.temp).toEqual(21);
  });

})
