<template>
    <v-row>
        <form-login-component
        @realizar-login="realizarLogin">
        </form-login-component>
        
    </v-row>
</template>

<script lang="ts">

import FormLoginComponent from "./components/form-login/form-login.component.vue";
import { FormLogin } from "./entities/form-login.entity";
import { Login } from "./entities/login.entity";

export default {
  components: {
    FormLoginComponent,
  },
  data: () => ({
    login: new Login(),    
  }),
  methods: {
    realizarLogin(formLogin: FormLogin) {
        this.login.realizarLogin(formLogin);
        this.$router.push({name:'dasboard-home'})
    },

  },
}
</script>