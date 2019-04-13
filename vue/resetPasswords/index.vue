<template>
    <section class="sign-in">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="账号" prop="name">
                <Input v-model="formValidate.name" placeholder="Enter your account"></Input>
            </FormItem>
            <FormItem label="邮箱" prop="mail">
                <Input v-model="formValidate.mail" placeholder="Enter your password"></Input>
            </FormItem>
            <FormItem label="密码" prop="password">
                <Input v-model="formValidate.password" placeholder="Enter your password"></Input>
            </FormItem>
            <FormItem label="重复密码" prop="password">
                <Input v-model="formValidate.repeatPassword" placeholder="Enter your password again"></Input>
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
                    name: '',
                    mail: '',
                    password: '',
                    repeatPassword: ''
                },
                ruleValidate: {
                    name: [
                        {required: true, message: 'The account cannot be empty', trigger: 'blur'}
                    ],
                    mail: [
                        {required: true, message: 'Mailbox cannot be empty', trigger: 'blur'},
                        {type: 'email', message: 'Incorrect email format', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: 'The password cannot be empty', trigger: 'blur'}
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