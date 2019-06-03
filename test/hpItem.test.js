import HPItem from '../src/components/HPItem.js';

const test = QUnit.test;

QUnit.module('hp Item');

test('renders template from data', assert => {
    //arrange
    const character = {
        '_id': '5a0fa86dae5bc100213c233a',
        'name': 'Susan Bones',
        'role': 'student',
        'house': 'Hufflepuff',
        'school': 'Hogwarts School of Witchcraft and Wizardry',
        '__v': 0,
        'ministryOfMagic': false,
        'orderOfThePhoenix': false,
        'dumbledoresArmy': true,
        'deathEater': false,
        'bloodStatus': 'half-blood',
        'species': 'human'
    };
    
    //act
    const hpItem = new HPItem({ character });
    const rendered = hpItem.renderTemplate();

    //assert
    assert.htmlEqual(rendered, /*html*/`
    <li class="hp-item">
        <h3>${character.name}</h3>
        <section class="hidden">
            <hr>
            <p class="card-text">House: ${character.house}</p>
            <p class="card-text">School: ${character.school}</p>
            <p class="card-text">Blood Status: ${character.bloodStatus}</p>
        </section>
    </li> 
    `);
});