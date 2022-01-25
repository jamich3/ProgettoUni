<template>
  <div id="error_page">
    <v-container wrap>
      <v-row align="center" justify="center">
        <v-col>
          <v-sheet
            class="px-4 py-4"
            dark
            elevation="1"
            height="500"
            rounded
            width="100%"
            align="center"
            justify="center"
          >
            <iframe
              src="https://giphy.com/embed/gqztW5MLVNnFe"
              width="100%"
              frameBorder="0"
              class="px-4 pt-4 py-10"
              allowFullScreen
            ></iframe>
            <div id="error">404 ERROR</div>
            <div id="droids" class="px-4 pb-15">
              Non sono questi i droidi che state cercando :(
            </div>

            <router-link :to="'/'">
              <div class="px-12">
                <v-btn block color="primary">
                  <v-icon left>mdi-home</v-icon>Back home
                </v-btn>
              </div>
            </router-link>
            
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss">
#error {
  font-weight: 700;
  font-size: 38px;
}
#droids {
  font-weight: 400;
  font-size: 16px;
  color: rgb(114, 114, 114);
}
</style>