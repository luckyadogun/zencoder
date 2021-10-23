<template>
    <div class="flex flex-row justify-between mb-10">
        <Slide class="md:hidden">
            <nuxt-link to="/" class="mr-4">Home</nuxt-link>
            <nuxt-link to="about" class="mr-4">About Me</nuxt-link>
            <nuxt-link to="/" class="mr-4">Writings</nuxt-link>
            <nuxt-link to="/" class="mr-4">Tools</nuxt-link>
        </Slide>        
        <Logo class="hidden md:block" />
        <div class="flex">
            <div class="hidden lg:flex">
                <nuxt-link to="about" class="mr-4">About Me</nuxt-link>
                <nuxt-link to="/" class="mr-4">Writings</nuxt-link>
                <nuxt-link to="/" class="mr-4">Tools</nuxt-link>                    
            </div>
            <button class="focus:outline-none" @click="darkMode = !darkMode"><mail-icon size="1.5x" class=""></mail-icon></button>           
        </div>        
    </div>
</template>

<script>
import { MailIcon } from 'vue-feather-icons'
export default {
    data() {
        return {
            darkMode: false
        }
    },
    components: {
        MailIcon,
    }
}
</script>

<style scoped>
</style>