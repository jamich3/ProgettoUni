<template >
  <div id="about" v-if="person">
    <v-container>
      <v-layout wrap>
        <v-sheet
          class="px-10 py-8 mt-7"
          rounded
          width="100%"
          align="left"
          justify="center"
        >
          <div id="nottoowhite" class="font-weight-medium mt-7 mb-0">Name:</div>
          <span id="titleabout" class="font-weight-bold white--text">{{
            person.name
          }}</span>
          <div class="px-4 py-5 mt-7">
            <v-simple-table dark>
              <thead>
                <tr>
                  <th class="text-left">Characteristics</th>
                  <th class="text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Birthday</td>
                  <td>{{ person.birth_year }}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{{ person.gender }}</td>
                </tr>
                <tr>
                  <td>Eye color</td>
                  <td>{{ person.eye_color }}</td>
                </tr>
                <tr>
                  <td>Hair color</td>
                  <td>{{ person.hair_color }}</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>{{ person.height }} cm</td>
                </tr>
                <tr>
                  <td>Mass</td>
                  <td>{{ person.mass }} kg</td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
          <h2 align="center">Media voti: {{ stats.average }}</h2>
          <v-rating
            align="center"
            medium
            dense
            hover
            clearable
            color="secondary"
            background-color="secondary"
            class="ml-1"
            v-model="rating"
            @input="change"
          ></v-rating>
        </v-sheet>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import DataService from "../dataservice";

export default {
  data: function () {
    return {
      person: null,
      id: null,
      stats: { average: null, totalCount: null, userVote: null,  },
      rating: null,
    };
  },
  methods: {
    load: function () {
     DataService.getPerson(this.$route.params.id).then((data) => {
       this.person = data.data;
     });
      DataService.getStats(this.$route.params.id).then((stats) => {
        this.stats = stats;
      });
    },
    change: function() {
      DataService.vote(this.$route.params.id, this.rating);
      console.log("ciao")
    },
    loadVote: function () {
      return this.stats;
    },
  },
  created: function () {
    this.load();
  },
  watch: {
    $route: function () {
      this.load();
    },
  },
};
</script>