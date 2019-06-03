import Component from './Component.js';
import HPItem from './HPItem.js';

class HPList extends Component {
    render() {
        const list = this.renderDOM();
        const characters = this.props.characters;
        characters.forEach(character => {
            const hpItem = new HPItem({ character });
            list.appendChild(hpItem.render());
        });

        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="hp-list">
            </ul>
        `;
    }
}

export default HPList;