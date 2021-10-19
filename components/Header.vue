<template>
    <div class="flex justify-between mb-0 ">
        <Slide class="md:hidden">
            <nuxt-link to="/" class="mr-4">Home</nuxt-link>
            <nuxt-link to="/" class="mr-4">About Me</nuxt-link>
            <nuxt-link to="/" class="mr-4">Writings</nuxt-link>
            <nuxt-link to="/" class="mr-4">Tools</nuxt-link>
        </Slide>        
        <Logo class="hidden md:block" />
        <div class="flex">
            <div class="hidden lg:flex">
                <nuxt-link to="/" class="mr-4">About Me</nuxt-link>
                <nuxt-link to="/" class="mr-4">Writings</nuxt-link>
                <nuxt-link to="/" class="mr-4">Tools</nuxt-link>                    
            </div>
            <button class="focus:outline-none" @click="darkMode = !darkMode"><sun-icon size="1.5x" class=""></sun-icon></button>           
        </div>        
    </div>
</template>

<script>
import { SunIcon } from 'vue-feather-icons'
export default {
    data() {
        return {
            darkMode: false
        }
    },
    components: {
        SunIcon,
    }
}
</script>

<style scoped>
</style>