<template>
    <div class="component">
        <h1>The User Page</h1>
        <hr>
        <p>Loaded ID: {{ id }}</p>
        <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            default: '123'
        }
    },
    methods: {
        navigateToHome() {
            this.$router.push('/');
            // this.$router.push( {path: '/'} );
        }
    }
}
</script>
