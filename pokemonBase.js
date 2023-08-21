class pokemonBase{
    constructor(name, id, types, hp, attack, defence,
         img){
           this.name = name;
           this.id = id;
           this.types = types;
           this.hp = hp;
           this.attack = attack;
           this.defence = defence;
           this.img = img;
        }
        obterAtributos(){
            return `nombre: ${this.name}, 
            id: ${this.id}, 
            tipo: ${this.types},
             hp: ${this.hp}, ataque: 
             ${this.attack}, defensa:
              ${this.defence},
               speed: ${this.speed},
                img: ${this.img}`
        }
        getPokedex(){
            const img = document.querySelector('img');
            const span = document.querySelectorAll('span');
           span[0].innerText = this.name;
           span[1].innerText = this.types;
           span[2].innerText = this.hp;
           span[3].innerText = this.attack;
           span[4].innerText = this.defence;
           span[5].innerText = this.id;
           img.setAttribute('src', this.img);


        }

    }



