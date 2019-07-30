import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    
    // When @track is used on a property, the compoent
    // re-renders if the value of the property has changed
    @track selectedData = '';

    handleSelected(event) {
        this.selectedData = event.detail.value;
    }
}
