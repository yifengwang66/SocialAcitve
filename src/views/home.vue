<template>
    <div class="home">
        <div class="partOne">
            <banner class='partOneBanner' :options="bannerOne"/>
            <list class="list" :list="listOne"></list>
        </div>
        <div class="partTwo">
            <list class="list" :list="listTwo"></list>
            <banner class="partTwoBanner" :options="bannerTwo"/>
        </div>
    </div>
</template>

<script>
import banner from '../components/banner';
import list from '../components/list'
import bannerOne from '../assets/bannerOne';
import bannerTwo from '../assets/bannerTwo';
import listOne from '../assets/listOne';
import listTwo from '../assets/listTwo';

export default {
    data () {
        return {
            bannerOne,
            bannerTwo,
            listOne,
            listTwo
        }
    },
    components: {
        banner,
        list
    }
}
</script>

<style scoped>
.partOne{
    margin-bottom: 30px;
}
.partTwo,
.partOne{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.partOneBanner{
    margin-right: 40px;
    flex-shrink: 0;
}
.partTwoBanner{
    margin-left: 40px;
    flex-shrink: 0;
}
.partOne .list{
    flex-grow: 1;
    flex-shrink: 1;
    height: 280px;
    max-width: 425px;
}
.partTwo .list{
    flex-grow: 1;
    height: 200px;
}
</style>