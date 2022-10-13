const container = document.querySelector('.container');
const limit = 100;
let i;
/*let multiploTre = !(i % 3);
let multiploCinque = i % 5;
let multiploQuindici = i % 15;*/

/* FOR CYCLE*/
for (let i = 1; i <= limit; i++) {

  const box = document.createElement('div');

  box.className = 'box'; 

  if (!(i % 15)) {
    console.log('FizzBuzz');
    box.innerHTML = ('FizzBuzz');
    box.classList.add('red');
  } else if (!(i % 3)) {
    console.log('Fizz');
    box.innerHTML = ('Fizz');
    box.classList.add('green');
  } else if (!(i % 5)) {
    console.log('Buzz');
    box.innerHTML = ('Buzz');
    box.classList.add('yellow');
  }  else {
    console.log(i);
    box.innerHTML = i;
  }
  container.append(box);
}
