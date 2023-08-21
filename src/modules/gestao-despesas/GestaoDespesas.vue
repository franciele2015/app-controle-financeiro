<template>
    <h2> Despesas </h2>
    <v-row>
        <v-col cols="12">
            <despesa-list-component
                @deletar-despesa="deletarDespesa"
                :despesa-list="principalDespesa.despesas">
            </despesa-list-component>

        </v-col>
    </v-row>
</template>

<script lang="ts">
import DespesaListComponent from "./components/despesa-list.component.vue";
import { Despesas } from "./entities/despesas.entity";
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
        },

        adicionarDespesa(despesa: Despesas) {
            this.principalDespesa.adicionarDespesa(despesa.id);
        },

        deletarDespesa(despesa: Despesas) {
            this.principalDespesa.deletarDespesa(despesa.id);
        }
    },
    created() { // executado antes de montar o html
        this.getDespesas();
    }
};
</script>