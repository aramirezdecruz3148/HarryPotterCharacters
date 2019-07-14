import key from '../../config.js';

const URLCHARACTERS = `https://www.potterapi.com/v1/characters/?key=${key}`;
const URLSPELLS = `https://www.potterapi.com/v1/spells/?key=${key}`;

const hpApi = { 
    getCharacters(params) {
        return fetch(`${URLCHARACTERS}&${params}`)
            .then(response => {
                return response.json();
            });
    },

    getSpells() {
        return fetch(`${URLSPELLS}`)
            .then(response => {
                return response.json();
            });
    }
};

export default hpApi;

