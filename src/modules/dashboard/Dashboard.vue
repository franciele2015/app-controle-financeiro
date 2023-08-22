<template>
  <h2> Dasboard </h2>
  <v-row>
    <v-col cols="4">
      <div class="card-saldo">
        <h3>Saldo Total: </h3> 
      </div>
    </v-col>

    <v-col cols="4">
      <div class="card-saldo">
        <h3>Receitas: {{ totalReceita() }} </h3> 
      </div>
    </v-col>

    <v-col cols="4">
      <div class="card-saldo">
        <h3>Despesas: {{ totalDespesa() }} </h3> 
      </div>
    </v-col>

  </v-row>
  
</template>

<script lang="ts">
import { PrincipalDespesa } from "../gestao-despesas/entities/principal-despesa.entity";
import getDespesasServices from "../gestao-despesas/services/get-despesas.services";
import { PrincipalReceita } from "../gestao-receitas/entities/principal-receita.entity";
import getReceitasServices from "../gestao-receitas/services/get-receitas.services";

export default {
  components: {
    
  },
  props: {
    
  },
  data: () => ({   
    principalDespesa: new PrincipalDespesa(), 
    principalReceita: new PrincipalReceita(),
        
  }),
  methods: {
    async getDespesas() {
        const despesas = await getDespesasServices.execute();
        this.principalDespesa.despesas = despesas;            
    },

    async getReceitas() {
        const receitas = await getReceitasServices.execute();
        this.principalReceita.receitas = receitas;            
    },

    totalDespesa() {
      return this.principalDespesa.calcularDespesas();
    },

    totalReceita() {
      return this.principalReceita.calcularReceita();
    },

  },
  created() { // executado antes de montar o html
      this.getDespesas();
      this.getReceitas();
  }

}
</script>

<style>

.card-saldo {
  border: 1px solid #8d79c2;
  border-radius: 0.75rem;
  background-color: #f6f3ff;
  height: 75px;
  margin-top: 1.2rem;
}

h3 {
  margin-top: 0.5rem;
  padding: 0.5rem;
  text-align: center;
}
</style>