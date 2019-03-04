describe("fizzBuzz", function() {

  it('prints fizz when given 3', function() {
    expect(fizzBuzz(3)).toEqual("Fizz");

  });

  it('prints buzz when given 5', function() {
    expect(fizzBuzz(5)).toEqual("Buzz");

  });

  it('prints fizzbuzz when given 15', function() {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");

  });
});
