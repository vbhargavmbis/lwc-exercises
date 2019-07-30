import {LightningElement, api} from 'lwc';

export default class HeroTile extends LightningElement {
    @api name;
    @api city;
    @api alias;
    @api image;

    handleClick() {
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