<template>
    <div class="sign-up wrapper">
        <h1 class="headline sign-up__headline">Sign Up</h1>

        <form class="form sign-up__form">

            <div class="form-group">
                <label class="input-wrapper">Full name
                    <input type="text" class="form-control" />
                </label>
            </div>

            <div class="form-group">
                <label class="input-wrapper">Email
                    <input type="email" class="form-control" />
                </label>
            </div>

            <div class="form-group input-wrapper">
                <label class="input-wrapper">Password </label>
                <i class="bi bi-question-circle-fill"
                    title="Password must contains 8+ symbols, 1 sprcial and 2 capital letters"></i>
                <input type="password" class="form-control" />
                <i class="bi bi-eye-slash"></i>
            </div>

            <div class="form-group">
                <label for="inputConfirmPassword" class="input-wrapper">Repeat Password
                    <input type="password" class="form-control" />
                    <i class="bi bi-eye-slash"></i>
                </label>
            </div>

            <button type="submit" class="btn form__button">Sign Up</button>

        </form>

        <div class="options sign-up__options">
            <p class="options__description">Already have an account?</p>
            <a class="options__link" href="#/sign-in">Sign In</a>
        </div>

    </div>
</template>
