// spec/calculator_spec.js


// Jasmine introduction:
// https://jasmine.github.io/edge/introduction.html
// - list of other matchers (regular expressions, null, undefined, boolean, etc.)


// describe block groups sets of functionality
// - i.e. all of the unit tests for one function
// first parameter = name for the test suite
describe("Verify Jasmine is working", function() {

  var a;  // we'll reference this later

  // it block represents a single unit test
  // first parameter = explanation of what the tested function should do
  it("should verify true is true", function() {

    // assertion statement - "toBe" is the same as "==="
    expect(true).toBe(true);  

  });

  it("should verify not false is true", function() {
    expect(true).not.toBe(false);
  });

  // can have multiple assertion statements
  // - if one fails, the entire test will fail
  //   and Jasmine will advise on which assertion failed
  it("should verify the value of variable a is true and not null", function() {
    a = true;
    expect(a).toBe(true);
    expect(a).not.toBe(null);
  });

  it("should verify objects are equal", function() {
    var obj1 = { a: 1, b: 2 };
    var obj2 = { a: 1, b: 2 };
    expect(obj1).toEqual(obj2);
  })

});



describe("Calculator", function() {

  it("should add two numbers together", function() {
    expect(add(1, 2)).toBe(3);
    expect(add(10, 25)).toBe(35);
  });

  it("should subtract two numbers", function() {
    expect(subtract(3, 2)).toBe(1);
    expect(subtract(-10, -1)).toBe(-9);
  });

  it("should multiply two numbers", function() {
    expect(multiply(4, 5)).toBe(20);
    expect(multiply(999, 0)).toBe(0);
  });

  it("should divide two numbers", function() {
    expect(divide(10, 2)).toBe(5);
    expect(divide(7, 0)).toBe("error");
  });

});