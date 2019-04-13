<template>
    <section class="sign-in">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="姓名" prop="name">
                <Input v-model="formValidate.name"
                       placeholder="Enter your address"></Input>
            </FormItem>
            <FormItem label="电话" prop="phone">
                <Input v-model="formValidate.phone"
                       placeholder="Enter your address"></Input>
            </FormItem>
            <FormItem label="收货地址" prop="address">
                <Input v-model="formValidate.address"
                       type="textarea"
                       placeholder="Enter your address"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
            </FormItem>
        </Form>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                formValidate: {
                    address: '',
                    name: '',
                    phone: ''
                },
                ruleValidate: {
                    address: [
                        {required: true, message: 'The account cannot be empty', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: 'The account cannot be empty', trigger: 'blur'}
                    ],
                    phone: [
                        {required: true, message: 'The account cannot be empty', trigger: 'blur'}
                    ]
                }
            }
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
</style>