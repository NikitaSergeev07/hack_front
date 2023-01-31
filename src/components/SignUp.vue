<template>
    <div class="sign-up wrapper">
        <h1 class="headline sign-up__headline">Sign Up</h1>

        <form class="form sign-up__form"  @submit.prevent>

            <div class="form-group">
                <label class="input-wrapper">Full name
                    <input type="text" class="form-control" v-model="form.username" name="username" @blur="validateName"
                        :class="{ error: error.username }" />
                </label>
                <p v-if="error.username"> Enter valid name</p>
            </div>

            <div class="form-group">
                <label class="input-wrapper">Email
                    <input type="email" class="form-control" v-model="form.email" name="email" @blur="validateEmail"
                        :class="{ error: error.email }" />
                </label>
                <p v-if="error.email"> Enter valid email </p>
            </div>

            <div class="form-group input-wrapper">
                <label class="input-wrapper">Password </label>
                <i class="bi bi-question-circle-fill"
                    title="Password must contains 8+ symbols, 1 sprcial and 2 capital letters"></i>
                <input type="password" class="form-control" v-model="form.password" name='password' @blur="validatePassword"
                    :class="{ error: error.password }" />
                <i class="bi bi-eye-slash icon"></i>
                <p v-if="error.password"> Enter valid password </p>
            </div>

            <div class="form-group">
                <label for="inputConfirmPassword" class="input-wrapper">Repeat Password
                    <input type="password" class="form-control" v-model="form.repeatPassword" name="repeatPassword"
                        @blur="validateConfirmPassword" :class="{ error: error.repeatPassword }" />
                    <i class="bi bi-eye-slash icon"></i>
                </label>
                <p v-if="error.repeatPassword"> Passwords do not match</p>
            </div>

            <button type="submit" class="btn form__button" @click="sugnUp">Sign Up </button>
        </form>

        <div class="options sign-up__options">
            <p class="options__description">Already have an account?</p>
            <router-link class="options__link" to="/sign-in"> Sign In </router-link>
        </div>

    </div>
</template>


<script>
import { isValidName, isValidEmail, isValidPassword, isValidRepeatPasswod } from '../validation.js';

window.addEventListener("load", function () {
    const showPassword = document.querySelectorAll(".bi-eye-slash");

    showPassword.forEach((item) => {
        item.addEventListener("click", () => {
            const getInput = item.previousSibling;

            if (getInput.type === "password") {
                getInput.type = "text";
                item.classList.remove("bi-eye-slash");
                item.classList.add("bi-eye");
            }
            else {
                getInput.type = "password";
                item.classList.remove("bi-eye");
                item.classList.add("bi-eye-slash");
            }
        });
    })
})

export default {
    data() {
        return {
            form: {
                username: '',
                email: '',
                password: '',
                repeatPassword: '',
                valid: false
            },
            error: {
                username: false,
                email: false,
                password: false,
                repeatPassword: false,
            }
        }
    },
    methods: {
        addClassInvalid (attr) {
            const getSel = document.querySelector(`input[name="${attr}"]`);
            getSel.classList.add('invalid');
            this.error[attr] = true;
        },

        removeClassInvalid (attr) {
            const getSel = document.querySelector(`input[name="${attr}"]`);
            getSel.classList.remove('invalid');
            this.error[attr] = false;
        },

        validateName() {
            const attr = 'username'
            if (this.form[attr].length !== 0) {
                !isValidName(this.form[attr]) ? this.addClassInvalid(attr) : this.removeClassInvalid(attr);
            }
            console.log(document.querySelector(`input[name="${attr}"]`))
        },
        validateEmail() {
            const attr = 'email';
            if (this.form[attr].length !== 0) {
            !isValidEmail(this.form[attr]) ?  this.addClassInvalid(attr):  this.removeClassInvalid(attr);
            }
        },
        validatePassword() {
            const attr = 'password'
            if (this.form[attr].length !== 0) {
                !isValidPassword(this.form[attr]) ? this.addClassInvalid(attr) : this.removeClassInvalid(attr);
            }
        },
        validateConfirmPassword() {
            const attr = 'repeatPassword';
            const password = 'password';
            if (this.form[attr].length !== 0) {
                !isValidRepeatPasswod(this.form[attr], this.form[password]) ? this.addClassInvalid(attr) : this.removeClassInvalid(attr);
            }
        },
        sugnUp() {
            const getInputAll = document.querySelectorAll('.error');

            const userLength = this.form.username.length > 0;
            const emailLength =  this.form.email.length  > 0;
            const passwordLength = this.form.password.length > 0;
            const repeatLength = this.form.repeatPassword.length > 0;

            if ((userLength, emailLength, passwordLength, repeatLength) && getInputAll.length === 0) {
                this.$router.push('main')
        }
        },
    }
}
</script>

<style scoped>
.error {
    background-color: red;
}

.form-group {
    margin-top: 24px;
}

.input-wrapper {
    position: relative;
}

.input-wrapper .icon {
    position: absolute;
    right: 5px;
    top: 50%;
    cursor: pointer;
}

.bi-question-circle-fill {
    position: absolute;
    right: 0;
}
</style>