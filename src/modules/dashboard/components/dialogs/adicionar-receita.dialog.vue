<template>
    <div class="text-center">
      <v-dialog
        persistent
        :model-value="modelValue"
        @update:modelValue="closeDialog"
        width="auto"
      >
        <v-card>
          <v-card-title>
            <h2>Adicionar nova receita</h2>
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
            <v-btn @click="closeDialog">Fechar</v-btn>
            <v-btn @click="salvarReceita" color="primary">Salvar receita</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>

<script lang="ts">
import { FormReceita } from '../../entities/form-receita.entity';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  components: { VueDatePicker },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
      default: () => false,
    },
  },
  data: () => ({ 
    date: null,
    receita: new FormReceita(),
    rules: {
      required: (value: string) => !!value || "Campo obrigatório",
      minLengthName: (value: string) =>
        value.length >= 3 || "Nome deve ter no mínimo 3 caracteres",
    }  
    
  }),
  methods: {   
    closeDialog() {
      this.$emit("update:modelValue", false);
    },

    async salvarReceita() {
      const form: any = this.$refs.form;
      const { valid } = await form.validate();

      if (valid) {
        this.$emit("salvar-receita", this.receita);
      }
    },
  },
};
</script>