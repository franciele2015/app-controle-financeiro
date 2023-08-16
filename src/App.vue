<template>
  <router-view></router-view>  
</template>

<script lang="ts">

import LoginApp  from './modules/login/Login.vue';
import Dashboard  from './modules/dashboard/Dashboard.vue';

export default {
  components: {
    LoginApp,
    Dashboard
  },
  data: () => ({}),
};
</script>


