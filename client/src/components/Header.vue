<template>
        <v-app-bar fixed color="cyan" dark>
            <v-toolbar-title class="mr-4" @click="$router.push('/')">
                <span class="home">
                TabTracker
                </span>
            </v-toolbar-title>
                <v-btn text to="/songs">
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
                @click="logout"
                >
                    Log Out
                </v-btn>
        </v-app-bar>

</template>

<script>

export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'HelloWorld'
      })
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
