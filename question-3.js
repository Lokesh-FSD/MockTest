/* The output of the given question is :

Start
End
Timeout
Promise 3 resolved
Promise 1 resolved
Promise 2 resolved
*/


/* Reson behind the output is :
  
  first of all , the whole program will be stored in the global execution context. 

  Now the program will execute line by line as follows :-
  - in the first it will Print the "Start" to the console as it is in the very first line of the code.
       Now we have 1 settimeout methond and 3 promises having settimeout methods inside it.
   
  - then the program is calling Promise-1 , and put it also on a callback queue ,and it will take 1000s to execute.
       Now the program will not wait for it , it will go to the next line and 
  - call the Promise2 , and it will also go in callback queue , and it will take 2000s to execute.
       Now again the program will not wait for it , it will go to the next line and
  - call the promise3 ,and it will also go in callback queue , and it will take 0s to execute.  
       Now again the program will not wait for it , it will go to the next line and
  - it will print  "End" immediately to the console.
    
  - Now as the Web Api already stored  the setTimeout function which has timer of 0s first because it is hoisted first and store this first in the callback queue , and will first executed and print "Timeout" to the console before the execution of all the promises.

  - Now, after sometine the Promise3 get executed which has timer of 0s. and print "Promise 3 resolved" to the console.
  - Then the the Promise1 which has timer of 1000s gets executed and Print the "Promise 1 resolved to the console"
  - then , the Promise 2 having time of 2000s gets executed and prints "Promise 2 resovled"  

*/

