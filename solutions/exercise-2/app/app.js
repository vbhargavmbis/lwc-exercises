import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    
    selectedData = '';

    handleSelected(event) {
        this.selectedData = event.detail.value;
    }
}
