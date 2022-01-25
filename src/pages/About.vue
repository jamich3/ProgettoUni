<template>
  <div id="about">
    <v-container>
      <v-layout wrap>
        <v-sheet
          class="px-10 py-10 mt-7"
          rounded
          width="100%"
          align="left"
          justify="center"
        >
          <span id="titleabout" class="font-weight-bold secondary--text"
            >About this project</span>

          <div id="nottoowhite" class="font-weight-medium mt-7 mb-2">
            I REQUISITI DEL PROGETTO
          </div>
          <p id="nottoowhite" class="text-justify">
            Questo progetto è stato realizzato per passare un esame e laurearsi
            (si spera). <br />
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."
          </p>
        </v-sheet>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss">
#titleabout {
  font-size: 1.8em;
}
#nottoowhite {
  color: rgb(194, 194, 194);
}
</style>