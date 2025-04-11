import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  const planets = data.planets;
  return planets
    .filter(function (n) {
      return n.moons != undefined;
    })
    .find(function (n) {
      return (
        n.moons.find(function (n) {
          return n === moonName;
        }) != undefined
      );
    }).name;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
