import Component from '../shared/Component.js';
import SpellItem from './SpellItem.js';

class SpellList extends Component {
    render() {
        const list = this.renderDOM();
        const spells = this.props.spells;
        spells.forEach(spell => {
            const spellItem = new SpellItem({ spell });
            list.appendChild(spellItem.render());
        });

        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="spell-list"></ul>
        `;
    }
}

export default SpellList;