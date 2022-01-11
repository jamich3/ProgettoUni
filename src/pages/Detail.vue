<template>
  <div class="md-layout" v-if="person">
   <p>Title</p>
  </div>
</template>

<script>
import DataService from "../dataservice";

export default {
  data: function () {
    return {
      person: null,
      stats: null,
    };
  },
  methods: {
    load: function () {
      DataService.getPerson(this.$route.params.name).then((data) => {
        this.person = data.data;
      });
      DataService.getStats(this.$route.params.name).then((stats) => {
        this.stats = stats;
      });
    },
    vote: function (value) {
      if (!this.stats.userVote) {
        return;
      }
      DataService.vote(this.person.name, value).then(() => {
        this.load();
      });
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