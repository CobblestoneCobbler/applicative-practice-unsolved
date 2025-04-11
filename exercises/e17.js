/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods.
 * In order to do this it is ok to use any type of FOR loops.
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
  // Your code goes here...
  if (array.length > 0) {
    let minI = 0;
    let minValue = cb(array[0]);
    for (let i = 1; i < array.length; i++) {
      if (minValue > cb(array[i])) {
        minI = i;
        minValue = cb(array[i]);
      }
    }
    return array[minI];
  } else {
    return undefined;
  }
  //adjust array[i] to be Object. s o m e t h i n g (array(i), cb )
  //callback should get the key
}

export function maxBy(array, cb) {
  // Your code goes here...
  if (array.length > 0) {
    let maxI = 0;
    let maxValue = cb(array[0]);
    for (let i = 1; i < array.length; i++) {
      if (maxValue < cb(array[i])) {
        maxI = i;
        maxValue = cb(array[i]);
      }
    }
    return array[maxI];
  } else {
    return undefined;
  }
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
