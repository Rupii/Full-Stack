
// its just a algorithms the logs fiz if divizible by 3
// buzz div by 5 
// fizz buzz by both 
// else just return a number
function fizzBuzz(num){
  for(var i = 0;i <= num;i++){
    val = i;
    if(i % 3 === 0){
      val = "fizz"
    }
    if(i % 5 === 0){
      val = "buzz"
    }
    if(i % 3 === 0 && i % 5){
      val = "fizz buzz"
    }
    console.log(val)
  }
}
fizzBuzz(prompt("Enter the number"))
