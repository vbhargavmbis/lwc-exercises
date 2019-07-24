import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track selectedData = '';

    handleSelected(event) {
        this.selectedData = event.detail.value
    }

    get selectedInfo() {
        return this.selectedData;
    }
}
