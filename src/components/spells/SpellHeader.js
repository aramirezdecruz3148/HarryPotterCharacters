import Component from '../shared/Component.js';

class SpellHeader extends Component {
  renderTemplate() {
    return /*html*/`
        <header>
          <a id="home-directory" href="index.html"><img src="./assets/title.png" alt="hp logo"></a>
          <button id="characters-directory"><a href="/characters.html">Directory of Characters</a></button>
        </header>
    `;
  }
}
export default SpellHeader;