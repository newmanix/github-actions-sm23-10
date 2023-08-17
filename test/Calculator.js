const chai = require("chai");
const expect = chai.expect;
const asserttype = require('chai-asserttype');
chai.use(asserttype);



//load calculator code
var Calculator = require("../Calculator");
var calc = new Calculator();

describe("Calculator Tests",function(){
 
  it("Adds 1 and 3",function(){
    expect(calc.add(1,3)).to.be.equal(4);
  });

  it("Add Allows one parameter",function(){
   expect(calc.add(1)).to.be.equal(1);
 });

  it("Add Allows no parameters",function(){
   expect(calc.add()).to.be.equal(0);
 });

  it("Divide by zero returns ERR",function(){
   expect(calc.divide(6,0)).to.be.equal("ERR");
 });

   it("Divide 6 by 3",function(){
    expect(calc.divide(6,3)).to.be.equal(2);
  }); 

  it("Add turns strings to zeros",function(){
   expect(calc.add("frog","toad")).to.be.number();
 });



});
