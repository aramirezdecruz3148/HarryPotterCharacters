import Component from '../shared/Component.js';
import FilterOrg from './FilterOrg.js';
import FilterHouse from './FilterHouse.js';
import FilterBlood from './FilterBlood.js';
import Reset from './Reset.js';

class CharacterHeader extends Component {
    render() {
        const header = this.renderDOM();
        const span = header.querySelector('span');
        const filterOrg = new FilterOrg();
        span.appendChild(filterOrg.render());

        const filterHouse = new FilterHouse();
        span.appendChild(filterHouse.render());

        const filterBlood = new FilterBlood();
        span.appendChild(filterBlood.render());
        
        const reset = new Reset();
        span.appendChild(reset.render());
        return header;
    }
    
    renderTemplate() {        
        return /*html*/`
            <header>
                <a id="home-directory" href="index.html"><img src="./assets/title.png" alt="hp logo"></a>
                <button id="spells-directory"><a href="/spells.html">Directory of Spells</a></button>
                <span></span>
            </header>
        `;
    }
}

export default CharacterHeader;
