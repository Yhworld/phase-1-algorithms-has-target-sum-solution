function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = {};
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i]
     if (seenNumbers[complement]) return true;
     seenNumbers[array[i]] = true;
  }
return false;
}

hasTargetSum([20,35,25], 50);

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1. hasTargetSum(array, target)
  2. iterates throught each number in the array
  3. Add an object which stores the keys of the seen numbers
  4. for the current num identify a complement that adds upto the target value
  5. iterate throught the array again
  6. if the value achieved is our complement return true 
  7. else if its not achieved return false
*/
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum; 
