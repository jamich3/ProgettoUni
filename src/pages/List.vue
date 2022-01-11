<template>
<div>
  <div>
    <v-flex d-flex>
      <v-layout wrap>
        <v-flex md4 v-for="person in people" :key="person.name">
          <v-card :loading="loading" class="mx-auto my-10" max-width="374">
            <v-img
              height="200"
              src="https://images.pexels.com/photos/6320588/pexels-photo-6320588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ></v-img>
            <v-card-title>{{ person.name }}</v-card-title>
            <v-card-text>
              <v-row align="center" class="mx-0">
              <div class="grey--text mb-2">Gender: {{ person.gender }}</div>
              </v-row>
            </v-card-text>

              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
          <router-link :to="'/detail/' + person.id">
            <v-btn text color="primary">
              Dettagli
            </v-btn>
          </router-link>
            </v-card-actions>
          </v-card>
        </v-flex>

<!-- Paginazione -->
      <v-flex>
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="3"
          ></v-pagination>
      </div>
    </v-flex>

      </v-layout>
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
      page: 1,    };  //Page è = sia per la paginazione che per la funzione qui sotto
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
    loadMore: function () {
      this.page += 1;
      this.loading = true;
      DataService.getPeople(this.page).then((data) => {
        this.people = this.people.concat(data.data.results);
        this.loading = false;
      });
    }
  }
  };
</script>