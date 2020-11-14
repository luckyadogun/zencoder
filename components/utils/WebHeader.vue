<template>
  <div style="font-family:'Quicksand', sans-serif;">
    <div class="flex justify-center">
      <NuxtLink to="/highlights"
        ><p class="mr-4 xl:mr-14 font-bold">Why Hire Me?</p></NuxtLink
      >
      <a class="mr-4 xl:mr-14" target="_blank" :href="resumeUrl">Download CV</a>
      <!-- <NuxtLink to="/"><p class="mr-4 xl:mr-14">Download CV</p></NuxtLink> -->
      <!-- <NuxtLink to="/"><p class="mr-4 xl:mr-14">Books</p></NuxtLink> -->
      <!-- <NuxtLink to="/"><p class="mr-4 xl:mr-14">OSS</p></NuxtLink> -->
      <!-- <NuxtLink to="/"><p class="mr-4 xl:mr-14">LifeOutsideTech</p></NuxtLink> -->      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resumeUrl: 'https://docs.google.com/document/d/1sqrlJJ_UueOahr4_-DijO0M1QowVDtyLo3qoDddoON8/edit?usp=sharing',
    }
  }
}
</script>
