<template>
    <div>
        <table width="300px" border="1" class="table" bgcolor="#d7d7d7">
            <caption>{{message}}</caption>
            <tr>
                <th>会员级别</th>
                <th>信用额度</th>
            </tr>
            <tr>
                <td>金卡会员</td>
                <td>200</td>
            </tr>
            <tr>
                <td>钻石会员</td>
                <td>500</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: "this is from Vue"
            };
        }
    }
</script>

<style lang="scss">

</style>