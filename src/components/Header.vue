<template>
  <ul class="nav nav-pills">
    <li role="presentation"><router-link to="/">Home</router-link></li>
    <li role="presentation"><router-link to="/user">User</router-link></li>
  </ul>
</template>

<script>
    export default {
        name: "headerC" // VM1160:34 [Vue warn]: Do not use built-in or reserved HTML elements as component id: header
    }
</script>

<style scoped>

</style>
