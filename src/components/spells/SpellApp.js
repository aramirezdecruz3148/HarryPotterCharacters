import Component from '../shared/Component.js';
import SpellHeader from './SpellHeader.js';
import Loading from '../shared/Loading.js';
import SpellList from './SpellList.js';
import hpApi from '../../services/hpApi.js';

class SpellApp extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const spellHeader = new SpellHeader();
        dom.insertBefore(spellHeader.render(), main);

        const spellList = new SpellList({ spells: [] });
        main.appendChild(spellList.render());

        const loading = new Loading({ loaded: false });
        main.appendChild(loading.render());

        function loadSpells() {
          const params = window.location.hash.slice(1);
          loading.update({ loaded: true });

          hpApi.getSpells()
              .then(response => {
                  spellList.update({ spells: response });
              })
              .catch(err => {
                  console.log(err);
              })
              .finally(() => {
                  loading.update({ loaded: false });
              });
      }

      loadSpells();
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
export default SpellApp;