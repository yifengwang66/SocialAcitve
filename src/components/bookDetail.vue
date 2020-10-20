<template>
    <div class="bookDetail">
        <tip :title="'书籍详情'" />
        <book :book="$store.state.detailBook" :detail="true" />
    </div>
</template>

<script>
import tip from "./title";
import book from "./book"

export default {
    components: {
        tip,
        book
    },
}
</script>

<style scoped>

</style>