import Component from './Component.js';
import hashStorage from '../services/hash-storage.js';

class FilterOrg extends Component {
    render() {
        const filterOrg = this.renderDOM();
        const option = filterOrg.querySelector('form');

        option.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(option);
            const filterKey = formData.get('filter-key');
            const booleanValue = true;
            hashStorage.set({ [filterKey]: booleanValue });
        });

        function setInputFromHash() {
            const params = hashStorage.get();
            params.booleanValue = true;
        }

        setInputFromHash();

        window.addEventListener('hashchange', () => {
            setInputFromHash();
        });
        return filterOrg;
    }

    renderTemplate() {
        return /*html*/`
            <section>
                <form class="form-org">
                    <select class="org-filter" name="filter-key">
                        <option disabled selected value="">Member of Organization...</option>
                        <option value="deathEater">Member of the Death Eaters</option>
                        <option value="dumbledoresArmy">Member of Dumbledore's Army</option>
                        <option value="orderOfThePhoenix">Member of The Order of The Phoenix</option>
                    </select>
                    <button class="org-filter-button">Add Filter</button>
                </form>
            </section> 
        `;
    }
}

export default FilterOrg;
