<template>
    <h2> Despesas </h2>
    <v-row>
        <v-col cols="8">
            <despesa-list-component
                :despesa-list="principalDespesa.despesas">
            </despesa-list-component>

        </v-col>
    </v-row>
</template>

<script lang="ts">
import DespesaListComponent from "./components/despesa-list.component.vue";
import { PrincipalDespesa } from "./entities/principal-despesa.entity";
import getDespesasServices from "./services/get-despesas.services";


export default {
    components: {
        DespesaListComponent,
    },

    data: () => ({
        principalDespesa: new PrincipalDespesa()
    }),
    methods: {        
        async getDespesas() {
            const despesas = await getDespesasServices.execute();
            this.principalDespesa.despesas = despesas;
            console.log(despesas);
        }
    },
    created() { // executado antes de montar o html
        this.getDespesas();
    }
};
</script>