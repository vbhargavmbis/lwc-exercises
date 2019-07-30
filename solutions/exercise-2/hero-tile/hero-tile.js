import {LightningElement, api} from 'lwc';

export default class HeroTile extends LightningElement {

    // The @api decorator is used to specify attributes
    @api name;
    @api city;
    @api alias;
    @api image;

    handleClick() {

        // Firing a custom event that bubbles up; contains
        // the name of the superhero that was clicked
        this.dispatchEvent(
            new CustomEvent('c_herotileselected', {
                bubbles: true,
                detail: {
                    name: this.name
                }
            })
        );
    }
}