<template>
    <div class="info">
        <member v-for="member in members" :key=member.id :member="member"></member>
    </div>
</template>

<script>
import member from '../components/member'

export default {
    data() {
        return {
            members: [],
        }
    },
    components: {
        member,
    },
    mounted() {
        this.$axios.get('/members').then(resp => {
            this.members = resp;
        })
    }
}
</script>

<style scoped>

</style>