import './style.css';
import NicksPhoto from './assets/nick.png';
import { truncateName } from './util';

if (window) {
  window.addEventListener('load', () => {
    const wrapper = document.getElementById('root');
    const child = document.createElement('p');
    child.innerHTML = `Hello World ${truncateName('Nick')}`;
    child.classList.add('pink');
    const photoContainer = document.createElement('img');
    photoContainer.classList.add('fixedImage');
    photoContainer.src = NicksPhoto;
    child.appendChild(photoContainer);
    wrapper.appendChild(child);
    console.log('hello world');
  });
}
