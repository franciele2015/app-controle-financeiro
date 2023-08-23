<template>
    <v-list max-height="100%" lines="one">
        <h1>Listagem</h1>

        <v-col cols="6">
            <v-btn @click="adicionarNovaReceita" class="btn-acoes">Adicionar</v-btn>        
        </v-col>

        <v-list-item class="listConteudo"
            v-for="(item, index) in receitaList"
            :key="index"
            :title="item.nome"
            :subtitle="item.descricao"
        >
            <p><b>Data de entrada</b>: {{ item.dataDeEntrada }}</p>
            <p><b>Valor</b>: R$ {{ item.valor }}</p>

            <template v-slot:append>
                <v-btn @click="editarReceita(item)" class="btn-acoes">Editar</v-btn>
                <v-btn @click="deletarReceita(item)" class="btn-acoes">Deletar</v-btn>
            </template>

        </v-list-item>
    </v-list>
    
    
</template>

<script lang="ts">
import { PropType } from "vue";
import { Receitas } from "../entities/receitas.entity";


export default {
    props: {
        receitaList: {
            type: Array as PropType<Receitas[]>,
            required: true,
            default: () => [],
        }
    },

    data: () => ({}),
    methods: { 
        adicionarNovaReceita() {
            this.$emit("adicionar-nova-receita");
        },
        editarReceita(receita: Receitas) {
            this.$emit("editar-receita", receita);
        },

        deletarReceita(receita: Receitas) {
            this.$emit("deletar-receita", receita);
        },       
    
    },
};
</script>