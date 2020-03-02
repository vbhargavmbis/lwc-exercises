import {LightningElement, api} from 'lwc';

export default class HeroTile extends LightningElement {

    // The @api decorator is used to specify attributes
    @api name;
    @api city;
    @api alias;
    @api image;

    handleClick() {

        // Firing a custom event that goes up one level to parent
        // Contains the name of the superhero that was clicked
        this.dispatchEvent(
            new CustomEvent('c_herotileselected', {
                detail: {
                    name: this.name
                }
            })
        );
    }
}