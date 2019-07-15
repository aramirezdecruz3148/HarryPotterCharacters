import Component from '../shared/Component.js';

class Reset extends Component {

    renderTemplate() {
        return /*html*/`
            <section>
                <button id="reset"><a href="">Show All Characters</a></button>
            </section>
        `;
    }
}

export default Reset;