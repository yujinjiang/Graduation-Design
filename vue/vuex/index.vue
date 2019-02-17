<template>
    <div>
        {{username}}
    </div>
</template>

<script>
    import store from '../../stores/vuex';
    import {
        mapState
    } from 'vuex';

    export default {
        store,
        provide: {
            age: 24
        },
        computed: {
            ...mapState(['username'])
        },
        mounted() {
            console.log(this.$store, this._provided);
        }
    }
</script>

<style lang="scss">

</style>