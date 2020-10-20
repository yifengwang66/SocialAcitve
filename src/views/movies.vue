<template>
  <div class="movies">
    <tip :title="'影视推荐'"></tip>
    <movie v-for="movie in showMovies" :key="movie.id" :movie="movie" @to-detail="toDetail(movie)" />
    <page :pageSum="pageSum" v-if="pageSum != 0" @change-page="changePage"></page>
  </div>
</template>

<script>
import movie from "../components/movie";
import tip from "../components/title";
import page from "../components/page";

export default {
  components: {
    movie,
    tip,
    page,
  },
  data() {
    return {
      allMovies: [],
      showMovies: [],
      perPageNum: 3, // 每页展示多少影视
      pageSum: 0,
    };
  },
  mounted() {
    this.$axios.get("/movies").then((resp) => {
      this.allMovies = resp;
      this.pageSum = Math.ceil(this.allMovies.length / this.perPageNum);
      this.showMovies = this.allMovies.slice(0, this.perPageNum);
    });
  },
  methods: {
    changePage(curPage) {
      const start = (curPage - 1) * this.perPageNum;
      let end = start + this.perPageNum;
      if (end > this.allMovies.length) {
        end = this.allMovies.length;
      }
      this.showMovies = this.allMovies.slice(start, end);
    },
    toDetail(movie) {
      this.$store.commit("changeDetailMovie", movie);
      this.$router.push("/movieDetail");
    },
  },
};
</script>

<style scoped>
</style>