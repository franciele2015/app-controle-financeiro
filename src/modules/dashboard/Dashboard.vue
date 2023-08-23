<template>
  <h2> Dasboard </h2>
  <v-row>
    <v-col cols="4">
      <div class="card-saldo">
        <h3>Saldo Total: {{ totalSaldoTotal() }}</h3> 
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

  <v-row>
    <Bar :data="chartData" />
  </v-row>
  
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { PrincipalDespesa } from "../gestao-despesas/entities/principal-despesa.entity";
import getDespesasServices from "../gestao-despesas/services/get-despesas.services";
import { PrincipalReceita } from "../gestao-receitas/entities/principal-receita.entity";
import getReceitasServices from "../gestao-receitas/services/get-receitas.services";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',  
  components: {
    Bar    
  },
  props: {  },
  
  data: () => ({ 
    chartData: {
        labels: [ 'Saldo Total', 'Receitas', 'Despesas'],
        datasets: [
          {
            label: 'Relação Geral',
            backgroundColor: '#f87979',
            data: [40, 20, 12]
          }
        ]
      },  

    principalDespesa: new PrincipalDespesa(), 
    principalReceita: new PrincipalReceita(),
    valorTotalDespesas: Number,
    valorTotalReceitas: Number,
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
      this.valorTotalDespesas = this.principalDespesa.calcularDespesas();
      return this.valorTotalDespesas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });      
    },

    totalReceita() {
      this.valorTotalReceitas = this.principalReceita.calcularReceita();
      return this.valorTotalReceitas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },

    totalSaldoTotal() {
      const valorCalculado = (this.valorTotalReceitas - this.valorTotalDespesas);
      return valorCalculado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    },

  },
  created() { // executado antes de montar o html
      this.getDespesas();
      this.getReceitas();      
  },

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