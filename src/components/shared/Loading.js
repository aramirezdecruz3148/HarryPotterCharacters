import Component from './Component.js';

class Loading extends Component {

    renderTemplate() {
        const loading = this.props.loaded;
        if(!loading) {
            return /*html*/`
            <div></div>
            `;
        }
        return /*html*/`
            <div class="loading">
                <img src="../../assets/loading.gif" alt="loading...">
                <p id="load">Loading...</p>
            </div>
        `;
    }
}

export default Loading;