<template>
    <section class="sign-in">
        <Collapse v-model="value1">
            <Panel name="1">
                我的订单
                <Card slot="content">
                    <div slot="title" class="sign-in-step">
                        <Steps :current="1">
                            <Step title="待发货" content="已经通知快递公司取货"></Step>
                            <Step title="已发货" content="快递公司已经发剧哦"></Step>
                            <Step title="待收货" content="快递已经到达取货地点"></Step>
                            <Step title="待评价" content="已经取货待评价"></Step>
                        </Steps>
                    </div>
                    <a href="#" slot="extra">
                        查看详情
                    </a>
                    <p>
                        【现货速发，最高特惠400元 】360 N7Lite全面屏AI双摄骁龙660智能手机官网全新官方正品360手机N7lite
                    </p>
                </Card>
                <br>
            </Panel>
            <Panel name="2">
                我的收藏
                <Card slot="content">
                    <p slot="title">
                        <Icon type="logo-apple" />
                        已有10人收藏
                    </p>
                    <a href="#" slot="extra">
                        查看详情
                    </a>

                    <p>
                        【正品带票】2017款Apple/苹果 MacBook Pro 13.3英寸 256GB MPXT2CH/A XU2 轻薄便携办公 苹果笔记本电脑pro
                    </p>
                </Card>
            </Panel>
        </Collapse>
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
        background-color: #de335e !important;
    }

    $content-width: 1200px;
    .sign-in {
        background-color: #fff;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-sizing: border-box;
        padding: 30px;
        width: $content-width;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 0 10px #333;

        &-step {
            height: 40px;
        }
    }
</style>