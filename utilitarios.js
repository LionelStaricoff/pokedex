

const util = {

    fetchPokemon: function (id){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((res)=> res.json())
        .then ((data)=> {
         
            console.log(data);
            const pokemon = {
                name: data.name,
                id: data.id,
               types: data.types.map(type => type.type.name)
            }
    
            console.log(pokemon);
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
    }
}