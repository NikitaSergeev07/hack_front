<template>
    <div class="enter-screen wrapper">
        <h1 class="headline enter-screen__headline"> Ready for a great <br> User experience?</h1>
        <p class="subtitle enter-screen__subtitle">Bring your media to the next level!</p>
        
        <div class="enter-screen__links">
            <button class="enter-screen__link-signup" @click="this.$router.push('/sign-up')">Sign Up</button>
            <button class="enter-screen__link-signin" @click="this.$router.push('/sign-in')">Sign In</button>
    
                <!-- <div class="enter-screen__link-signin" @click="this.$router.push('/sign-in')">
                    <i class="bi bi-arrow-right" color="white"></i>
                </div> -->

        </div>

        <div class="enter-screen__image">
            <img src="../../assets/img/woman.svg" alt="" />
        </div>

    </div>
    <router-view> </router-view>
</template>

<style lang="scss" src="./enter-screen.scss">

</style>