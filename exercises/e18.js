/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from "./e17";
export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  let yearCt = [];
  const asteroids = data.asteroids;
  yearCt.push([asteroids[0].discoveryYear, 1]);
  for (let i = 1; i < asteroids.length; i++) {
    let year = asteroids[i].discoveryYear;
    if (
      yearCt.find(function (n) {
        if (n[0] === year) {
          n[1] += 1;
          return true;
        }
        return false;
      }) === undefined
    ) {
      yearCt.push([year, 1]);
    }
  }
  return maxBy(yearCt, (z) => z[1])[0];

  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  //I need to make a 2d array of { year, count}, call maxby and pass it the count function, then return the year of that index
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
