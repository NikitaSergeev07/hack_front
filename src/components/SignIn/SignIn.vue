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
                    <i class="bi bi-eye-slash"></i>
                </label>
            </div>

            <button type="submit" class="btn form__button">Sign In</button>
        </form>

        <div class="options sign-up__options">
            <p class="options__description">Don't have an account yet?</p>
            <a href="#/sign-up" class="options__link">Sign Up</a>
        </div>

    </div>
</template>
