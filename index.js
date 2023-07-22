// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }
  sayHello();
  
  
  function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  }
  sayHelloToIsabel();

  function sayHelloToSofia(){
    console.log("Hello, Sofia")
  }

  sayHelloToSofia();

  function sayHelloToBrendan(){
    console.log("Hello", "Brendan")
  }

  sayHelloToBrendan();


    sayHelloToIsabel();
    sayHelloToSofia();
    sayHelloToBrendan();

function sayHelloTo(firstName){
  console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Alfred");
sayHelloTo("James");
sayHelloTo("Moses");

function sayHelloTo(Name){
  console.log(`my name is ${Name} and i am a boy!`);
}

sayHelloTo("Alfred");

function say(greeting, firstName){
  console.log(`${greeting}, ${firstName}!`);
}

say("Calvary greetings", "Alfred");

function say(greeting, firstName) {
  console.log("firstName: ", firstName);
  console.log("greeting: ", greeting);
  console.log(`${greeting}, ${firstName}!`);
}

say("Hello", "Alfred");

function add(x, y) {
  return x + y;
}

console.log(add(38,2000));
console.log(add(-18,2078));

function sum(a, b) {
  return a + b;
}
console.log(sum(90, 2));

