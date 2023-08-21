

const util = {

    fetchPokemon:  function (){
      const input = document.querySelector('input');
       fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}/`)
        .then((res)=>  res.json())
        .then ((data)=> {
         
           // console.log(data);
            pokemon.id=data.id;
            pokemon.name=data.name;
           // pokemon.types=data.types.map(type => type.type.name);
            pokemon.types=data.types[0].type.name;
            pokemon.hp=data.stats[3].base_stat;
            pokemon.sprite=data.sprites.front_default;
            pokemon.attack=data.stats[4].base_stat;
            pokemon.defence=data.stats[3].base_stat;

            
            //creando un objeto pokemon 
            const pokem = new pokemonBase(pokemon.name,pokemon.id,
              pokemon.types, pokemon.hp, pokemon.attack,pokemon.defence,
               pokemon.sprite);

              pokem.getPokedex();

        } )
        .catch(error => console.error('Error al obtener los datos',error) );
       
        
     
    },

    openButton: function(){
        const puerta = document.querySelectorAll('section');
        const button = document.querySelectorAll('button');
        let btn = button[0].innerText;
      if(btn == 'Close'){
         button[0].innerText = 'Open';
        puerta[1].classList.remove('mover_tapa');
      }else{
        puerta[1].classList.add('mover_tapa');
         button[0].innerText = 'Close';

      }
    },

}


 
    // pokeImg.setAttribute('src', sprite);


  const pokemon = {
    name: "nombre",
    id: "id",
    types: "tipo",
    hp: "hp",
    attack: "ataque",
    defence: "defence",
    sprite: "img"
}