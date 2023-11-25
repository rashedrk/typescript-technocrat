{
    // OOP - Class
    class Animal {
        name: string;
        species: string;
        sounds: string;

        constructor(name: string, species: string, sounds: string){
            this.name = name;
            this.species = species;
            this.sounds = sounds;
        };

        makeSounds() {
            console.log(`The ${this.name} says: ${this.sounds}`);
            
        }
    }

    const dog = new Animal('Germen shepard', 'Dog', 'Ghew Ghew');
    const cat = new Animal('Billi', 'Cat', 'mew mew');
    cat.makeSounds();
    //
}