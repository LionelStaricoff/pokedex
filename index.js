function fetchPokemon(id){
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
    
}

fetchPokemon(1);