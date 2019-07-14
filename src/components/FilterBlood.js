import Component from './Component.js';
import hashStorage from '../services/hash-storage.js';

class FilterBlood extends Component {
    render() {
        const filterBlood = this.renderDOM();
        const option = filterBlood.querySelector('form');

        option.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(option);
            const filterKey = formData.get('filter-blood-key');
            hashStorage.set({ bloodStatus: [filterKey] });
        });

        return filterBlood;
    }

    renderTemplate() {
        return /*html*/`
        <section>
            <form class="form-blood">
                <select class="blood-filter" name="filter-blood-key">
                    <option disabled selected value="">Blood Status</option>
                    <option value="pure-blood">Pure Blood</option>
                    <option value="half-blood">Half Blood</option>
                    <option value="muggle-born">Muggle Born</option>
                </select>
                <button class="blood-filter-button">Add Filter</button>
            </form>
        </section>
        `;
    }
}

export default FilterBlood;