

// index.js
//const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
//const { fetchCoordsByIP } = require('./iss');
/*
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});
*/
/*
fetchCoordsByIP('142.114.51.120', (error, coordinates) => {
  if (error) {
    console.log("fetchCoordsByIP didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Coords:' , coordinates);
});
*/
//const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };
/*
fetchISSFlyOverTimes({Latitude: 45.2857, Longitude: -75.8878}, (error, flyOverTimes) => {
  if (error) {
    console.log("fetchISSFlyOverTimes didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Times:' , flyOverTimes);
});
*/

const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

/** 
 * Input: 
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns: 
 *   undefined
 * Sideffect: 
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */
 const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};