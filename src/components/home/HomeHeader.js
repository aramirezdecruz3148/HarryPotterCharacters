import Component from '../shared/Component.js';

class HomeHeader extends Component {
    render() {
        const dom = this.renderDOM();
        const title = dom.querySelector('#title-pic')

        onload = function animateText() {
            title.classList.add('animate');
        };

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <header>
                <img id="title-pic" src="./assets/title.png" alt="hp logo">
            </header>
        `;
    }
}
export default HomeHeader;