import _ from 'lodash';
import './style.scss';
import Icon from './icon.png';
import Person from './Person.js';

let p = new Person('congzhaoyang', 18);
document.write(p.say());
function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
