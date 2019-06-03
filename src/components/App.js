import Component from './Component.js';
import Header from './Header.js';
import HPList from './hpList.js';
import hpApi from '../services/hpApi.js';
import Loading from './Loading.js';


class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const hpList = new HPList({ characters: [] });
        main.appendChild(hpList.render());

        const loading = new Loading({ loaded: false });
        main.appendChild(loading.render());

        function loadCharacters() {
            const params = window.location.hash.slice(1);
            loading.update({ loaded: true });

            hpApi.getCharacters(params)
                .then(response => {
                    hpList.update({ characters: response });
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    loading.update({ loaded: false });
                });
        }

        loadCharacters();

        window.addEventListener('hashchange', () => {
            loadCharacters();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;