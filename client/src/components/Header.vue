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
                <v-btn text to="/login"
                v-if="!$store.state.isUserLoggedIn"
                >
                    Login
                </v-btn>
                <v-btn text to="/register"
                v-if="!$store.state.isUserLoggedIn"
                >
                    Sign Up
                </v-btn>
                <v-btn
                v-if="$store.state.isUserLoggedIn"
                @click="logOff"
                >
                    Logoff
                </v-btn>
        </v-app-bar>

</template>

<script>

export default {
  methods: {
    async logOff () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
    cursor: pointer;
}
</style>
