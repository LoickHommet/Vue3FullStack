<script setup>


</script>

<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item" style="margin-right: 1em;">
        <RouterLink to="/">Accueil   </RouterLink>
        </li>
        <li class="nav-item">
         <RouterLink >A propo</RouterLink> 
        </li>
        <li class="nav-item">
         <RouterLink>Todolist</RouterLink> 
        </li>

       
      </ul>
  
    <RouterLink   class="btn btn-outline-success">Login</RouterLink> 
    <RouterLink  class="btn btn-outline-success">Inscription</RouterLink> 
  

    </div>
  </div>
</nav>
    </div>
</template>