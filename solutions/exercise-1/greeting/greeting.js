import { LightningElement, track } from 'lwc';

export default class DataBinding extends LightningElement {

    @track name = 'World';

    handleChange(event) {
        this.name = event.target.value;
    }

}