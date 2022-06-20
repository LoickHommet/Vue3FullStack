<script setup>

import {ref} from "vue"
import axios from "axios"
    import { useRouter } from 'vue-router';
    
    const router = useRouter();


function signup( mail, password){
 if(mail, password){
   axios.post("http://localhost:3001/signup", {
        email: mail,
        password: password
   })
   router.push({name: "login"});
 }
}

</script>

<template>
<div style="padding: 2em;">
    <p> {{user}} </p>
    <form @submit.prevent="signup( mail, password)">
          <!-- <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label ">Identifiant</label>
        <input type="text" v-model="identifiant" class="form-control" id="exampleInputPassword1" />
      </div> -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          v-model="mail"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
          <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Password</label>
      <input type="password" v-model="password" name="" id="">
    </div>
     
      
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

</template>

<style scoped>

</style>