import Component from '../shared/Component.js';

class SpellHeader extends Component {
  renderTemplate() {
    return /*html*/`
        <header>
          <img src="./assets/title.png" alt="hp logo">
          <button id="characters"><a href="/characters.html">Directory of Characters</a></button>
        </header>
    `;
  }
}
export default SpellHeader;