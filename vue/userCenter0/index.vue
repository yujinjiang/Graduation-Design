<template>
    <section class="sign-in">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="用户名称" prop="name">
                于锦江
            </FormItem>
            <FormItem label="邮箱" prop="mail">
                2879032410@qq.com
            </FormItem>
            <FormItem label="手机号" prop="phone">
                17611499307
            </FormItem>
            <FormItem label="头像" required>
                <img src="../../images/aboutUs/bg.jpg" style="width: 60px">
            </FormItem>
            <FormItem label="性别" required>
                男
            </FormItem>
            <FormItem label="收货地址" required>
                北京 海淀 北分厂 家属区
            </FormItem>
            <FormItem label="购物车" required>
                <a href="/shoppingCart">
                    <Button type="primary">查看信息</Button>
                </a>
            </FormItem>
            <FormItem label="订单/收藏" required>
                <a href="/order">
                    <Button type="primary">查看信息</Button>
                </a>
            </FormItem>
            <FormItem>
                <a href="/userCenter">
                    <Button type="primary">完善个人信息</Button>
                </a>
            </FormItem>
        </Form>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                formValidate: {
                    name: '',
                    mail: '',
                    phone: '',
                    radio: ''
                },

                defaultList: [],
                imgName: '',
                visible: false,
                uploadList: []
            }
        },
        mounted () {
            this.uploadList = this.$refs.upload.fileList;
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },

            handleView (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove (file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess (res, file) {
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize (file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            handleBeforeUpload () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: 'Up to five pictures can be uploaded.'
                    });
                }
                return check;
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
    }

    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>