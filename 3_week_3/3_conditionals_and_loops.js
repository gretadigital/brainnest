// a. Larger Number

let largerNumber = function checkInts(int1, int2) {
  if (int1 > int2) {
    return int1;
  } else if (int2 > int1) {
    return int2;
  } else {
    return 'The numbers are the same.';
  }
};

console.log(largerNumber(4, 9)); // 9
console.log(largerNumber(12, 7)); // 12
console.log(largerNumber(55, 55)); // The numbers are the same.

// b. Odd or Even?

let oddEven = function checkNumber(num) {
  if (num % 2 === 0) {
    return `${num} is an even number.`;
  } else {
    return `${num} is an odd number.`;
  }
};

console.log(oddEven(5));
console.log(oddEven(24));
