<template>
  <div id="navigation">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <v-row class="fill-height" no-gutters>
    <v-toolbar app light clipped-left color="primary">
      <v-app-bar-nav-icon class="white--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-5 text-uppercase">
        <router-link :to="'/'">
          <span class="font-weight-light white--text">Star</span>
          <span class="font-weight-black white--text">Wars</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
          <v-text-field
          dark
          hide-details
          solo-inverted
          flat
          prepend-inner-icon="mdi-magnify white--text"
          label="Search name..."
          v-model="query"
          @keyup.enter="name()"
          ></v-text-field>
    </v-toolbar>
    </v-row>

<!-- Navigation drawr here --> 

    <v-navigation-drawer
      dark
      app
      v-model="drawer"
      left
      class="pb-0"
    >
    <v-container ma-0 pa-0>
        <v-toolbar flat>
          <span class="font-weight-light white--text">STAR</span>
          <span class="font-weight-black white--text">WARS</span>
        </v-toolbar>
    </v-container>

<!-- Voci del menu, ma cliccandoci sopra la pagina non cambia =( -->

      <v-list>
        <v-list-item v-for="(item, index) in drawerItems" :key="index" link>
          <v-list-tile
            v-for="(item, index) in item.tiles"
            :key="index"
            :to="item.route"
            router
          >

            <v-list-tile-action>
              <v-icon style="margin: 8px" color="white">{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content class="sidemenu-item">
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>

          </v-list-tile>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
<!-- There was the PROBLEM router-view was here =( -->
  </div>
</template>

<script>

export default {
  name: "Navigation",
  data() {
    return {
      drawer: false,
      drawerItems: {
        // voci del menù
        firstChunk: {
          tiles: [
            { title: "SW Characters", icon: "mdi-star", route: '/' },
          ],
        },
        secondChunk: {
          tiles: [
            { title: "Project", icon: "article", route: '/about' }],
        },
      },
    };
  },
  }
</script>