<template>
    <v-list max-height="600px" lines="one">
        <h1>Listagem</h1>
        <v-list-item
            v-for="(item, index) in receitaList"
            :key="index"
            :title="item.nome"
            :subtitle="item.descricao"
        >
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
    
    },
};
</script>