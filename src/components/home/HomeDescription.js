import Component from '../shared/Component.js';

class HomeDescription extends Component {
    renderTemplate() {
        return /*html*/`
            <section id="message">
                <h3 id="intro">Resource directory to reference your favorite
                characters and spells from the world of Harry Potter!</h3>
            </section>
        `;
    }
}
export default HomeDescription;