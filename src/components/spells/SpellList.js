import Component from '../shared/Component.js';
import SpellItem from './SpellItem.js';

class SpellList extends Component {
    render() {
        const list = this.renderDOM();
        // const button = list.querySelector('button');
        // const input = list.querySelector('input');
        const spells = this.props.spells;

        spells.forEach(spell => {
            const spellItem = new SpellItem({ spell });
            list.appendChild(spellItem.render());
         });

        // button.addEventListener('click', () => {
        //     spells.filter(spell => {
        //         if(spell.spell.includes(input.value)) {
        //         const spellItem = new SpellItem({ spell });
        //         list.appendChild(spellItem.render());
        //         }
        //     });
        //  });

            // <div>
            //     <input name="search" placeholder="search spell by name">
            //     <button class="search-spell-button">Search</button>
            //     <ul class="spell-list"></ul>
            // </div>

        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="spell-list"></ul>
        `;
    }
}

export default SpellList;