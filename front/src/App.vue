<script setup>
import navBar from "@/components/navBar.vue"
import {ref} from "vue"
</script>

<template>
<div>
<navBar></navBar>
<RouterView></RouterView>

</div>

</template>

<style >
@import 'bootstrap/dist/css/bootstrap.min.css';
</style>
