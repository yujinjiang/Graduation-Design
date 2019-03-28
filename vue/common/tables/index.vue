<template>
    <table>
        <thead>
        <tr>
            <th v-for="(headItem, index) in tableData[0]" :key="index">
                {{headItem}}
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(bodyItem, index) in tableData.slice(1)" :key="index">
            <td v-for="cell in bodyItem" :key="cell.day">
                {{cell.day}}
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: {
            tableData: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style lang="scss">

</style>