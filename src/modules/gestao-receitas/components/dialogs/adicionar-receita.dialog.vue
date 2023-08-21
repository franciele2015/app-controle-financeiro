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
                v-model="receita.nome"               
                label="Nome"
                outlined
                dense
              ></v-text-field>
              <v-text-field  
                :rules="[rules.required, rules.minLengthName]"
                v-model="receita.descricao"              
                label="Descritivo"
                outlined
                dense
              ></v-text-field>
              <VueDatePicker v-model="receita.dataDeEntrada"></VueDatePicker>
              <v-text-field  
                :rules="[rules.required, rules.minLengthName]"
                v-model="receita.valor"              
                label="Valor"
                outlined
                dense
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="closeDialog" class="btn-acoes">Fechar</v-btn>
            <v-btn @click="salvarReceita" class="btn-acoes">Salvar receita</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { Receitas } from '../../entities/receitas.entity';

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
    receitaEdicao: {
        type: Receitas,
        required: true,
        default: () => new Receitas(),
    }
  },
  data: () => ({ 
    date: null,
    receita: new Receitas(),
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

    async salvarReceita() {
      const form: any = this.$refs.form;
      const { valid } = await form.validate();

      if (valid) {
        this.$emit("salvar-receita", this.receita);
      }
    },

    inicializarReceita() {
      if (this.modoEdicao && this.receitaEdicao !== null) {
        this.receita = Object.assign({}, this.receitaEdicao);
      } else {
        this.receita = new Receitas();
      }
    },
  },

  created() { // executado antes de montar o html
    this.inicializarReceita();
  },

  beforeUpdate() {
    this.inicializarReceita();
    console.log('chamou update');
  },

  computed: {
    formTitulo() {
      return this.modoEdicao ? "Editar receita" : "Adicionar nova receita";
    },
  },
};
</script>

<style>

  .v-overlay__content {
    width: 700px !important;
  }

</style>