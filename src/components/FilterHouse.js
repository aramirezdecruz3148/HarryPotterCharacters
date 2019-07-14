import Component from './Component.js';
import hashStorage from '../services/hash-storage.js';

class FilterHouse extends Component {
    render() {
        const filterHouse = this.renderDOM();
        const option = filterHouse.querySelector('form');

        option.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(option);
            const filterKey = formData.get('filter-house-key');
            hashStorage.set({ house: [filterKey] });
        });

        return filterHouse;
    }

    renderTemplate() {
        return /*html*/`
            <section>
                <form class="form-house">
                    <select class="house-filter" name="filter-house-key">
                        <option disabled selected value="">Hogwarts Houses</option>
                        <option value="Gryffindor">Gryffindor</option>
                        <option value="Ravenclaw">Ravenclaw</option>
                        <option value="Hufflepuff">Hufflepuff</option>
                        <option value="Slytherin">Slytherin</option>
                    </select>
                    <button class="house-filter-button">Add Filter</button>
                </form>
            </section> 
        `;
    }
}

export default FilterHouse;