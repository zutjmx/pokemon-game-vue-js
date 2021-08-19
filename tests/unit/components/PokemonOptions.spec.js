import { shallowMount } from "@vue/test-utils";
import PokemonOptions from "@/components/PokemonOptions";
import { pokemons } from "../mocks/pokemons.mock";

describe("PokemonOptions component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: pokemons
      }
    });
  });

  test("debe de hacer match con el snapshot.", () => {
    //console.log(wrapper.html());
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe de mostrar la 4 opciones correctamente', () => {
      const liArr = wrapper.findAll('li')
      //console.log(liArr[0].text());
      expect(liArr.length).toBe(4)
      expect(liArr[0].text()).toEqual(pokemons[0].name)
      expect(liArr[1].text()).toEqual(pokemons[1].name)
      expect(liArr[2].text()).toEqual(pokemons[2].name)
      expect(liArr[3].text()).toEqual(pokemons[3].name)
  })

  test('debe de emitir "selection" con sus respectivos parámetros al hacer click', () => {
    const [ li1, li2, li3, li4 ] = wrapper.findAll('li')

    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')

    expect(wrapper.emitted('selection').length).toBe(4)
    expect(wrapper.emitted('selection')[0]).toEqual([1])
    expect(wrapper.emitted('selection')[1]).toEqual([2])
    expect(wrapper.emitted('selection')[2]).toEqual([3])
    expect(wrapper.emitted('selection')[3]).toEqual([4])

  })

})
