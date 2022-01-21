<template>
  <div id="navigation">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <v-row class="fill-height" no-gutters>
    <v-toolbar app light  color="primary">
      <v-app-bar-nav-icon class="secondary--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-5 text-uppercase">
        <router-link :to="'/'">
          <span class="font-weight-light secondary--text">Star</span>
          <span class="font-weight-black secondary--text">Wars</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

<!-- Field per la ricerca -->
        <v-text-field
          dark
          hide-details
          outlined
          dense
          id="nottoowhite"
          class="secondary--text"
          prepend-inner-icon="mdi-magnify secondary--text"
          v-model="selectedPerson"
          @changed="search"
          @click="select"
          placeholder="Search name..."
          @keyup.enter="name()"
        ></v-text-field>
      </v-toolbar>
    </v-row>

<!-- Navigation drawer here --> 
    <v-navigation-drawer
      dark
      app
      v-model="drawer"
      left
      class="pb-0 primary"
    >
    <v-container ma-0 pa-0>
        <v-toolbar color="primary" flat>
          <span class="font-weight-light secondary--text">STAR DRA</span>
          <span class="font-weight-black secondary--text">WÆR</span>
        </v-toolbar>
    </v-container>

      <v-list>

        <v-list-item v-for="(item, index) in menu" :key="index" :to="item.route" link style="text-decoration:none;">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon style="margin: 8px" color="secondary">{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content class="sidemenu-item">
              <v-list-tile-title id="nottoowhite">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import DataService from "../dataservice";

export default {
  name: "Navigation",
  data() {
    return {
      selectedPerson: null,
      drawer: false,
      menu:         
            [
            { title: "Characters", icon: "mdi-star", route: '/' },
            { title: "Project", icon: "article", route: '/about' }],
      }
    },
    methods: {
    search: function (term) {
      this.options = DataService.searchPerson(term);
    },
    select: function (selected) {
      if (selected === this.$route.params.name) {
        return;
      }
      this.$router.push({ path: "/detail/" + selected });
    },
  },
}
</script>