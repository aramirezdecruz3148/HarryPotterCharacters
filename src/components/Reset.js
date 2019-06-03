import Component from './Component.js';

class Reset extends Component {

    renderTemplate() {
        return /*html*/`
            <section>
                <button id="reset"><a href="">Reset to Show All Characters</a></button>
            </section>
        `;
    }
}

export default Reset;