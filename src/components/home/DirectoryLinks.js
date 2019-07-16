import Component from '../shared/Component.js';

class DirectoryLinks extends Component {
    renderTemplate() {
        return /*html*/`
            <ul class="directory">
                <li class="character-directory">
                    <h3>Character Directory<span class="feet">👣</span></h3>
                    <section class="hidden">
                        <hr>
                        <p class="card-text">Placeholder</p>
                        <p class="card-text">Placeholder</p>
                        <p class="card-text">Placeholder</p>
                    </section>
                </li> 
                <li class="spell-directory">
                    <h3>Spell Directory<span class="feet">✨</span></h3>
                    <section class="hidden">
                        <hr>
                        <p class="card-text">Placeholder</p>
                        <p class="card-text">Placeholder</p>
                        <p class="card-text">Placeholder</p>
                    </section>
                </li> 
            </ul>
        `;
    }
}
export default DirectoryLinks;