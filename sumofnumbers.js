const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

function sumRecursion(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  return nums[0] + sumRecursion(nums.splice(0, nums.length));
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, index) { return memo + index; }, 0);
}

console.log(sumFor(testNums));
console.log(sumWhile(testNums));
console.log(sumRecursion(testNums));
console.log(sumTheSimpleWay(testNums));
