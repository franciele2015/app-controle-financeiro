<template> 
    <v-sheet width="600" class="mx-auto">

        <p v-if="errors.length">
            <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
            <ul>
            <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>

        <v-row class="text-center">
            <v-col cols="12" class="titulo-login">
                <h2>Login</h2>
            </v-col>
        </v-row>

        <v-form ref="form">
        <v-text-field
            v-model="formLogin.email"
            :rules="[rules.required, validEmail]"
            label="E-mail"
        ></v-text-field>

        <v-text-field
            v-model="formLogin.senha"
            :append-icon="show1 ? 'visibility' : 'visibility_off'"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
            label="Senha"
        ></v-text-field>
        <v-btn @click="realizarLogin" block class="mt-2" color="info">Logar</v-btn>        
        </v-form>
    </v-sheet>

</template>

<script lang="ts">
import { FormLogin } from "../../entities/form-login.entity";
export default {
    components: {},
    
    data: () => ({ 
        show1: false,
        errors: [],       
        formLogin: new FormLogin(),                
    }),
    computed: {
        rules() {   
            return {         
                required: (value: string) => !!value || "Campo obrigatório",
                email: this.validEmail,
                minLengthEmail: (value: string) =>
                value.length >= 3 || "Email deve ter no mínimo 3 caracteres",
        
            }
        }
    },
    methods: {
        async realizarLogin() {
            const form: any = this.$refs.form;
            const { valid } = await form.validate();

            if (valid) {
                if (!this.validEmail(this.formLogin.email)) {
                this.errors.push("Email Invalido! Por favor informe uma e-mail valido");
                   return ;
                }
                this.errors = [];
                this.$emit("realizar-login", this.formLogin);
            }
        },

        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email) || "Email  invalido";
        }

    },

};
</script>

<style>

.titulo-login {
    padding: 1.2rem;
}

.v-input__icon--append .v-icon { 
    color: purple;
}

</style>