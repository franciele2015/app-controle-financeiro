<template>
    <div class="text-center">
      <v-dialog class="dialog-cadastro"
        persistent
        :model-value="modelValue"        
        width="auto"
      >
        <v-card>
          <v-card-title>
            <h2>{{ formTitulo }}</h2>            
          </v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field 
                :rules="[rules.required, rules.minLengthName]"
                v-model="despesa.nome"               
                label="Nome"
                outlined
                dense
              ></v-text-field>
              <v-text-field  
                :rules="[rules.required, rules.minLengthName]"
                v-model="despesa.descricao"              
                label="Descritivo"
                outlined
                dense
              ></v-text-field>
              <VueDatePicker v-model="despesa.dataVencimento"></VueDatePicker>
              <v-select
                v-model="despesa.categoria"
                v-validate="'required'"
                :items="items"                
                label="Categoria"
                data-vv-name="select"
                required
              ></v-select>
              <v-text-field  
                :rules="[rules.required, rules.minLengthName]"
                v-model="despesa.valor"              
                label="Valor"
                outlined
                dense
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="closeDialog" class="btn-acoes">Fechar</v-btn>
            <v-btn @click="salvarDespesa" class="btn-acoes">Salvar despesa</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { Despesas } from '../../entities/despesas.entity';

export default {
  components: { VueDatePicker },
  props: {
    modoEdicao: {
      type: Boolean,
      required: true,
      default: () => false,
    },
    modelValue: {
      type: Boolean,
      required: true,
      default: () => false,
    },
    despesaEdicao: {
        type: Despesas,
        required: true,
        default: () => new Despesas(),
    }
  },
  data: () => ({ 
    date: null,
    despesa: new Despesas(),    
    items: [
      'Moradia',
      'Supermercado',
      'Internet',
      'Transporte',
      'Lazer',
      'Saúde'      
    ],
    rules: {
      required: (value: string) => !!value || "Campo obrigatório",
      minLengthName: (value: string) =>
        value.length >= 3 || "Nome deve ter no mínimo 3 caracteres",
    }  
    
  }),
  methods: {   
    closeDialog() {
      this.$emit("close-dialog");      
    },

    async salvarDespesa() {
      const form: any = this.$refs.form;
      const { valid } = await form.validate();

      if (valid) {
        this.$emit("salvar-despesa", this.despesa);
      }
    },

    inicializarDespesa() {
      if (this.modoEdicao && this.despesaEdicao !== null) {
        this.despesa = Object.assign({}, this.despesaEdicao);
      } else {
        this.despesa = new Despesas();
      }
    },
  },

  created() { // executado antes de montar o html
    this.inicializarDespesa();
  },

  beforeUpdate() {
    this.inicializarDespesa();
    console.log('chamou update');
  },

  computed: {
    formTitulo() {
      return this.modoEdicao ? "Editar despesa" : "Adicionar nova despesa";
    },
  },
};
</script>

<style>

  .v-overlay__content {
    width: 700px !important;
  }

</style>