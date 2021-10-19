<template>
  <div class="flex h-full">
    <div class="flex flex-col items-center justify-center justify-items-center m-auto">
        <div class="w-24 h-24 bg-white flex items-center rounded-full">
          <img class="h-20 w-20 mx-auto" src="https://lnmlpexiwaspywjbwwvd.supabase.in/storage/v1/object/sign/assets/boy.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvYm95LnBuZyIsImlhdCI6MTYzMzUzMzk2NywiZXhwIjoxOTQ4ODkzOTY3fQ.HL6DqbdJMCZI6dqEN-ZQAu5EwtblW7r8YNuud4_kHV8">
        </div>
        <h1 class="my-3 text-lg font-bold">Hi, I'm Lucky 👋</h1>
        <h1 class="my-3 text-4xl md:text-5xl lg:text-6xl lg:px-56 tracking-tighter leading-tight md:leading-none text-center font-bold">
          I build SaaS and Enterprise Products with Python & JS
        </h1>
        <p class="my-3 text-xs md:text-sm lg:text-lg tracking-tight md:px-10 lg:px-56 text-center font-normal text-theme-secondary">
          I have done it many times, for many clients, even for the
          <span class="font-bold text-white">Federal Government of Nigeria <br class="hidden md:block">for the Ministry of Budget and Urban Planning. </span>
          If they can trust me, maybe you can. So feel free to reach out.
        </p>
        <Button class="my-5" cta='say hello' />
        <div>
          <chevrons-down-icon size="3x" class="custom-class"></chevrons-down-icon>
        </div>
        <p class="text-xs text-theme-secondary my-3 underline">Click here to download my resume</p>
        <p class="text-xs text-orange-500 mb-5 font-semibold">OR</p>
        <SocialMedia />
    </div>
    
  </div>
</template>

<script>
import { ChevronsDownIcon } from 'vue-feather-icons'
export default {
  data() {
      return {
        title: 'Home'
      }
  },
  components: {
    ChevronsDownIcon
  }
}
</script>