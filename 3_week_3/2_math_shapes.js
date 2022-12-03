// a. Diagonal
let squareDiagonal = function diagonal(side) {
  return side * Math.sqrt(2);
};

console.log(squareDiagonal(9)); // 12.72

// b. Area
let sideA = 5;
let sideB = 6;
let sideC = 7;
let semiperimeter = 0.5 * (sideA + sideB + sideC);
let triangleArea = Math.sqrt(
  semiperimeter *
    ((semiperimeter - sideA) *
      (semiperimeter - sideB) *
      (semiperimeter - sideC))
);

console.log(triangleArea); // 14.69

// c. Circumference and Surface Area
const pi = Math.PI;
let radius = 4;
let circumference = 2 * pi * radius;
let surfaceArea = pi * radius ** 2;

console.log(circumference); // 25.13
console.log(surfaceArea); // 50.26
