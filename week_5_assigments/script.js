function addTen(n) {

 var n = Number(n);
 var counter = 1;

 console.log(n)
 while(counter < n ) {
    console.log(n + 10);
    counter++;
     n++;

     if( counter > n) {
        break;
     }
 }
 
}

var userInput = prompt("Kindly enter any number for sequence:")
addTen(userInput);