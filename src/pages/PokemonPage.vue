<template>
  <h1>¿Quién es este PokéMon?</h1>
  
  <PokemonPicture :pokemonId="98" :showPokemon="true"/>

  <PokemonOptions :pokemons="pokemonArr"/>

</template>

<script>

import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'

import getPokemonOptions from '@/helpers/getPokemonOptions'

//console.log(getPokemonOptions());

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
      return {
        pokemonArr: []
      }
    },
    methods: {
      async mixPokemonArray() {
        this.pokemonArr = await getPokemonOptions()
      }
    },
    mounted() {
      this.mixPokemonArray()
    }
}
</script>
