<template>

<v-container>
  <v-row>
    <v-col md="8"
        offset-md="2">
  <panel title="Login">
    <v-text-field
      label="Email"
      v-model="email"
    ></v-text-field>
    <br>
    <v-text-field
      label="Password"
      type="password"
      v-model="password"
    ></v-text-field>
    <br>
    <div class="error" v-html="error" />
    <br>
    <v-btn
    class="cyan"
    dark
    @click="login"
    >Login</v-btn>
  </panel>
    </v-col>
  </v-row>
</v-container>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
