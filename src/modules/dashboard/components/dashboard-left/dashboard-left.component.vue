<template> 
    <v-layout>
      <v-flex>
        <v-sheet width="300" class="mx-auto"          
          color="grey lighten-3"
          height="600"
        >
        <v-toolbar>
            <v-toolbar-side-icon></v-toolbar-side-icon>
          </v-toolbar>
        <v-avatar
          :tile="tile"
          :size="avatarSize"
          color="grey lighten-4"
        >
          <img src="https://via.placeholder.com/300" alt="avatar">
        </v-avatar>

        <v-col cols="6">
            <v-btn @click="adicionarReceita">Add</v-btn>
            <v-btn>Edit</v-btn>
        </v-col>

        </v-sheet>
      </v-flex>
      </v-layout>
</template>


<script lang="ts">
  export default {
    data: () => ({
      slider: 56,
      tile: false
    }),

    computed: {
      avatarSize () {
        return `${this.slider}px`
      }
    },

    methods: {
        adicionarReceita() {
            this.$emit("adicionar-receita");
        }
    },
  }
</script>

<style>

** {
    margin: 0;
    padding: 0;
}

</style>