import Component from '../shared/Component.js';
import HomeHeader from './HomeHeader.js';
import DirectoryLinks from './DirectoryLinks.js';

class HomeApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');
        const audio = dom.querySelector('#audio');
        
        onload = function animateText() {
            audio.src= '../../../assets/hp-theme.mp3';
        };

        const homeHeader = new HomeHeader();
        dom.insertBefore(homeHeader.render(), main);

        const directoryLinks = new DirectoryLinks();
        main.appendChild(directoryLinks.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <audio src="../../../assets/hp-theme.mp3" id="audio" autoplay loop></audio>
                <main></main>
            </div>
        `;
    }
}
export default HomeApp;