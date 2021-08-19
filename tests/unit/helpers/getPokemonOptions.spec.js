import getPokemonOptions, { getPokemons, getPokemonsNames } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {

    test('debe de regresar un arreglo de números.', () => {
        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)
    })

    test('debe de retornar un arreglo de 4 elementos con nombres de pokemos.', async () => {
        const pokemonNames = await getPokemonsNames([1,2,3,4])

        /* expect(pokemonNames.length).toBe(4)
        expect(pokemonNames[0].name).toBe('bulbasaur')
        expect(pokemonNames[1].name).toBe('ivysaur')
        expect(pokemonNames[2].name).toBe('venusaur')
        expect(pokemonNames[3].name).toBe('charmander') */

        expect(pokemonNames).toStrictEqual([
                { name: 'bulbasaur', id: 1 },
                { name: 'ivysaur', id: 2 },
                { name: 'venusaur', id: 3 },
                { name: 'charmander', id: 4 }
        ])

        //console.log(pokemonNames)
    })

    test('getPokemonOptions debe de retornar un arreglo mezclado.', async () => {
        const pokemonOptions = await getPokemonOptions()
        expect(pokemonOptions.length).toBe(4)

        expect(pokemonOptions).toEqual([
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            },
            { 
                name: expect.any(String), 
                id: expect.any(Number) 
            }
        ])

    })

})