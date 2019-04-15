<template>
    <section class="view">
        <main class="view-content">
            <div class="view-content-item">
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
                                介绍：【满49减10】城南旧事正版包邮林海音/中小学生青少年课外书/精美彩插/语文新课标丛书/123456年级课外
                            </li>
                            <li>
                                数目：2
                            </li>
                            <li class="view-list-icon">
                                <Icon type="md-add-circle" />
                                <Icon type="ios-remove-circle" />
                            </li>
                        </ul>
                    </ul>
                </Card>
            </div>
            <div class="view-content-item">
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
                            <img src="https://img.alicdn.com/imgextra/i2/28851861/O1CN01NoM9eG1PcNaVs60id_!!0-saturn_solar.jpg_220x220.jpg_.webp">
                        </li>
                        <ul class="view-content-item-list-inner">
                            <li>
                                价格：30
                            </li>
                            <li>
                                介绍：MYSQL从入门到项目开发
                            </li>
                            <li>
                                数目：1
                            </li>
                            <li class="view-list-icon">
                                <Icon type="md-add-circle" />
                                <Icon type="ios-remove-circle" />
                            </li>
                        </ul>
                    </ul>
                </Card>
            </div>
        </main>
        <Button type="primary">确认订单</Button>
        <Button type="primary">取消</Button>
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

        &-list-icon {
            font-size: 20px;
        }
    }
</style>