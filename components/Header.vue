<template>
    <div class="flex flex-row justify-between mb-10">
        <Slide class="lg:hidden">
            <nuxt-link to="/" class="mr-4">Home</nuxt-link>
            <nuxt-link to="about" class="mr-4">About Me</nuxt-link>
            <a target="_blank" href="https://blog.luckyadogun.com" class="mr-4">Blog <small class="ml-1 flex items-center text-xs">- FOR DEVS</small></a>
            <nuxt-link to="toolbox" class="mr-4">ToolBox <small class="ml-1 flex items-center text-xs">- FOR DEVS</small></nuxt-link>
            <!-- <nuxt-link to="/" class="flex mr-4 tracking-tighter">SaaS<strong>CAMP</strong> <small class="ml-1 text-xs tracking-tighter leading-tight">- FOR FOUNDERS</small></nuxt-link> -->
        </Slide>        
        <Logo class="hidden lg:block" />
        <div id="web-header" class="flex">
            <div class="hidden lg:flex">
                <nuxt-link to="about" class="mr-4">About Me</nuxt-link>
                <a target="_blank" href="https://blog.luckyadogun.com" class="mr-4">Blog</a>
                <nuxt-link to="toolbox" class="mr-4">ToolBox</nuxt-link>                    
                <!-- <nuxt-link to="/" class="flex mr-4 tracking-tighter">SaaS<strong>CAMP</strong><small class="text-xs tracking-tighter leading-tight"> - for Founders</small></nuxt-link> -->
            </div>
            <a href="mailto:meetluckyadogun@gmail.com" class="focus:outline-none lg:hidden" @click="darkMode = !darkMode"><mail-icon size="1.5x" class=""></mail-icon></a>           
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