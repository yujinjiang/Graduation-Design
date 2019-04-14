<template>
    <section class="view">

        <Card>
            <p slot="title">
                <Icon type="ios-basket" />
                订单详情
            </p>
            <a href="#" slot="extra">
                <Icon type="md-bookmark" />
            </a>
            <ul class="view-content-item-list">
                <li class="view-content-item-list-inner">
                    <img src="https://img.alicdn.com/imgextra/i4/98055677/O1CN01K4fKfq1ro6yKwoMm1_!!0-saturn_solar.jpg_220x220.jpg_.webp" alt="">
                </li>
                <ul class="view-content-item-list-inner">

                    <li>
                        价格：10
                    </li>
                    <li>
                        姓名：于锦江
                    </li>
                    <li>
                        收货地址：北京市海淀区 北分厂家属区 16号楼三单元401
                    </li>
                    <li>
                        联系电话：17611499307
                    </li>
                    <Button type="primary">确认</Button>
                    <Button type="primary">取消</Button>
                </ul>
            </ul>
        </Card>
    </section>

</template>
<script>
    export default {
        data() {
            return {
                value1: '1'
            }
        }
    }
</script>

<style lang="scss">
    body {
        height: 100%;
        background-color: #de335e !important;
        overflow: scroll;
    }

    $content-width: 1200px;
    .view {
        background-color: #fff;
        margin: 30px auto;
        padding: 30px;
        width: $content-width;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 0 10px #333;

        &-content {
            margin-top: 30px;
            overflow: scroll;

            &-item {
                margin-bottom: 30px;
            }

            &-item-list {
                font-size: 0;

                &-inner {
                    display: inline-block;
                    vertical-align: top;

                    &:last-child {
                        margin-left: 30px;
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>