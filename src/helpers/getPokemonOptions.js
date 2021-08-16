import pokemonApi from '../api/pokemonApi'

const getPokemons = () => {
    const pokemonsArr = Array.from(Array(650))
    return pokemonsArr.map((_,index) => index + 1)
}

const getPokemonOptions = async () => {
    
    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    
    const pokemons = await getPokemonsNames(mixedPokemons.splice(0,4))
    
    return pokemons
}

const getPokemonsNames = async ([a,b,c,d] = []) => {
    
    //const respuesta = await pokemonApi.get(`/1`)
    //console.log(respuesta.data.name, respuesta.data.id);
    //console.log(a,b,c,d)

    const promesasArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]

    const [ pkm1, pkm2, pkm3, pkm4 ] = await Promise.all(promesasArr)
    
    return [
        {name: pkm1.data.name, id: pkm1.data.id},
        {name: pkm2.data.name, id: pkm2.data.id},
        {name: pkm3.data.name, id: pkm3.data.id},
        {name: pkm4.data.name, id: pkm4.data.id}
    ]

}

export default getPokemonOptions
