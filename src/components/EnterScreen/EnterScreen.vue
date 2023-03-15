<template>
    <div class="enter-screen wrapper">
        <h1 class="headline enter-screen__headline"> Ready for a great <br> User experience?</h1>
        <p class="subtitle enter-screen__subtitle">Bring your media to the next level!</p>

        <div class="enter-screen__links">
            <button class="enter-screen__link-signup"><router-link to="/sign-up" class="router"> Sign Up
                </router-link></button>
            <router-link to="/sign-in" class='enter-screen__link-signin'> <i class="bi bi-arrow-right"></i> </router-link>
        </div>

        <div class="enter-screen__image">
            <img src="../../assets/img/woman.svg" alt="" />
        </div>
    </div>
</template>

<style lang="scss" src="./enter-screen.scss"></style>