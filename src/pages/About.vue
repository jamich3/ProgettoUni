<template>
  <div id="about">
    <v-container fill-height fluid>
      <v-row align="center"
        justify="center">
        <v-col>
        <v-sheet
          class="px-4 pt-4 pb-3"
          color="white"
          elevation="1"
          height="500"
          rounded
          width="100%"
          align="center"
          justify="center"
        >
          <span id="titleabout" class="font-weight-light">UNI</span>
          <span id="titleabout" class="font-weight-black">PROJECT</span>
          <v-divider class="my-5"></v-divider>
            <p class="text-justify">
            Questo progetto è stato realizzato per passare un esame e laurearsi (si spera). <br/>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>
      </v-sheet>
      </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style lang="scss">
#titleabout {
  font-size: 1.8em;
  color: rgb(48, 48, 48);
}
</style>