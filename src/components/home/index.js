import HomeApp from './HomeApp.js';

const homeApp = new HomeApp();

const root = document.getElementById('app');
root.appendChild(homeApp.render());