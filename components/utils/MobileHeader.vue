<template>
  <div>
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>
      </div>
      <div class="flex justify-center my-10 mx-0 text-xs md:text-lg text-center">
        <NuxtLink to="/highlights"
          ><p class="mr-2 md:mr-12 font-extrabold">Why Hire Me?</p></NuxtLink
        >
        <a class="mr-2 md:mr-12" target="_blank" :href="resumeUrl">Download CV</a>
        <!-- <NuxtLink to="/"><p class="mr-2 md:mr-12">Books</p></NuxtLink> -->
        <!-- <NuxtLink to="/"><p class="mr-2 md:mr-12">OSS</p></NuxtLink> -->
        <!-- <NuxtLink to="/"
          ><p class="mr-2 md:mr-12">
            LifeOutsideTech
          </p></NuxtLink
        > -->
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resumeUrl: 'https://drive.google.com/file/d/1JW0o8q6KimZocJvAWVoqLq5pVxlPysjl/view?usp=sharing',
    }
  }
}
</script>