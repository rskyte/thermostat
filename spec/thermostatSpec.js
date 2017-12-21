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

  it("decreases the temperature with an up function", function() {
    thermostat.down(1);
    expect(thermostat.temp).toEqual(19);
  });

  it("can't go below the minimum temperature", function() {
    thermostat.down(11);
    expect(thermostat.temp).toEqual(10);
  });
})
