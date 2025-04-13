/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from "./e17";
export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  return maxBy(
    data.asteroids.reduce(
      (acc, asteroid) => {
        let currentYear = asteroid.discoveryYear;
        for (let i = 0; i < acc.length; i++) {
          if (currentYear === acc[i][0]) {
            acc[i][1] += 1;
            return acc;
          }
        }
        acc.push([currentYear, 1]);
        return acc;
      },
      [[data.asteroids[0].discoveryYear, 0]]
    ),
    (array) => array[1]
  )[0];

  // feel free to import your `maxBy` or `minBy` methods from previous lessons
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
