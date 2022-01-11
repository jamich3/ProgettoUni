<template>
<div>
<v-app wrap>
        <v-flex md4 align="center" color="primary">
          <v-card class="mx-auto my-12" max-width="400">
            <v-img
              height="220px"
              src="https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            ></v-img>
            <v-card-title>Oh no, you are in the wrong galaxy! :(</v-card-title>
            <v-card-text>

              <div class="mx-auto text-subtitle-1">404 error</div>
            </v-card-text>
           <v-card-actions>

          <router-link :to="'/'">

    <v-btn
      block
      color="primary"
    >
      <v-icon left>
        mdi-home
      </v-icon>
      Back home
    </v-btn>
          </router-link>
 
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-app>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  created: function () {
    document.body.style.backgroundColor = "orange";
  },
  destroyed: function () {
    document.body.style.backgroundColor = null;
  },
};
</script>