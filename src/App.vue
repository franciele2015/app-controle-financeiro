<template> 
    <v-app>
      <div v-if="userStore.isLogged">
        <v-app-bar
            app          
          >
            <v-toolbar-title>Seja Bem vindo(a) <b>{{ userStore.email }}</b> </v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-navigation-drawer
            expand-on-hover
            rail
          >
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Controle Financeiro Empress "
              subtitle="contre_financas@gmailcom"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="Dasboard" value="myfiles" @click="acaoDasboard"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Receitas" value="shared" @click="acaoReceitas"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Despesas" value="starred" @click="acaoDespesas"></v-list-item>
          </v-list>
        </v-navigation-drawer>

      </div>
      <v-content>
        <router-view></router-view> 
      </v-content>
   </v-app>
</template>

<script lang="ts">

import { mapStores } from 'pinia';
import useUserStore from '../src/store/user-store';

export default {
  components: {    
  },
  data: () => ({}),
  computed: {
    ...mapStores(useUserStore),
  },
  methods: {
      acaoDasboard() {
        this.$router.push({name:'dasboard-home'})
      },
      acaoReceitas() {    
        this.$router.push({name:'receita-lista'})        
      },
      acaoDespesas() {
        this.$router.push({name:'despesa-lista'})    
      }
  }
};
</script>


