<template>
    <div>
        <a href="mailto:meetluckyadogun@gmail.com" class="flex items-center bg-theme-tertiary focus:outline-none w-full py-4 px-10 font-bold rounded-xl text-theme-dark tracking-tighter">{{ cta }}</a>
    </div>
</template>

<script>
import { MailIcon } from 'vue-feather-icons'
export default {
    props: {
        cta: String
    },
    components: {
        MailIcon
  }
}
</script>