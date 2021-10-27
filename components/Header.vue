<template>
    <div class="flex flex-row justify-between mb-10">
        <Slide class="md:hidden">
            <nuxt-link to="/" class="mr-4">Home</nuxt-link>
            <nuxt-link to="about" class="mr-4">About Me</nuxt-link>
            <a target="_blank" href="https://blog.zencoder.xyz" class="mr-4">Blog <small class="ml-1 flex items-center text-xs">- FOR DEVS</small></a>
            <nuxt-link to="toolbox" class="mr-4">ToolBox <small class="ml-1 flex items-center text-xs">- FOR DEVS</small></nuxt-link>
            <nuxt-link to="/" class="flex mr-4">DigitalCTO <small class="ml-1 text-xs tracking-tighter leading-tight">- FOR FOUNDERS</small></nuxt-link>
        </Slide>        
        <Logo class="hidden md:block" />
        <div class="flex">
            <div class="hidden lg:flex">
                <nuxt-link to="about" class="mr-4">About Me</nuxt-link>
                <a target="_blank" href="https://blog.zencoder.xyz" class="mr-4">Blog</a>
                <nuxt-link to="toolbox" class="mr-4">ToolBox</nuxt-link>                    
                <nuxt-link to="/" class="flex mr-4">DigitalCTO<small class="text-xs tracking-tighter leading-tight"> - for Founders</small></nuxt-link>
            </div>
            <button class="focus:outline-none lg:hidden" @click="darkMode = !darkMode"><mail-icon size="1.5x" class=""></mail-icon></button>           
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