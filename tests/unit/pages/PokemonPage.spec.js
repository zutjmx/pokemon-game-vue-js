import { shallowMount, mount }  from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from "../mocks/pokemons.mock"

describe('PokemonPage Component', () => {
    let wrapper
    //let mixPokemonArraySpy

    beforeEach(() => {
        //mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        wrapper = shallowMount(PokemonPage)
    })
    
    test('debe de hacer match con el snapshot.', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('debe de llamar el mixPokemonArray al montar.', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage)

        expect(mixPokemonArraySpy).toBeCalled()
    })

    test('debe de hacer match con el snapshot cuando cargan los pokemons.', () => {
        
        const wrapper = mount(PokemonPage,{
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()

    })

    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        const wrapper = shallowMount(PokemonPage,{
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')

        //PokemonPicture
        expect(picture.exists()).toBeTruthy()
        
        //PokemonOptions
        expect(options.exists()).toBeTruthy()

        expect(picture.attributes('pokemonid')).toBe('1')
        expect(options.attributes('pokemons')).toBeTruthy()

    })

    test('pruebas con checkAnswer', async () => {

        const wrapper = shallowMount(PokemonPage,{
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        await wrapper.vm.checkAnswer(1)

        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBe(true)
        expect(wrapper.find('h2').text()).toBe(`Correcto, ${pokemons[0].name}`)

        await wrapper.vm.checkAnswer(3)
        //expect(wrapper.find('h2').text()).toBe(`Ooppsss, era => ${pokemons[0].name}`)
        expect(wrapper.vm.message).toBe(`Ooppsss, era => ${pokemons[0].name}`)

    })

})