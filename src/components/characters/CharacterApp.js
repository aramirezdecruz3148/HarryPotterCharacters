import Component from '../shared/Component.js';
import CharacterHeader from './CharacterHeader.js';
import HPList from './hpList.js';
import hpApi from '../../services/hpApi.js';
import Loading from '../shared/Loading.js';


class CharacterApp extends Component {

    render() {
        const dom = this.renderDOM();

        const characterHeader = new CharacterHeader();
        const main = dom.querySelector('main');
        dom.insertBefore(characterHeader.render(), main);

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

export default CharacterApp;