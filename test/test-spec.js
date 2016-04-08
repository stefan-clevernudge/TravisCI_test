var expect = require('chai').expect;
var test = require('../app');

describe("hello()", function() {
  it("should return hello World", function() {

  result = test.print_hello();
  
  expect(result).to.equal("Hello Worlt");
  });
});