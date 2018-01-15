// Functions
var name = prompt("Enter Your name")
function Hello(name) {
  console.log(name+"You are Awesome");
}


// default parameters
function add(a = 0, b = 10){
  result = a+b;
  alert(result);
}
add(4, 56)
// if you don't give any parameters say add() it show the result as 0+10 as of default


// Return types
var res;
function sum(){
  result = 0;
  for(var i = 0; i<10;i++){
    result += i;
  }
  return result;
}
res = sum();
alert(res)

// JavaScript also follows the scope as in other languages
