import {LightningElement} from 'lwc';

// MOCK DATA
const DATA = {
    'superheroes': [
        {
            "name": "Batman",
            "image": "https://vignette.wikia.nocookie.net/batman/images/3/3e/Batman_Bruce_Wayne_The_Return.jpg/revision/latest/scale-to-width-down/329?cb=20100811041330",
            "city": "Gotham City",
            "alias": "Dark Knight",
            "occupation": "Businessman / Philanthropist",
            "abilities": "Martial Arts",
            "secretIdentity": "Bruce Wayne"
        },
        {
            "name": "Superman",
            "image": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/132327/6507037-28872490_1638064799604695_1250122498385004714_n.jpg",
            "city": "Metropolis",
            "alias": "Man of Steel",
            "occupation": "Journalist",
            "abilities": "Flight / Super-human Strength / Lazer eyes",
            "secretIdentity": "Clark Kent"
        },
        {
            "name": "Wonder Woman",
            "image": "https://ewedit.files.wordpress.com/2018/11/ww_cv58_var.jpg",
            "city": "Themyscira",
            "alias": "",
            "occupation": "Military Intelligence",
            "abilities": "Flight / Super-human Strength",
            "secretIdentity": "Diana Prince"
        },
        {
            "name": "Cyborg",
            "image": "https://www.dccomics.com/sites/default/files/imce/2018/08-AUG/Cyborg_v01_r01_5b6c7d7bef1616.90753062.jpg",
            "city": "Central City",
            "alias": "",
            "occupation": "-",
            "abilities": "Genius-level intellect / Strength",
            "secretIdentity": "Victor Stone"
        }
    ],
};

export default class HeroList extends LightningElement {
    
    // Getter to return the 'superheroes' array
    get superheroes() {
        return DATA.superheroes;
    }

    handleSelected(event) {
        const heroName = event.detail.name;
        let selectedHero = '';

        // Match the name to an object in the superheroes array
        DATA.superheroes.forEach(superhero => {
            if (superhero.name === heroName) {
                this.selectedHero = superhero;
            }
        });

        // Fire a custom event with the identified object
        // that contains all the information of the superhero
        this.dispatchEvent(
            new CustomEvent('c_selectedhero', {
                detail: {
                    value: this.selectedHero
                }
            })
        );
    }
}