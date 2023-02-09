// Import stylesheets
import './style.css';

// Write Javascript code!

const appDiv = document.getElementById('app');

let list = Array.from(document.getElementsByClassName('back'));

window.addEventListener('scroll', function () {
  list.forEach((item) => {
    item.attributes.style.top = -5;
  });
});
//
scroll(0, 4);
