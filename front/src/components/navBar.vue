<script setup>
   import { useRouter } from 'vue-router';
   import { useUserStore } from '@/services/userstore';

    const router = useRouter();
    const {user,disconnect} = useUserStore();

    function deconnexion(){
        disconnect();
        router.push({name: "accueil"});
    }
  console.log(user)
</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
 <h3 class="navbar-brand">{{!user ? "Welcome" : `Hey ${user.email}`}}</h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" style="margin-right: 1em;">
        <RouterLink to="/">Accueil   </RouterLink>
        </li>
        <li class="nav-item">
         <RouterLink :to="{name: 'aPropo'}">A propo</RouterLink> 
        </li>
        <li class="nav-item" style="padding-left: 25px;">
         <RouterLink :to="{name: 'todo'}" v-if="user" >  Todolist</RouterLink> 
        </li>
        <li class="nav-item" style="padding-left: 25px;">
         <RouterLink :to="{name: 'hazard'}" >  hazard</RouterLink> 
        </li>

       
      </ul>
  
    <RouterLink v-bind:to="{name: 'login'}"  class="btn btn-outline-success" v-if="!user">Login</RouterLink> 
    <RouterLink v-bind:to="{name: 'register'}" class="btn btn-outline-success"  v-if="!user">Inscription</RouterLink> 
     <button class="btn btn-danger" @click="deconnexion()" v-if="user">Déconnexion</button>
  

    </div>
  </div>
</nav>
    </div>
</template>