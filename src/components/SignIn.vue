<template>
    <div class="sign-in wrapper">
        <h1 class="headline sign-in__headline">Sign In</h1>

        <form action="#/main" class="form sign-in__form">

            <div class="form-group">
                <label class="input-wrapper">Email address
                    <input type="email" class="form-control" />
                </label>
            </div>

            <div class="form-group">
                <label class="input-wrapper">Password
                    <input type="password" class="form-control" />
                    <i class="bi bi-eye-slash icon" @click="setVisibility"></i>
                </label>
            </div>

            <button type="submit" class="btn form__button">Sign In</button>
        </form>

        <div class="options sign-up__options .enter-screen__links">
            <p class="options__description">Don't have an account yet?</p>
            <button class="enter-screen__link-signin" @click="this.$router.push('/sign-up')">Sign Up</button>
        </div>

    </div>
</template>

<script> 
export default {
    methods: {
        setVisibility(e) {
            const getSel = e.target;
            const getInput = getSel.previousSibling;
            console.log(getSel)
            
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

    }
}
</script>

<style scoped>

.enter-screen__links {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 27px;
}

.enter-screen__link-signup, .enter-screen__link-signin {
    border-radius: 30px;
    padding: 10px 20px;
    border:none;
}

.invalid {
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