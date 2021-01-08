<template>
        <v-app-bar fixed color="cyan" dark>
            <v-toolbar-title class="mr-4" @click="$router.push('/')">
                <span class="home">
                TabTracker
                </span>
            </v-toolbar-title>
                <v-btn text >
                    Browser
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn text to="/login">
                    Login
                </v-btn>
                <v-btn text to="/register">
                    Sign Up
                </v-btn>
        </v-app-bar>

</template>

<script>

export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
    cursor: pointer;
}
</style>
