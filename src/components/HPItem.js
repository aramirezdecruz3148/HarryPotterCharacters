import Component from './Component.js';

class HPItem extends Component {

    renderTemplate() {
        const character = this.props.character;
        if(character.bloodStatus === 'muggle') {
            return /*html*/`
                <li class="hp-item">
                    <h3>${character.name} <span class="feet">👣</span></h3>
                    <section class="hidden">
                        <hr>
                        <p class="card-text">Blood Status: ${character.bloodStatus}</p>
                    </section>
                </li> 
                `;
        } else if (character.house === undefined || character.school === undefined) {
            return /*html*/`
                <li class="hp-item">  
                    <h3>${character.name} <span class="feet">👣</span></h3>
                    <section class="hidden">
                        <hr>
                        <p class="card-text">House: unknown</p>
                        <p class="card-text">School: unknown</p>
                        <p class="card-text">Blood Status: ${character.bloodStatus}</p>
                    </section>
                </li> 
            `;
        } else {
        return /*html*/`
            <li class="hp-item">
                <h3>${character.name} <span class="feet">👣</span></h3>
                <section class="hidden">
                    <hr>
                    <p class="card-text">House: ${character.house}</p>
                    <p class="card-text">School: ${character.school}</p>
                    <p class="card-text">Blood Status: ${character.bloodStatus}</p>
                </section>
            </li> 
            `;
        }
    }
}

export default HPItem;

