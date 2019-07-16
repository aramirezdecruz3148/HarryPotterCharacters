import Component from '../shared/Component.js';

class DirectoryLinks extends Component {
    renderTemplate() {
        return /*html*/`
            <ul class="directory">
                <li class="character-directory">
                    <h3 class="title">Character Directory<span class="feet">👣</span></h3>
                    <section class="hidden">
                        <hr>
                        <p class="card-text">A list of all characters from the Harry Potter
                        books. Filter through the list by house, blood status, or group affiliation.</p>
                        <button id="characters-directory"><a href="/characters.html">Directory of Characters</a></button>
                    </section>
                </li> 
                <li class="spell-directory">
                    <h3 class="title">Spell Directory<span class="feet">✨</span></h3>
                    <section class="hidden">
                        <hr>
                        <p class="card-text">A list of all spells from the Harry Potter
                        books in alphabetical order.</p>
                        <button id="spells-directory"><a href="/spells.html">Directory of Spells</a></button>
                    </section>
                </li> 
            </ul>
        `;
    }
}
export default DirectoryLinks;