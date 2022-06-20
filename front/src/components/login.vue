<script setup>

</script>

<template>
<div style="padding: 2em;">
    <h1>Login</h1>
    <form @submit.prevent="">
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