/*let number = Number(prompt("Enter a number"));
if(number == 1){
     console.log(`${number} is neither prime nor a composite number`);
	 }
else if(number < 1){
	     console.log("Please enter positive number");
		 }
else{
		 for(let i= 2; i<number; i++){
			  if(number % i == 0){
				   var result = `${number} is not a prime number`;
					 break;
					 }
				else{
					  var result = `${number} is a prime number`;
						
						}
					 }
				}
					console.log(result);*/
				


let number = Number(prompt("ENTER NUMBER TO CHECK PRIME OR NOT"));
isPrime = true;
for(i=2; i<=number; i++){
      if(number%i == 0){
	     isPrime = false;
		 break;
	  }
}
if(isPrime){
	   console.log(`${number} is a prime`)
	 }
else{
    console.log(`${number} is not a prime`)
}