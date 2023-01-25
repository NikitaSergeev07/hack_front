<template>
    <div class="sign-up wrapper">
        <h1 class="headline sign-up__headline">Sign Up</h1>

        <form class="form sign-up__form">

            <div class="form-group">
                <label class="input-wrapper">Full name
                    <input type="text" class="form-control" v-model="form.username" name="username" @blur="validateName"
                        :class="{ error: errorName }" />
                </label>
                <p v-if="errorName"> Enter valid name</p>
            </div>

            <div class="form-group">
                <label class="input-wrapper">Email
                    <input type="email" class="form-control" v-model="form.email" @blur="validateEmail"
                        :class="{ error: errorEmail }" />
                </label>
                <p v-if="errorEmail"> Enter valid email </p>
            </div>

            <div class="form-group input-wrapper">
                <label class="input-wrapper">Password </label>
                <i class="bi bi-question-circle-fill"
                    title="Password must contains 8+ symbols, 1 sprcial and 2 capital letters"></i>
                <input type="password" class="form-control" v-model="form.password" @blur="validatePassword"
                    :class="{ error: errorPassword }" />
                <i class="bi bi-eye-slash icon"></i>
                <p v-if="errorPassword"> Enter valid password </p>
            </div>

            <div class="form-group">
                <label for="inputConfirmPassword" class="input-wrapper">Repeat Password
                    <input type="password" class="form-control" v-model="form.repeatPassword"
                        @blur="validateRepeatPassword" :class="{ error: errorRepeatPassword }" />
                    <i class="bi bi-eye-slash icon"></i>
                </label>
                <p v-if="errorRepeatPassword"> Passwords do not match</p>
            </div>

            <!-- <button type="submit" class="btn form__button">Sign Up</button> -->
            <button type="submit" @click.prevent="cl" class="btn form__button">Sign Up</button>

        </form>

        <div class="options sign-up__options">
            <p class="options__description">Already have an account?</p>
            <a class="options__link" href="#/sign-in">Sign In</a>
        </div>

    </div>
    <router-view></router-view>
</template>


<script>
import { isValidName, isValidEmail, isValidPassword, isValidRepeatPasswod } from '../../validation.js';

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
            errorName: false,
            errorEmail: false,
            errorPassword: false,
            errorRepeatPassword: false,
        }
    },
    methods: {
        validateName() {
            if (!isValidName(this.form.username)) {
                this.errorName = true;
            }
            else {
                this.errorName = false;
            }
        },
        validateEmail() {
            if (!isValidEmail(this.form.email)) {
                this.errorEmail = true;
            }
            else {
                this.errorEmail = false;
            }
        },
        validatePassword() {
            if (!isValidPassword(this.form.password)) {
                this.errorPassword = true;
            }
            else {
                this.errorPassword = false;
            }
        },

        validateRepeatPassword() {
            if (!isValidRepeatPasswod(this.form.password, this.form.repeatPassword)) {
                this.errorRepeatPassword = true;
            }
            else {
                this.errorRepeatPassword = false;
            }
        },
        check() {
            console.log(this.errorName)
            if (this.form.username.length && this.form.username.length && this.form.username.length && this.form.username.length > 0) {
                if (this.errorName && this.errorEmail && this.errorPassword && this.errorRepeatPassword == false) {
                    return true;
                   
                }
                return true;
            }
            else {
                return false;
            }
        },
        cl() {
            if (this.check()) {
                this.$router.push({ path: '/main', replace: true })
            }
        }

    }
}
</script>

<style>
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