<template>
  <v-list max-height="600px" lines="one">
        <h1>Listagem</h1>
        <v-list-item
            v-for="(item, index) in dashboardListagem"
            :key="index"
            title="Teste"
            subtitle="...."
        >
        </v-list-item>
    </v-list>

  <v-row>
    <adicionar-receita-dialog
      @salvar-receita="salvarReceita"
      v-model="showModalAdicionarReceita">
    </adicionar-receita-dialog>
    <v-col cols="12">
      <dashboard-header-component>      
      </dashboard-header-component>
    </v-col>
    <v-row>
      <v-col cols="4">
        <dashboard-left-component
        @adicionar-receita="setShowAdicionarReceita"></dashboard-left-component>
      </v-col>
      <v-col cols="8">      
        <dashboard-listagem-component
          @deletar-receita="deletarReceita"
          :dashboard-listagem="filtrarReceitas">
        </dashboard-listagem-component>        
      </v-col>
    </v-row>
  </v-row>
</template>

<script lang="ts">

import AdicionarReceitaDialog from "./components/dialogs/adicionar-receita.dialog.vue";
import DashboardListagemComponent from "./components/dashboard-listagem/dashboard-listagem.component.vue";
import DashboardHeaderComponent from "./components/dashboard-header/dashboard-header.component.vue";
import DashboardLeftComponent from "./components/dashboard-left/dashboard-left.component.vue";
import getReceitasService from "./services/get-receitas.services";
import { ReceitaFilter } from "./entities/receita-filter";
import { Receita } from "./entities/receita.entity";
import { FormReceita } from "./entities/form-receita.entity";
import { PropType } from "vue";

export default {
  components: {
    AdicionarReceitaDialog,
    DashboardListagemComponent,
    DashboardHeaderComponent,
    DashboardLeftComponent
  },
  props: {
    dashboardListagem: {
      type: Array as PropType<string[]>,
      required: true,
      default: () => [],
    }
  },
  data: () => ({
    receitas: new Receita(),
    filter: new ReceitaFilter(),
    showModalAdicionarReceita: false,
        
  }),
  methods: {
    async getReceitas() {
      const receitas = await getReceitasService.execute();
      this.receitas.formReceitas = receitas;
    },
    setShowAdicionarReceita() {
      this.showModalAdicionarReceita = true;
    },
    closeDialogAdicionarReceita() {
      this.showModalAdicionarReceita = false;
    },
    salvarReceita(formReceita: FormReceita ) {
      this.receitas.salvarReceita(formReceita);
      this.closeDialogAdicionarReceita();
    },
    setFilterPorNome(nome: string) {
      this.filter.nome = nome;
    },
    deletarReceita(formReceita: FormReceita) {
      this.receitas.deletarReceita(formReceita.id);
    },
  },
  computed: {    
    filtrarReceitas() {
      return this.receitas.filtrarReceitas(this.filter.name);
    },
  },
  created() {
    this.getReceitas();
  },
}
</script>