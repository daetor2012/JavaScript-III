/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first principle is window binding, which is the global object.
* 2. The second principle is implicit binding, which is basically the owner of the this keyword is that object it's contained within.
* 3. The third principle is explicit binding, which is using the this keyword across different objects regardless of the block level scope.
* 4. The fourth principle is the new keyword, which is inheriting properties from another object to redefine values in the new object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function add(x, y) {
    return this.x + this.y;
}
add(1, 2); //Should output 3.
// Principle 2

// code example for Implicit Binding
const example1 = {
    age: 5,
    reportAge: function(name) {
        console.log(`${name} says they are ${this.age} old!`);
    }
};
// Principle 3

// code example for New Binding
function jamesBond(fullName) {
    this.name = 'Bond, ';
    this.fullName = fullName;
    this.introduction = function() {
        console.log(this.name + this.fullName);
    };
}
const mainMan = new jamesBond('James Bond.')
const secondMan = new jamesBond('Wesley Bond.')
mainMan.introduction(); 
// Principle 4

// code example for Explicit Binding
mainMan.introduction.call(secondMan); //Using data from the secondMan constant and passing it through the introduction function using .call()