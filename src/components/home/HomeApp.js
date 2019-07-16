import Component from '../shared/Component.js';
import HomeHeader from './HomeHeader.js';
import HomeDescription from './HomeDescription.js';
import DirectoryLinks from './DirectoryLinks.js';

class HomeApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const homeHeader = new HomeHeader();
        dom.insertBefore(homeHeader.render(), main);

        const homeDescription = new HomeDescription();
        main.appendChild(homeDescription.render());

        const directoryLinks = new DirectoryLinks();
        main.appendChild(directoryLinks.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}
export default HomeApp;