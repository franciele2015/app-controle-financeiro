<template>
    <v-list max-height="600px" lines="one">
        <h1>Listagem</h1>
        <v-list-item
            v-for="(item, index) in 30"
            :key="index"
            title="Teste"
            subtitle="...."
        >
        <!-- <template v-slot:append>
            <v-btn @click="deletarReceita(item)">Delete</v-btn>
        </template> -->
        </v-list-item>
    </v-list>
    
    
</template>

<script lang="ts">
import { PropType } from "vue";
import { FormReceita } from '../../entities/form-receita.entity';


export default {
    props: {
        dashboardListagem: {
            type: Array as PropType<FormReceita[]>,
            required: true,
            default: () => [],
        },
    },

    data: () => ({}),
    methods: {
        deletarReceita(formReceita: FormReceita) {
        this.$emit("deletar-receita", formReceita);
    },
    },
};
</script>