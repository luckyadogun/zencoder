<template>
    <div>
        <button class="bg-theme-cta flex items-center hover:bg-orange-500 focus:outline-none w-full py-4 px-10 font-bold rounded-xl text-theme-dark">{{ cta }} <mail-icon size="1x" class="ml-2"></mail-icon></button>
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