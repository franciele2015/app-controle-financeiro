<template>
    <v-list max-height="600px" lines="one">
        <h1>Listagem</h1>
        <v-list-item
            v-for="(item, index) in despesaList"
            :key="index"
            :title="item.nome"
            :subtitle="item.descricao"
        >
        </v-list-item>
    </v-list>
    
    
</template>

<script lang="ts">
import { PropType } from "vue";
import { Despesas } from "../entities/despesas.entity";


export default {
    props: {
        despesaList: {
            type: Array as PropType<Despesas[]>,
            required: true,
            default: () => [],
        }
    },

    data: () => ({}),
    methods: {        
    
    },
};
</script>