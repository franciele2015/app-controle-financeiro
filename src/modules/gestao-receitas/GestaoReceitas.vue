<template>
    <h2> Receitas </h2>
    <v-row>
        <v-col cols="12">
            <receita-list-component
                :receita-list="principalReceita.receitas">
            </receita-list-component>

        </v-col>
    </v-row>
</template>

<script lang="ts">
import ReceitaListComponent from "./components/receita-list.component.vue";
import { PrincipalReceita } from "./entities/principal-receita.entity";
import getReceitasServices from "./services/get-receitas.services";


export default {
    components: {
        ReceitaListComponent,
    },

    data: () => ({
        principalReceita: new PrincipalReceita()
    }),
    methods: {        
        async getReceitas() {
            const receitas = await getReceitasServices.execute();
            this.principalReceita.receitas = receitas;
            console.log(receitas);
        }
    },
    created() { // executado antes de montar o html
        this.getReceitas();
    }
};
</script>