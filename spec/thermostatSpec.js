describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("defaults to 20 degrees", function() {
    expect(thermostat.temp).toEqual(DEFAULT_TEMPERATURE)
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
    expect(thermostat.temp).toEqual(MIN_TEMPERATURE);
  });

  it("can't go over the max temperature", function() {
    thermostat.up(6);
    expect(thermostat.temp).toEqual(POWERSAVE_MAX_TEMP);
  });

  it("powersave mode can change the max temp", function() {
    thermostat.powerSaveOff();
    expect(thermostat.maxTemp).toEqual(32);
  })

  it("can reset temperature", function() {
    thermostat.up(1)
    thermostat.resetTemp()
    expect(thermostat.temp).toEqual(DEFAULT_TEMPERATURE)
  })

  it("ensures powersave max temp is not exceeded when powersave is switched on", function() {
    thermostat.powerSaveOff()
    thermostat.up(10)
    thermostat.powerSaveOn()
    expect(thermostat.temp).toEqual(POWERSAVE_MAX_TEMP)
  })

  describe("outputs energy usage", function() {
    it("low usage", function() {
      thermostat.down(3)
      expect(thermostat.energyUsage()).toEqual("Low-usage")
    })
    it("medium usage", function() {
      expect(thermostat.energyUsage()).toEqual("Medium-usage")
    })
    it("high usage", function() {
      thermostat.up(5)
      expect(thermostat.energyUsage()).toEqual("High-usage")
    })
  })
})
