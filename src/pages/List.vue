<template>
  <div>
    <div>
      <v-flex d-flex>
        <v-layout wrap>
          <v-flex md4 v-for="person in people" :key="person.name">
            <v-card dark :loading="loading" class="mx-auto my-9" max-width="374">
              <v-img
                height="200"
                src="https://images.pexels.com/photos/6320588/pexels-photo-6320588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              ></v-img>
              <v-card-title id="nottoowhite">{{ person.name }}</v-card-title>
                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <div class="grey--text mb-2" >Gender: {{ person.gender }}</div>
                  </v-row>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>
            
                <v-card-actions>
                  <router-link :to="'/detail/' + person.id">
                    <v-btn depressed outlined color="secondary" class="primary--text">Dettagli</v-btn>
                  </router-link>
                </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

      <!-- Paginazione -->
          <v-flex style="margin: 45px">
            <div class="text-center">
              <v-pagination
                class="nottoowhite"
                v-model="page"
                :length="8"
                @input="handlePageChange"
              ></v-pagination>
            </div>
          </v-flex>

    </div>
  </div>
</template>


<script>
import DataService from "../dataservice";

export default {
  data: function () {
    return {
      people: null,
      loading: false,
      page: "",
      };  //Se si cambia questo valore cambia la pagina/ lista di personaggi
  },
  created:
    function () {
      DataService.getPeople(this.page).then((data) => {
        let people = data.data.results
        people.map( people => {
          let urlPicies= people.url.split('/');
          return people.id = urlPicies[ urlPicies.length -2];
        })
        this.people = people;
      });
    },
  methods: {
    handlePageChange(pvalue) {
      this.page = pvalue;
      console.log(this.page)
    },
  },
};
</script>