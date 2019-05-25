function logDriverNames(drivers) {
   drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers){
  const sortedDrivers = [ ...drivers];
  sortedDrivers.sort((a,b)=> a.revenue - b.revenue)
  return sortedDrivers;
}

function driversByName(drivers){
  const sortedDrivers = [ ...drivers];
  sortedDrivers.sort((a,b) =>
    a.name.localeCompare(b.name));
  return sortedDrivers
}

function totalRevenue(drivers){
var initialValue = 0;
return drivers.reduce(
    (accumulator, driver) => accumulator + driver.revenue
    ,initialValue
);
}

function averageRevenue(drivers){
  return totalRevenue(drivers)/(drivers.length)
}
