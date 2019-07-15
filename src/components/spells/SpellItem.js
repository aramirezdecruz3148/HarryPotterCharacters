import Component from '../shared/Component.js';

class SpellItem extends Component {
  renderTemplate() {
  const spell = this.props.spell;
    return /*html*/`
        <li class="spell-item">
            <h3>${spell.spell} <span class="stars">✨</span></h3>
            <section class="hidden">
                <hr>
                <p class="card-text">Type: ${spell.type}</p>
                <p class="card-text">Effect: ${spell.effect}</p>
            </section>
        </li> 
  `;
  }
}
export default SpellItem;