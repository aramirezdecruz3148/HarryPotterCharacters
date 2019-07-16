import Component from '../shared/Component.js';

class HomeHeader extends Component {
    renderTemplate() {
        return /*html*/`
            <header>
                <img src="./assets/title.png" alt="hp logo">
            </header>
        `;
    }
}
export default HomeHeader;