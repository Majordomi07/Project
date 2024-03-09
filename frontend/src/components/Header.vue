<template>
  <nav class="bg-teal-400">
    <div class="container mx-auto flex justify-between p-4">
      <div class="flex-1 justify-center">
        <RouterLink to="/" class="text-xl font-bold">Autók</RouterLink>
      </div>
      <div class="flex-1 flex justify-between flex-col md:flex-row">
        <RouterLink to="admin" class="text-right md:text-left">Admin</RouterLink>
        <RouterLink to="login" class="text-right md:text-left">Bejelentkezés</RouterLink>
        <RouterLink to="register" class="text-right md:text-left">Regisztráció</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
