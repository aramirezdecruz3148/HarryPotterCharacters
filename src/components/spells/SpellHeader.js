import Component from '../shared/Component.js';

class SpellHeader extends Component {
  renderTemplate() {
    return /*html*/`
        <header>
          <img src="./assets/title.png" alt="hp logo">
        </header>
    `;
  }
}
export default SpellHeader;