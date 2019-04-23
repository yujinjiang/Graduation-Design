<template>
    <section class="sign-in">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="邮箱" prop="name">
                <Input v-model="formValidate.name"
                       search enter-button="发送验证码"
                       placeholder="Enter your email"></Input>
            </FormItem>
            <FormItem label="验证码" prop="password">
                <Input v-model="formValidate.password" placeholder="Enter your code"></Input>
            </FormItem>
            <FormItem>
                <Button @click="handleSubmit('formValidate')">确认</Button>
            </FormItem>
        </Form>
    </section>
</template>
<script>
    export default {
        data () {
            return {
                formValidate: {
                    name: '',
                    password: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The email cannot be empty', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'code cannot be empty', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
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