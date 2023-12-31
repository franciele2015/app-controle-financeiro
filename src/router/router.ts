import { createRouter, createWebHistory } from "vue-router";
import { LoginRouter } from "../modules/login/router";
import { DashboardRouter } from "../modules/dashboard/router";
import { ReceitaRouter } from "../modules/gestao-receitas/router";
import { DespesaRouter } from "../modules/gestao-despesas/router";

export const router = createRouter({
    history: createWebHistory(), 
    routes: [...LoginRouter, ...DashboardRouter, ...ReceitaRouter, ...DespesaRouter]
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token');
    const publicRoutesName = ['login'];
    const isPublicRoute = publicRoutesName.includes(to?.name);
    if (isPublicRoute) {
      next();
    } else if (!isAuthenticated) {
      next({ name: 'login' });
    } else {
      next();
    }
  });
  
  export default router;