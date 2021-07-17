import './style.css';
import './initWebsite.js';

function initHeader(){
    const body = document.getElementById('content');

    const container = document.createElement('div');
    container.id = "header";

    const logo = document.createElement('h1');
    logo.textContent = "My Restaurant";

    container.appendChild(logo);

    body.appendChild(container);
}
initHeader()