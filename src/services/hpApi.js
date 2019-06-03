import key from '../../config.js';

const URL = `https://www.potterapi.com/v1/characters/?key=${key}`;

const hpApi = { 
    getCharacters(params) {
        return fetch(`${URL}&${params}`)
            .then(response => {
                return response.json();
            });
    }
};

export default hpApi;

