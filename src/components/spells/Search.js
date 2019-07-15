import Component from '../shared/Component.js';

class Search extends Component {
    render() {
        const search = this.renderDOM();
        const form = search.querySelector('form');
        const input = search.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();
            console.log(input.value);
        });

        return search;
    }

    renderTemplate() {
        return /*html*/`
            <section>
                <form class="form-search">
                    <input name="search" type="search" placeholder="search spell by name">
                    <button class="search-spell-button">Search</button>
                </form>
            </section>
        `;
    }
}
export default Search;