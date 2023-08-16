import { createRouter, createWebHistory } from "vue-router";
import { LoginRouter } from "../modules/login/router";
import { DashboardRouter } from "../modules/dashboard/router";

export const router = createRouter({
    history: createWebHistory(), 
    routes: [...LoginRouter, ...DashboardRouter]
})