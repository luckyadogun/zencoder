<template>
  <div>
    <div id="mobile" class="lg:hidden pt-10">
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>
      </div>
      <div class="flex justify-center my-10 mx-0 text-xs md:text-lg">
        <NuxtLink to="/"
          ><p class="mr-2 md:mr-12 font-extrabold">What to Expect?</p></NuxtLink
        >
        <NuxtLink to="/"><p class="mr-2 md:mr-12">Download CV</p></NuxtLink>
        <NuxtLink to="/"><p class="mr-2 md:mr-12">Books</p></NuxtLink>
        <NuxtLink to="/"><p class="mr-2 md:mr-12">OSS</p></NuxtLink>
        <NuxtLink to="/"><p class="mr-2 md:mr-12 hidden md:block">LifeOutsideTech</p></NuxtLink>
      </div>
      <div class="flex justify-center">
        <img src="~/assets/images/zencoder__dark.png" alt="" />
      </div>
      <!-- backendStacks -->
      <div class="bg-theme-secondary py-5 px-2 md:px-12 text-white text-sm md:text-lg">
        <p class="font-bold px-5">{{ HtmlSubTitles[0] }}</p>
        <div class="flex my-4 justify-evenly px-10">
            <div class="w-1/2 h-auto">
              <p class="flex items-center justify-self-auto" v-for="(item, index) in backEndStacks.slice(0,5)" :key="index">{{ item.topic }} 
                <span class="text-xs ml-2 hidden sm:block">[
                  <a target="_blank" :href="item.projectLink">Projects</a>,
                  <a target="_blank" :href="item.repo">Github</a>,
                  <a target="_blank" :href="item.blog">Posts</a>
                  ]
                </span>
              </p>              
            </div>
            <div class="w-1/2 h-auto">
                <p class="flex text-right items-center justify-end"  v-for="(item, index) in backEndStacks.slice(5,backEndStacks.length)" :key="index">{{ item.topic }} 
                <span class="text-xs ml-2 hidden sm:block">[
                  <a target="_blank" :href="item.projectLink">Projects</a>,
                  <a target="_blank" :href="item.repo">Github</a>,
                  <a target="_blank" :href="item.blog">Posts</a>
                  ]
                </span>
              </p>     
            </div>
        </div>
      </div>

      <!-- frontendStacks -->
      <div class="bg-theme-tertiary py-5 px-2 md:px-12 text-black text-sm md:text-lg">
        <p class="font-bold px-5">{{ HtmlSubTitles[1] }}</p>
        <div class="flex my-4 justify-evenly px-10">
            <div class="w-1/2 h-auto">
              <p class="flex items-center justify-self-auto" v-for="(item, index) in frontEndStacks.slice(0,4)" :key="index">{{ item.topic }} 
                <span class="text-xs ml-2 hidden sm:block">[
                  <a target="_blank" :href="item.projectLink">Projects</a>,
                  <a target="_blank" :href="item.repo">Github</a>,
                  <a target="_blank" :href="item.blog">Posts</a>
                  ]
                </span>
              </p>              
            </div>
            <div class="w-1/2 h-auto">
                <p class="flex text-right items-center justify-end"  v-for="(item, index) in frontEndStacks.slice(4,frontEndStacks.length)" :key="index">{{ item.topic }} 
                <span class="text-xs ml-2 hidden sm:block">[
                  <a target="_blank" :href="item.projectLink">Projects</a>,
                  <a target="_blank" :href="item.repo">Github</a>,
                  <a target="_blank" :href="item.blog">Posts</a>
                  ]
                </span>
              </p>     
            </div>
        </div>
      </div>

      <!-- footer -->
      <footer class="py-6">
        <p class="text-center font-bold text-sm">Notable Projects Supported</p>
        <div class="my-2 md:my-6 flex justify-center">
          <Projects />
        </div>
        <!-- social -->          
        <div class="flex justify-center md:mt-10">
          <a href="mailto: meetluckyadogun@gmail.com" target="_blank"><img class="mr-5 w-6" src="~/assets/images/email.png" alt="" /></a>
          <a href="https://twitter.com/iam_zencoder" target="_blank"><img class="mr-5 w-6" src="~/assets/images/twitter.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/luckyadogun/" target="_blank"><img class="mr-5 w-6" src="~/assets/images/linkedin.png" alt="" /></a>
        </div>
        <p class="text-center text-sm mt-20 text-gray-600">
          Built with ❤️ by 
          <a class=" font-bold" href="https://twitter.com/iam_zencoder" target="_blank">ZenCoder</a> with 
          <a class=" font-bold" href="https://vuejs.org/" rel="nofollow" target="_blank">VueJS</a>, 
          <a class=" font-bold" href="https://nuxtjs.org/" rel="nofollow" target="_blank">NuxtJS</a>, 
          <a class=" font-bold" href="https://tailwindcss.com/" rel="nofollow" target="_blank">TailwindCSS</a> and 
          <a class=" font-bold" href="https://en.wikipedia.org/wiki/H2O" rel="nofollow" target="_blank">H2O</a>
        </p>
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
        {topic: 'Algorithm Design', projectLink: 'http://www.example.com', repo: 'http://www.google.com', blog: 'http://www.blog.coom'},
        {topic: 'JavaScript', projectLink: 'http://www.example.com', repo: 'http://www.google.com', blog: 'http://www.blog.coom'},
        {topic: 'NodeJS', projectLink: 'http://www.example.com', repo: 'http://www.google.com', blog: 'http://www.blog.coom'},
        {topic: 'NextJS', projectLink: 'http://www.example.com', repo: 'http://www.google.com', blog: 'http://www.blog.coom'},
        {topic: 'Strapi', projectLink: 'http://www.example.com', repo: 'http://www.google.com', blog: 'http://www.blog.coom'},
        {topic: 'Python', projectLink: 'http://www.example.com', repo: 'http://www.google.com', blog: 'http://www.blog.coom'},
        {topic: 'Django', projectLink: 'http://www.example.com', repo: 'http://www.google.com', blog: 'http://www.blog.coom'},
        {topic: 'FastAPI', projectLink: 'http://www.example.com', repo: 'http://www.google.com', blog: 'http://www.blog.coom'},
        {topic: 'Docker', projectLink: 'http://www.example.com', repo: 'http://www.google.com', blog: 'http://www.blog.coom'},
        {topic: 'AmazonS3', projectLink: 'http://www.example.com', repo: 'http://www.google.com', blog: 'http://www.blog.coom'},
      ],
      frontEndStacks: [
        {topic: 'UI/UX', projectLink: 'http://www.example.com', repo: 'http://www.example.com', blog: 'http://www.example.com'},
        {topic: 'HTML', projectLink: 'http://www.example.com', repo: 'http://www.example.com', blog: 'http://www.example.com'},
        {topic: 'CSS', projectLink: 'http://www.example.com', repo: 'http://www.example.com', blog: 'http://www.example.com'},
        {topic: 'VueJS', projectLink: 'http://www.example.com', repo: 'http://www.example.com', blog: 'http://www.example.com'},
        {topic: 'NuxtJS', projectLink: 'http://www.example.com', repo: 'http://www.example.com', blog: 'http://www.example.com'},
        {topic: 'Flutter', projectLink: 'http://www.example.com', repo: 'http://www.example.com', blog: 'http://www.example.com'},
        {topic: 'Netlify', projectLink: 'http://www.example.com', repo: 'http://www.example.com', blog: 'http://www.example.com'},        
      ],
    }
  },
  methods: {
    visitExternalLink: function(url){
      if (process.browser) {
        window.location.replace(url);
      }
      
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

// @click="visitExternalLink(item.repo)"
// @click="visitExternalLink(item.blog)"