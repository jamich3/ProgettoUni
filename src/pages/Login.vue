<template>
  <div id="app">
    <v-app
      :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }"
      :dark="darkTheme"
      id="inspire"
    >
      <v-container>
        <v-layout wrap>
          <v-flex sm12 md6 offset-md3>
            <v-card elevation="4" dark light tag="section">
              <v-card-title>
                <v-layout align-center justify-space-between>
                  <p class="headline ma-3">LOGIN</p>
                </v-layout>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <p>Sign in with your username:</p>
                <v-form>
                  <v-text-field
                    dark
                    hide-details
                    outlined
                    dense
                    class="secondary--text"
                    placeholder="Username"
                    type="text"
                    v-model="username"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!username"
                  class="md-raised md-primary"
                  @click="login"
                  color="secondary primary--text"
                  :large="$vuetify.breakpoint.smAndUp"
                >
                  Login
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import DataService from "../dataservice";

export default {
  data: function () {
    return {
      username: "",
    };
  },
  methods: {
    login: function () {
      DataService.login(this.username);
      this.$router.push("/");
      console.log(this.username);
    },
  },
};
</script>

<style scoped>
</style>
