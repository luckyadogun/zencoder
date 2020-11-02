<template>
  <div>
    <div id="mobile" class="lg:hidden pt-10">
      <div class="flex justify-center">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>
      </div>
      <div class="flex justify-center my-10">
        <NuxtLink to="/"
          ><p class="mr-3 md:mr-12 font-extrabold">What to Expect?</p></NuxtLink
        >
        <NuxtLink to="/"><p class="mr-3 md:mr-12">Download CV</p></NuxtLink>
        <NuxtLink to="/"><p class="mr-3 md:mr-12">Books</p></NuxtLink>
        <NuxtLink to="/"><p class="mr-3 md:mr-12">OSS</p></NuxtLink>
        <NuxtLink to="/"><p class="mr-3 md:mr-12">LifeOutsideTech</p></NuxtLink>
      </div>
      <div class="flex justify-center">
        <img src="~/assets/images/zencoder__dark.png" alt="" />
      </div>
      <!-- backendStacks -->
      <div class="bg-theme-secondary py-5 px-12 text-white text-lg">
        <p class="font-bold">{{ HtmlSubTitles[0] }}</p>
        <div class="flex my-4 pl-5">
            <div class="w-1/2 h-auto mr-4">
              <p class="flex items-center justify-self-auto" v-for="(item, index) in backEndStacks.slice(0,5)" :key="index">{{ item.topic }} 
                <span class="text-xs ml-2">[
                  <nuxt-link :to="'{{ item.projectLink }}'">Projects</nuxt-link>,
                  <nuxt-link :to="'{{ item.repo }}'">Github</nuxt-link>,
                  <nuxt-link :to="'{{ item.blog }}'">Posts</nuxt-link>,
                  ]
                </span>
              </p>              
            </div>
            <div class="w-1/2 h-auto">
                <p class="flex items-center justify-self-auto"  v-for="(item, index) in backEndStacks.slice(5,10)" :key="index">{{ item.topic }} 
                <span class="text-xs ml-2">[
                  <nuxt-link :to="'{{ item.projectLink }}'">Projects</nuxt-link>,
                  <nuxt-link :to="'{{ item.repo }}'">Github</nuxt-link>,
                  <nuxt-link :to="'{{ item.blog }}'">Posts</nuxt-link>,
                  ]
                </span>
              </p>     
            </div>
        </div>
      </div>

      <!-- frontendStacks -->
      <div class="bg-theme-tertiary py-5 px-12 text-black text-lg">
        <p class="flex font-bold justify-end">{{ HtmlSubTitles[1] }}</p>
        <div class="flex my-4 pl-5 mx-auto">
            <div class="w-1/2 h-auto mr-4">
              <p class="flex items-center justify-self-auto" v-for="(item, index) in frontEndStacks.slice(0,3)" :key="index">{{ item.topic }} 
                <span class="text-xs ml-4">[
                  <nuxt-link :to="'{{ item.projectLink }}'">Projects</nuxt-link>,
                  <nuxt-link :to="'{{ item.repo }}'">Github</nuxt-link>,
                  <nuxt-link :to="'{{ item.blog }}'">Posts</nuxt-link>,
                  ]
                </span>
              </p>              
            </div>
            <div class="w-1/2 h-auto">
                <p class="flex items-center justify-self-auto"  v-for="(item, index) in frontEndStacks.slice(3,6)" :key="index">{{ item.topic }} 
                <span class="text-xs ml-2">[
                  <nuxt-link :to="'{{ item.projectLink }}'">Projects</nuxt-link>,
                  <nuxt-link :to="'{{ item.repo }}'">Github</nuxt-link>,
                  <nuxt-link :to="'{{ item.blog }}'">Posts</nuxt-link>,
                  ]
                </span>
              </p>     
            </div>
        </div>
      </div>

      <!-- footer -->
      <footer class="py-10">
        <p class="text-center font-bold text-sm">Notable Projects Supported</p>
        <div class="my-5 flex justify-center">
          <Projects />
        </div>
        <!-- social -->          
        <div class="flex justify-center ">
          <a href="mailto: meetluckyadogun@gmail.com" target="_blank"><img class="mr-5 w-6" src="~/assets/images/email.png" alt="" /></a>
          <a href="https://twitter.com/iam_zencoder" target="_blank"><img class="mr-5 w-6" src="~/assets/images/twitter.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/luckyadogun/" target="_blank"><img class="mr-5 w-6" src="~/assets/images/linkedin.png" alt="" /></a>
        </div>
      </footer>
    </div>

    <div id="web" class="hidden lg:block xl:block">
      <h1>This is the web</h1>
    </div>
  </div>
</template>

<script>
import photoAsset from '~/assets/images/zencoder__dark.png'

export default {
  data () {
    return {
      photoAsset,
      HtmlSubTitles: ['< backend_stacks />', '< frontend_stacks />'],
      backEndStacks: [
        {topic: 'Algorithms', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},
        {topic: 'JavaScript', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},
        {topic: 'NodeJS', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},
        {topic: 'NextJS', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},
        {topic: 'Strapi', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},
        {topic: 'Python', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},
        {topic: 'Django', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},
        {topic: 'FastAPI', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},
        {topic: 'Docker', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},
        {topic: 'AmazonS3', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},
      ],
      frontEndStacks: [
        {topic: 'UI/UX', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},
        {topic: 'HTML', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},
        {topic: 'CSS', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},
        {topic: 'VueJS', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},
        {topic: 'NuxtJS', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},
        {topic: 'Netlify', projectLink: 'www.example.com', repo: 'www.google.com', blog: 'www.blog.coom'},        
      ],
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap');

#mobile {
  font-family: 'Quicksand', sans-serif;
}
</style>
