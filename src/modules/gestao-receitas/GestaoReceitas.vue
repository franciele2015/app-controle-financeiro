<template>
    <h2> Receitas </h2>
    <v-row>
        <adicionar-receita-dialog-component
            @salvar-receita="salvarReceita"
            @close-dialog="closeDialogAdicionarReceita"
            v-model="showModalAdicionarReceita"
            :receitaEdicao="receitaEdicao"
            :modoEdicao="modoEdicao">
        </adicionar-receita-dialog-component>
        <v-col cols="12">
            <receita-list-component
                @adicionar-nova-receita="setShowModalAdicionarReceita"
                @editar-receita="editarReceita"                 
                @deletar-receita="deletarReceita"
                :receita-list="principalReceita.receitas">
            </receita-list-component>

        </v-col>
    </v-row>
</template>

<script lang="ts">
import AdicionarReceitaDialogComponent from "./components/dialogs/adicionar-receita.dialog.vue";
import ReceitaListComponent from "./components/receita-list.component.vue";
import { PrincipalReceita } from "./entities/principal-receita.entity";
import { Receitas } from "./entities/receitas.entity";
import getReceitasServices from "./services/get-receitas.services";


export default {
    components: {
        ReceitaListComponent,
        AdicionarReceitaDialogComponent
    },

    data: () => ({
        principalReceita: new PrincipalReceita(),
        receitaEdicao: new Receitas(),
        showModalAdicionarReceita: false,
        modoEdicao: false,
    }),
    methods: {        
        async getReceitas() {
            const receitas = await getReceitasServices.execute();
            this.principalReceita.receitas = receitas;            
        },

        setShowModalAdicionarReceita() {
            this.showModalAdicionarReceita = true;
        },

        closeDialogAdicionarReceita() {
            this.showModalAdicionarReceita = false;
            this.receitaEdicao = new Receitas();
            this.modoEdicao = false;
        },

        editarReceita(receita: Receitas) {
            this.receitaEdicao = Object.assign({}, receita);
            this.modoEdicao = true;
            this.setShowModalAdicionarReceita();
        },

        salvarReceita(receita: Receitas) {
            this.principalReceita.salvarReceita(receita);
            this.closeDialogAdicionarReceita();
        },

        deletarReceita(receita: Receitas) {
            this.principalReceita.deletarReceita(receita.id);
        }
    },
    created() { // executado antes de montar o html
        this.getReceitas();
    }
};
</script>