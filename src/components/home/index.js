import HomeApp from './HomeApp.js';

const homeApp = new HomeApp();
const audio = document.getElementById('audio');
audio.src = '../../assets/hp-theme.m4a';

const root = document.getElementById('app');
root.appendChild(homeApp.render());