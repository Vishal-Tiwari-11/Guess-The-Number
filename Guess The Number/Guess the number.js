//READ ME
// Guess the number
let guess= function(){
    let x = Math.floor((Math.random() * 100)+1);
    let user= +prompt("Enter your input between 0 to 100: ");
  
    if ( user == x){
    console.log("Your guess is right.")
  }
  else if(user>x){
    console.log(`Your guessed number is greater than the number: (${x} < ${user})`)
  }
  else if(user<x){
    console.log(`Your guessed number is smaller than the number:(${x} > ${user})`)
  }
  else{
    console.log("Enter a valid input")
  }
  }
  guess()
  