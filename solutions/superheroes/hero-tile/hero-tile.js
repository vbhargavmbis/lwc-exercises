import {LightningElement, api} from 'lwc';

export default class HeroCard extends LightningElement {
    name;
    image;
    city;
    alias;
    heroInformation
    
    @api
    get heroDetails() {
        return this.heroInformation;
    }

    set heroDetails(value) {
        this.name = value.name;
        this.image = value.image;
        this.city  = value.city;
        this.alias = value.alias;
        this.heroInformation = value;
    }


    handleClick() {
        this.dispatchEvent(
            new CustomEvent('selected', {
                composed: true,
                bubbles: true,
                detail: {
                    value: this.heroDetails
                }
            })
        )
    }
}