var input = [{
    x: 3,
    y: 4
  },
  {
    x: 12,
    y: 5
  },
  {
    x: 8,
    y: 15
  }
];
var result = input.map(function pyth(coordinates) {
  return (Math.pow(Math.pow(coordinates.x, 2) + (Math.pow(coordinates.y, 2)), 0.5))
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);