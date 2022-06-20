<script setup>

import {ref} from "vue"
import axios from "axios"

  const listObject = axios.get("http://localhost:3001/task", {

   })



</script>

<template>
<div>
  <h1>Todo</h1>
<ul>
        <li v-for="obj in listObject" :key="obj.id">
            <p>{{obj.description}}</p>
        </li>
    </ul>
</div>
</template>

<style scoped>

</style>