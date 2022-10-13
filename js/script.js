/*const container = document.querySelector('.container');*/
const limit = 100;
let i;
let multiploTre = !(i % 3);
let multiploCinque = i % 5;
let multiploQuindici = i % 15;

for (let i = 1; i <= limit; i++) {

  if (!(i % 15)) {
    console.log('FizzBuzz');
  } else if (!(i % 3)) {
    console.log('Fizz');
  } else if (!(i % 5)) {
    console.log('Buzz');
  }  else {
    console.log(i);
  }
  
  /*const box = document.createElement('div');

  box.className = 'box'; 
  console.log(box);*/
}
