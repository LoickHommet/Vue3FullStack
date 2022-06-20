<script setup>
import { useUserStore } from '@/services/userstore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const {connect, user} = useUserStore();
const router = useRouter();
const email = ref('');
const password = ref('');

async function connexion(){
    const response = await connect(email.value, password.value);
    response && (router.push({name: "accueil"}));
}
</script>

<template>
<div style="padding: 2em;">
    <h1>Login</h1>
    <form @submit.prevent="connexion()">
        <div class="form-group mb-3">
            <label for="email">Email</label>
            <input type="text" v-model="email" class="form-control" id="email" placeholder="Enter name">
        </div>
        <div class="form-group mb-3">
            <label for="password">Password</label>
            <input type="password" v-model="password" class="form-control" id="password" placeholder="Enter name">
        </div>
        <button type="submit" class="btn btn-success">Connexion</button>
    </form>
</div>
</template>

<style scoped>

</style>