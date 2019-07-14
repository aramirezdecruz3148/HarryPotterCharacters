import CharacterApp from './CharacterApp.js';

const characterApp = new CharacterApp();

const root = document.getElementById('app');
root.appendChild(characterApp.render());