/*
CallBack Hell :

When several callbacks which are stored in a nested form , then at that point of time the condition becomes "callback hell". In callback Hell we give the full control of our nested functions to their parent function which is very risky.

here is a way to overcome callback hell :

we can use named funtion ,this helps in separating the logic and makes the code more readable.
*/ 

function fetchData(callback) {
  setTimeout(() => {
    const data = "Any data";
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log('Processed data:', data);
}

fetchData(processData);

