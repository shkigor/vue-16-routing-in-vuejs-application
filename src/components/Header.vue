<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
    <router-link to="/user/1" tag="li" active-class="active"><a>User 1</a></router-link>
    <router-link to="/user/2" tag="li" active-class="active"><a>User 2</a></router-link>
  </ul>
</template>

<script>
    export default {
        name: "headerC" // VM1160:34 [Vue warn]: Do not use built-in or reserved HTML elements as component id: header
    }
</script>

<style scoped>

</style>
