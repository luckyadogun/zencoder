<template>
    <div>
        <button class="flex items-center bg-orange-500 focus:outline-none w-full py-4 px-10 font-bold rounded-xl text-theme-dark tracking-tighter">{{ cta }}</button>
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