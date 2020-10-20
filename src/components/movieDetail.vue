<template>
    <div class="movieDetail">
        <tip :title="'影视详情'" />
        <movie :movie="$store.state.detailMovie" :detail="true" />
        <tip :title="'优质影评'" class="com"/>
        <comment :comment="$store.state.detailMovie.comment"></comment>
    </div>
</template>

<script>
import movie from './movie';
import tip from './title';
import comment from './comment';

export default {
    components: {
        movie,
        tip,
        comment,
    }
}
</script>

<style scoped>
.movieDetail .com{
    margin-top: 80px;
}
</style>