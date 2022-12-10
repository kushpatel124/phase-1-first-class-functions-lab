let drivers = (['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnFirstTwoDrivers = function () {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function () {
  return drivers.slice(-2);
};


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


let createFareMultiplier = function (tickets) {
  return function (fare) {
    return tickets * fare;
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, abc) {
  return abc(drivers);
}
