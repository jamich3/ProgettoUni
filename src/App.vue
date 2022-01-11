<template>
  <v-app>
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