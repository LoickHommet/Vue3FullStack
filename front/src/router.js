import { createWebHistory, createRouter } from "vue-router";

import accueil from "@/components/accueil.vue"
import aPropo from "@/components/aPropo.vue"
import login from "@/components/login.vue"
import register from "@/components/register.vue"
import todo from "@/components/todo.vue"
import hazard from "@/components/hazard.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "accueil",
            component: accueil
        },
        {
            path: "/aPropo",
            name: "aPropo",
            component: aPropo
        },
        {
            path: "/todo",
            name: "todo",
            component: todo
        },
        {
            path: "/login",
            name: "login",
            component: login
        },
        {
            path: "/register",
            name: "register",
            component: register
        },
        {
            path: "/hazard",
            name: "hazard",
            component: hazard
        }
    
    ]
})


export default router