function fizz (number) {
  if (number % 15 === 0) {
    return ("FizzBuzz");
  } else if (number % 5 === 0) {
    return ("Buzz");
  } else if (number % 3 === 0){
    return ("Fizz");
  } else {
    return (number);
  }
};

function fizzBuzz (start, end) {
  for (var count = start; count <= end; count++) {
    console.log(fizz(count));
  }
};

export { fizz };
