<template>
    <v-list max-height="700px" lines="two">
        <h1>Listagem</h1>
        <v-list-item class="listConteudo"
            v-for="(item, index) in despesaList"
            :key="index"
            :title="item.nome"
            :subtitle="item.descricao"
        >
            <p><b>Categoria</b>: {{ item.categoria }}</p>
            <p><b>Valor</b>: R$ {{ item.valor }}</p>

            <template v-slot:append>
                <v-btn @click="editarDespesa(item)" class="btn-acoes">Editar</v-btn>
                <v-btn @click="deletarDespesa(item)" class="btn-acoes">Deletar</v-btn>
            </template>
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
        editarDespesa(despesa: Despesas) {
            this.$emit("editar-despesa", despesa);
        },

        deletarDespesa(despesa: Despesas) {
            this.$emit("deletar-despesa", despesa);
        },
    },
};
</script>

<style>

p {
    color: #747bff;
}

h3 {
    color: #5f37c7;
}

.btn-acoes {
    background-color: #747bff;
    color: aliceblue;
    margin-right: 0.5rem;
}

.listConteudo .v-list-item-title {
    color: #3b3b3b;
    font-weight: 500;
}

</style>