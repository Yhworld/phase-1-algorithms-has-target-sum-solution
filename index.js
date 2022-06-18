function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i]
    for (let j = i+1; j < array.length; j++) {
      if (array[j] === complement) return true;
  }
}
return false;
}
console.log(hasTargetSum([20,20,40], 50))

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  1. hasTargetSum(array, target)
  2. iterates throught each number in the array
  3. for the current num identify a complement that adds upto the target value
  4. iterate throught the array again
  5. if the value achieved is our complement return true 
  6. else if its not achieved return false
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
