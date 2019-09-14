// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
      return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers,revenue){
return driversWithRevenueOver(drivers,revenue).map(function(driver){
        return driver.name;
  });
}

<<<<<<< HEAD
function exactMatch(drivers, object) {
  return drivers.filter(function (driver) {
    for (const key in object) {
      return object[key] === driver[key];
    }
  });
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(function(driver){
    return `${driver.name}`
  });
}
=======
function exactMatch(drivers,revenues){
  return drivers.filter(function(driver){
    return driver.revenues === '3000';
  });
  
}

/*describe('driverNamesWithRevenueOver()', function () {
    it('returns an array of all matching drivers names as string', function () {
      expect(driverNamesWithRevenueOver(drivers, 199)).to.eql([ 'Sally', 'Annette' ]);
    });

    it('returns an empty array if there is no match', function () {
      expect(driverNamesWithRevenueOver(drivers, 500)).to.eql([]);
    });
  });

  describe('exactMatch()', function () {
    it('returns an array of all matching drivers', function () {
      expect(exactMatch(extendedDrivers, { name: 'Sally' })).to.eql([
        { name: 'Sally', revenue: 400 },
        { name: 'Sally', revenue: 200 }
      ]);

      expect(exactMatch(extendedDrivers, { revenue: 200 })).to.eql([
        { name: 'Annette', revenue: 200 },
        { name: 'Sally',   revenue: 200 }
      ]);
    });

    it('returns an empty array if there is no match', function () {
      expect(exactMatch(extendedDrivers, { revenue: 500 })).to.eql([]);

      expect(exactMatch(extendedDrivers, { name: 'Alex' })).to.eql([]);
    });
  });

  describe('exactMatchToList()', function () {
    it('returns an array of names for all matching drivers', function () {
      expect(exactMatchToList(extendedDrivers, { name: 'Sally' })).to.eql([ 'Sally', 'Sally' ]);

      expect(exactMatchToList(extendedDrivers, { revenue: 200 })).to.eql([ 'Annette', 'Sally' ]);
    });

    it('returns an empty array if there is no match', function () {
      expect(exactMatchToList(extendedDrivers, { revenue: 500 })).to.eql([]);

      expect(exactMatchToList(extendedDrivers, { name: 'Alex' })).to.eql([]);
    });
  });
});*/
>>>>>>> 1d41d9306c8aa60f3196d58a8905d837a7cb758c
