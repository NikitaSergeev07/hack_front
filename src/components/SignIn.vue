<template>
    <div class="sign-in wrapper">
        <h1 class="headline sign-in__headline">Sign In</h1>

        <form action="#/main" class="form sign-in__form" @submit.prevent>

            <div class="form-group">
                <label class="input-wrapper">Email
                    <input type="email" class="form-control" v-model="form.email" name="email" @blur="validateEmail"
                        :class="{ error: error.email }" />
                </label>
                <p v-if="error.email" class="error-message"> Enter valid email </p>
            </div>

            <div class="form-group">
                <label class="input-wrapper">Password
                    <input type="password" class="form-control" v-model="form.password" name='password'
                        @blur="validatePassword" :class="{ error: error.password }" />
                    <i class="bi bi-eye-slash icon" @click="setVisibility"></i>
                </label>
                <p v-if="error.password" class="error-message"> Enter valid password </p>
            </div>

            <button type="submit" class="btn form__button" @click="signIn">Sign In</button>
        </form>

        <div class="options sign-up__options .enter-screen__links">
            <p class="options__description">Don't have an account yet?</p>
            <router-link class="options__link" to="/sign-up"> Sign Up </router-link>
        </div>

    </div>
</template>

<script>
import { isValidEmail, isValidPassword, } from '../utils/validation.js';

export default {
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            error: {
                email: false,
                password: false,
            }
        }
    },
    methods: {
        setVisibility(e) {
            const getSel = e.target;
            const getInput = getSel.previousSibling;

            if (getInput.type === "password") {
                getInput.type = "text";
                getSel.classList.remove("bi-eye-slash");
                getSel.classList.add("bi-eye");
            }
            else {
                getInput.type = "password";
                getSel.classList.remove("bi-eye");
                getSel.classList.add("bi-eye-slash");
            }
        },
        addClassInvalid(attr) {
            const getSel = document.querySelector(`input[name="${attr}"]`);
            getSel.classList.add('invalid');
            this.error[attr] = true;
        },
        removeClassInvalid(attr) {
            const getSel = document.querySelector(`input[name="${attr}"]`);
            getSel.classList.remove('invalid');
            this.error[attr] = false;
        },
        validateEmail() {
            const attr = 'email';
            if (this.form[attr].length !== 0) {
                !isValidEmail(this.form[attr]) ? this.addClassInvalid(attr) : this.removeClassInvalid(attr);
            }
        },
        validatePassword() {
            const attr = 'password'
            if (this.form[attr].length !== 0) {
                !isValidPassword(this.form[attr]) ? this.addClassInvalid(attr) : this.removeClassInvalid(attr);
            }
        },
        signIn() {
            const getInputAll = document.querySelectorAll('.error');

            const emailLength = this.form.email.length > 0;
            const passwordLength = this.form.password.length > 0;

            if ((emailLength, passwordLength) && getInputAll.length === 0) {
                this.$router.push('main')
            }
        },

    }
}
</script>

<style scoped></style>