describe("fizzBuzz", function() {

  it('returns fizz when given 3', function() {
    expect(fizzBuzz(3)).toEqual("Fizz");

  });

  it('returns buzz when given 5', function() {
    expect(fizzBuzz(5)).toEqual("Buzz");

  });

  it('returns fizzbuzz when given 15', function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");

  });

  it('returns the number when given 2', function() {
    expect(fizzBuzz(2)).toEqual(2);

  });

  it('returns an error when passed an input that is not a number', function() {
    expect(fizzBuzz("Hello")).toEqual("This is not a number. Please enter numbers only");

  });

});
