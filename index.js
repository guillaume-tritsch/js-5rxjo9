// Import stylesheets
import './style.css';

// Write Javascript code!

const appDiv = document.getElementById('app');

let list = document.getElementsByClassName('back');
console.log(list);

window.addEventListener('scroll', function () {
  for (var item in list) {
    console.log(item);
  }
});
//
