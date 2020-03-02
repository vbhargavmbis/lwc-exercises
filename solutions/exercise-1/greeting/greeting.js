import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {

    name = 'World';

    handleChange(event) {
        this.name = event.target.value;
    }

}