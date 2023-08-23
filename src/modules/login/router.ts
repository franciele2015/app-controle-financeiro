import LoginComponent from "./Login.vue";

export const LoginRouter= [{
    path: '/',
    name: 'login-home',
    component: LoginComponent,
    children: [
        {
          path: 'login',
          name: 'login',
          component: LoginComponent,
        },
      ],
}]