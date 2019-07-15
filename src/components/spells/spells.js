import SpellApp from './spellApp.js';

const spellApp = new SpellApp();

const root = document.getElementById('app');
root.appendChild(spellApp.render());