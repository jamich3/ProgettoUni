<template>
  <div id="navigation">
    <v-row class="fill-height" no-gutters>
      <v-toolbar light color="primary">
        <v-app-bar-nav-icon
          class="secondary--text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="mr-5 text-uppercase">
          <router-link :to="'/'">
            <span class="font-weight-light secondary--text">Star</span>
            <span class="font-weight-black secondary--text">Wars</span>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-row>

<!-- Navigation drawer, chiuso di default -->
    <v-navigation-drawer dark app v-model="drawer" left class="pb-0 primary">
      <v-container ma-0 pa-0>
        <v-toolbar color="primary" flat>
          <span class="font-weight-light secondary--text">STAR DRA</span>
          <span class="font-weight-black secondary--text">WÆR</span>
        </v-toolbar>
      </v-container>

      <v-list>
        <v-list-item
          v-for="(item, index) in menu"
          :key="index"
          :to="item.route"
          link
          style="text-decoration: none"
        >
<!-- ICONE DEL Navigation drawer -->
          <v-list-item>
            <v-list-item-action>
              <v-icon color="secondary">{{ item.icon }}</v-icon>
            </v-list-item-action>
<!-- VOCI DEL Navigation drawer -->
            <v-list-item-content class="sidemenu-item">
              <v-list-item-title id="nottoowhite">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      drawer: false,
      menu: [
        { title: "Characters", icon: "mdi-star", route: "/" },
        { title: "Project", icon: "article", route: "/about" },
      ],
    };
  },
};
</script>