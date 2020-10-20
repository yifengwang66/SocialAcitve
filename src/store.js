import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    state: {
        detailMovie: {},
        detailBook: {},
    },
    mutations: {
        changeDetailMovie(state, movie) {
            state.detailMovie = movie;
        },
        changeDetailBook(state, book) {
            state.detailBook = book;
        }
    }
});

export default store;