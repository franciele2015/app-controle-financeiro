<template>
    <v-toolbar class="secondary header">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Controle de Finanças</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Receitas</v-btn>
        <v-btn flat>Despesas</v-btn>        
      </v-toolbar-items>
    </v-toolbar>
</template>

<script lang="ts">

export default {
    components: {},    
    data: () => ({             
    }),
    methods: {
    },
};
</script>

<style>

** {
    margin-top: 0px;
    padding-right: 0px;
    padding-left: 0px;
}

.header {    
    width: 1280px;
    top: 0;
}

* {
    margin: 0;
    padding: 0;
}


</style>