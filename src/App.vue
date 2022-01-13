<template>
  <v-app id="app">
    <v-main>
     <Navigation/>
      <router-view>
        <List/>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './pages/Navigation';
import List from './pages/List';

export default {
  name: 'App',
  components: {
    Navigation,
    List,
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
#app {
  background-color: #272724;
}
</style>