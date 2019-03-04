function fizzBuzz(number) {
  if (isNaN(number)) {
    return "This is not a number. Please enter numbers only";
  }
  else if ((number % 3 == 0) && (number % 5 == 0))  {
    return "FizzBuzz";
  }
  else if (number % 3 == 0) {
    return "Fizz";
  }
  else if (number % 5 == 0) {
    return "Buzz";
  }
  else {
    return number;
  }

}
