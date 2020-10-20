<template>
    <div class="books">
        <tip :title="'好书推荐'"></tip>
        <book v-for="book in showBooks" :key="book.id" :book="book" @to-detail="toDetail(book)"></book>
        <page :pageSum="pageSum" v-if="pageSum != 0" @change-page="changePage"></page>
    </div>
</template>

<script>
import tip from '../components/title';
import page from '../components/page';
import book from '../components/book';

export default {
    components: {
        tip,
        page,
        book
    },
    data() {
        return {
            allBooks: [],
            showBooks: [],
            pageSum: 0,
            perPageNum: 3,
        }
    },
    mounted() {
        this.$axios('/books').then(resp => {
            this.allBooks = resp;
            this.pageSum = Math.ceil(this.allBooks.length / this.perPageNum);
            this.showBooks = this.allBooks.slice(0, this.perPageNum);
        })
    },
    methods: {
        changePage(curPage) {
            const start = (curPage - 1) * this.perPageNum;
            let end = start + this.perPageNum;
            if(end > this.allBooks.length){
                end = this.allBooks.length;
            }
            this.showBooks = this.allBooks.slice(start, end)
        },
        toDetail(book){
            this.$store.commit('changeDetailBook', book);
            this.$router.push('/bookDetail');
        }
    }
}
</script>