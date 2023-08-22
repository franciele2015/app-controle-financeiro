<template>
    <h2> Despesas </h2>
    <v-row>
        <adicionar-despesa-dialog-component
            @salvar-despesa="salvarDespesa"
            @close-dialog="closeDialogAdicionarDespesa"
            v-model="showModalAdicionarDespesa"
            :despesaEdicao="despesaEdicao"
            :modoEdicao="modoEdicao">
        </adicionar-despesa-dialog-component>
        <v-col cols="12">
            <despesa-list-component
                @adicionar-nova-despesa="setShowModalAdicionarDespesa"
                @editar-despesa="editarDespesa"
                @deletar-despesa="deletarDespesa"
                :despesa-list="principalDespesa.despesas">
            </despesa-list-component>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import AdicionarDespesaDialogComponent from "./components/dialogs/adicionar-despesa.dialog.vue";
import DespesaListComponent from "./components/despesa-list.component.vue";
import { Despesas } from "./entities/despesas.entity";
import { PrincipalDespesa } from "./entities/principal-despesa.entity";
import getDespesasServices from "./services/get-despesas.services";


export default {
    components: {
        DespesaListComponent,
        AdicionarDespesaDialogComponent
    },

    data: () => ({
        principalDespesa: new PrincipalDespesa(),
        despesaEdicao: new Despesas(),
        showModalAdicionarDespesa: false,
        modoEdicao: false,
    }),
    methods: {        
        async getDespesas() {
            const despesas = await getDespesasServices.execute();
            this.principalDespesa.despesas = despesas;            
        },

        setShowModalAdicionarDespesa() {
            this.showModalAdicionarDespesa = true;
        },

        closeDialogAdicionarDespesa() {
            this.showModalAdicionarDespesa = false;
            this.despesaEdicao = new Despesas();
            this.modoEdicao = false;
        },

        editarDespesa(despesa: Despesas) {
            this.despesaEdicao = Object.assign({}, despesa);
            this.modoEdicao = true;
            this.setShowModalAdicionarDespesa();
        },

        salvarDespesa(despesa: Despesas) {
            this.principalDespesa.salvarDespesa(despesa);
            this.closeDialogAdicionarDespesa();
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