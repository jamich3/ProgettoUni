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
            >About this project</span
          >

          <p id="nottoowhite" class="text-justify mb-12 mt-4">
            Questo progetto è stato realizzato per l'esame di Informatica ed
            elementi di programmazione II. <br />
          </p>

          <div id="nottoowhite" class="font-weight-bold mb-2"
            >Linguaggi:</div
          >

          <v-btn id="nottoowhite" class="ma-2">
            <v-icon left dark color="#20A4F3"> circle </v-icon>
            75.5% Vue
          </v-btn>

          <v-btn id="nottoowhite" color="light-pink" class="ma-2">
            <v-icon left dark color="#00A676"> circle </v-icon>
            20.0% JavaScript
          </v-btn>

          <v-btn id="nottoowhite" class="ma-2">
            <v-icon left dark color="#FF9F1C"> circle </v-icon>
            4.4% HTML
          </v-btn>
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
  font-size: 1.9em;
}
#nottoowhite {
  color: rgb(194, 194, 194);
}
</style>