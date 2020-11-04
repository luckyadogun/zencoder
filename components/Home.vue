<template>
  <div id="home">

    <div id="mobile" class="lg:hidden pt-10">
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>
      </div>
      <div class="flex justify-center my-10 mx-0 text-xs md:text-lg text-center">
        <NuxtLink to="/"
          ><p class="mr-2 md:mr-12 font-extrabold">What to Expect?</p></NuxtLink
        >
        <a class="mr-2 md:mr-12" target="_blank" href="https://drive.google.com/file/d/1iSrxZ0wALQALk3xox1HAwy3LgD6xyRYc/view?usp=sharing">Download CV</a>
        <NuxtLink to="/"><p class="mr-2 md:mr-12">Books</p></NuxtLink>
        <NuxtLink to="/"><p class="mr-2 md:mr-12">OSS</p></NuxtLink>
        <NuxtLink to="/"
          ><p class="mr-2 md:mr-12">
            LifeOutsideTech
          </p></NuxtLink
        >
      </div>
      <div class="flex justify-center">
        <img src="https://res.cloudinary.com/zencoder/image/upload/v1604416121/zencoder__dark_i38quk.png" alt="zencoder" />
      </div>
      <!-- backendStacks -->
      <div
        class="bg-theme-secondary py-5 px-2 md:px-12 text-white text-sm md:text-lg"
      >
        <p class="font-bold px-5">{{ HtmlSubTitles[0] }}</p>
        <div class="flex my-4 justify-evenly px-10">
          <div class="w-1/2 h-auto">
            <p
              style="font-family:'PT Mono', monospace;"
              class="flex items-center justify-self-auto"
              v-for="(item, index) in backEndStacks.slice(0, Math.floor(backEndStacks.length/2))"
              :key="index"
            >
              {{ item.topic }}
              <span style="font-family:'Quicksand', sans-serif;" class="text-xs ml-2 hidden sm:block"
                >[ <a target="_blank" :href="item.projectLink">Projects</a>,
                <a target="_blank" :href="item.repo">Github</a>,
                <a target="_blank" :href="item.blog">Posts</a>
                ]
              </span>
            </p>
          </div>
          <div class="w-1/2 h-auto">
            <p
              style="font-family:'PT Mono', monospace;"
              class="flex text-right items-center justify-end"
              v-for="(item, index) in backEndStacks.slice(
                Math.floor(backEndStacks.length/2),
                backEndStacks.length
              )"
              :key="index"
            >
              {{ item.topic }}
              <span style="font-family:'Quicksand', sans-serif;" class="text-xs ml-2 hidden sm:block"
                >[ <a target="_blank" :href="item.projectLink">Projects</a>,
                <a target="_blank" :href="item.repo">Github</a>,
                <a target="_blank" :href="item.blog">Posts</a>
                ]
              </span>
            </p>
          </div>
        </div>
      </div>

      <!-- frontendStacks -->
      <div
        class="bg-theme-tertiary py-5 px-2 md:px-12 text-black text-sm md:text-lg"
      >
        <p class="font-bold px-5">{{ HtmlSubTitles[1] }}</p>
        <div class="flex my-4 justify-evenly px-10">
          <div class="w-1/2 h-auto">
            <p
              style="font-family:'PT Mono', monospace;"
              class="flex items-center justify-self-auto"
              v-for="(item, index) in frontEndStacks.slice(0, Math.floor(frontEndStacks.length/2))"
              :key="index"
            >
              {{ item.topic }}
              <span style="font-family:'Quicksand', sans-serif;" class="text-xs ml-2 hidden sm:block"
                >[ <a target="_blank" :href="item.projectLink">Projects</a>,
                <a target="_blank" :href="item.repo">Github</a>,
                <a target="_blank" :href="item.blog">Posts</a>
                ]
              </span>
            </p>
          </div>
          <div class="w-1/2 h-auto">
            <p
              style="font-family:'PT Mono', monospace;"
              class="flex text-right items-center justify-end"
              v-for="(item, index) in frontEndStacks.slice(
                Math.floor(frontEndStacks.length/2),
                frontEndStacks.length
              )"
              :key="index"
            >
              {{ item.topic }}
              <span style="font-family:'Quicksand', sans-serif;" class="text-xs ml-2 hidden sm:block"
                >[ <a target="_blank" :href="item.projectLink">Projects</a>,
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
          <a href="mailto: meetluckyadogun@gmail.com" target="_blank"
            ><img class="mr-5 w-6" src="~/assets/images/email.png" alt=""
          /></a>
          <a href="https://twitter.com/iam_zencoder" target="_blank"
            ><img class="mr-5 w-6" src="~/assets/images/twitter.png" alt=""
          /></a>
          <a href="https://www.linkedin.com/in/luckyadogun/" target="_blank"
            ><img class="mr-5 w-6" src="~/assets/images/linkedin.png" alt=""
          /></a>
        </div>
        <p class="text-center text-sm mt-20 text-gray-600">
          Built with ❤️ by
          <a
            class=" font-bold"
            href="https://twitter.com/iam_zencoder"
            target="_blank"
            >ZenCoder</a
          >
          with
          <a
            class=" font-bold"
            href="https://vuejs.org/"
            rel="nofollow"
            target="_blank"
            >VueJS</a
          >,
          <a
            class=" font-bold"
            href="https://nuxtjs.org/"
            rel="nofollow"
            target="_blank"
            >NuxtJS</a
          >,
          <a
            class=" font-bold"
            href="https://tailwindcss.com/"
            rel="nofollow"
            target="_blank"
            >TailwindCSS</a
          >
          and
          <a
            class=" font-bold"
            href="https://en.wikipedia.org/wiki/H2O"
            rel="nofollow"
            target="_blank"
            >H2O</a
          >
        </p>
      </footer>
    </div>

    <div id="web" class="hidden lg:block xl:block">
      <div id="cover" class="flex h-screen">

        <div class="bg-theme-secondary w-1/2 p-8">
          <div class="flex justify-center text-white md:text-sm mb-40 mx-20">
            <NuxtLink to="/"><p class="mr-4 xl:mr-14 font-bold">What to Expect?</p></NuxtLink>
            <a class="mr-4 xl:mr-14" target="_blank" href="https://drive.google.com/file/d/1iSrxZ0wALQALk3xox1HAwy3LgD6xyRYc/view?usp=sharing">Download CV</a>
            <!-- <NuxtLink to="/"><p class="mr-4 xl:mr-14">Download CV</p></NuxtLink> -->
            <NuxtLink to="/"><p class="mr-4 xl:mr-14">Books</p></NuxtLink>
            <NuxtLink to="/"><p class="mr-4 xl:mr-14">OSS</p></NuxtLink>
            <NuxtLink to="/"><p class="mr-4 xl:mr-14">LifeOutsideTech</p></NuxtLink>
          </div>

          <div class="mx-20">
              <p
                style="font-family:'PT Mono', monospace;"
                class="flex items-center justify-self-auto text-white text-lg xl:text-2xl"
                v-for="(item, index) in backEndStacks.slice(0, backEndStacks.length)"
                :key="index">
              
                {{ item.topic }}
              
                <span style="font-family:'Quicksand', sans-serif;" class="text-sm ml-6 hidden sm:block font-normal"
                  >[ <a target="_blank" :href="item.projectLink">Projects</a>,
                  <a target="_blank" :href="item.repo">Github</a>,
                  <a target="_blank" :href="item.blog">Posts</a>
                  ]
                </span>
              </p>              
          </div>

        </div>

        <div class="bg-theme-tertiary w-1/2 p-8">
          <div class="flex justify-end mb-40 mx-20">
            <NuxtLink to="/">
              <Logo />
            </NuxtLink>
          </div>

          <div class="mx-20">
              <p
                style="font-family:'PT Mono', monospace;"
                class="flex items-center justify-end text-lg xl:text-2xl"
                v-for="(item, index) in frontEndStacks.slice(0, frontEndStacks.length)"
                :key="index">
              
                {{ item.topic }}
              
                <span style="font-family:'Quicksand', sans-serif;" class="text-sm ml-3 hidden sm:block font-normal"
                  >[ <a target="_blank" :href="item.projectLink">Projects</a>,
                  <a target="_blank" :href="item.repo">Github</a>,
                  <a target="_blank" :href="item.blog">Posts</a>
                  ]
                </span>
              </p> 

              <p class="hidden xl:flex flex-col text-right mt-20 xl:text-4xl" style="font-family: 'Homemade Apple', cursive;">
                LuckyAdogun
                <span class="text-lg tracking-widest" style="font-family: 'Quicksand', sans-serif;">[ ZenCoder ]</span>
              </p>             
          </div>
        </div>

        <div class="image-cover">
          
        </div>
      </div>  

      <div class="w-full h-full px-10 py-5" style="font-family: 'Quicksand', sans-serif;">
          <p class="font-bold text-sm mb-4">Notable Projects Supported</p>
          <div class="flex xl:justify-between lg:justify-center">
            <img src="~/assets/images/projects.png" alt="" />   
            <div id="social" class="lg:hidden xl:flex items-center">
                <a href="mailto: meetluckyadogun@gmail.com" target="_blank"
                  ><img class="mr-12 w-6" src="~/assets/images/email.png" alt=""
                /></a>
                <a href="https://twitter.com/iam_zencoder" target="_blank"
                  ><img class="mr-12 w-6" src="~/assets/images/twitter.png" alt=""
                /></a>
                <a href="https://www.linkedin.com/in/luckyadogun/" target="_blank"
                  ><img class="mr-12 w-6" src="~/assets/images/linkedin.png" alt=""
                /></a>
            </div>        
          </div>
      </div>
          
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
        {
          topic: 'Algorithm Design',
          projectLink: 'http://www.example.com',
          repo: 'http://www.google.com',
          blog: 'http://www.blog.coom'
        },
        {
          topic: 'JavaScript',
          projectLink: 'http://www.example.com',
          repo: 'http://www.google.com',
          blog: 'http://www.blog.coom'
        },
        {
          topic: 'NodeJS',
          projectLink: 'http://www.example.com',
          repo: 'http://www.google.com',
          blog: 'http://www.blog.coom'
        },
        {
          topic: 'NextJS',
          projectLink: 'http://www.example.com',
          repo: 'http://www.google.com',
          blog: 'http://www.blog.coom'
        },
        {
          topic: 'Strapi',
          projectLink: 'http://www.example.com',
          repo: 'http://www.google.com',
          blog: 'http://www.blog.coom'
        },
        {
          topic: 'Python',
          projectLink: 'http://www.example.com',
          repo: 'http://www.google.com',
          blog: 'http://www.blog.coom'
        },
        {
          topic: 'Django',
          projectLink: 'http://www.example.com',
          repo: 'http://www.google.com',
          blog: 'http://www.blog.coom'
        },
        {
          topic: 'FastAPI',
          projectLink: 'http://www.example.com',
          repo: 'http://www.google.com',
          blog: 'http://www.blog.coom'
        },
        {
          topic: 'Docker',
          projectLink: 'http://www.example.com',
          repo: 'http://www.google.com',
          blog: 'http://www.blog.coom'
        },
        {
          topic: 'AmazonS3',
          projectLink: 'http://www.example.com',
          repo: 'http://www.google.com',
          blog: 'http://www.blog.coom'
        }
      ],
      frontEndStacks: [
        {
          topic: 'UI/UX',
          projectLink: 'http://www.example.com',
          repo: 'http://www.example.com',
          blog: 'http://www.example.com'
        },
        {
          topic: 'HTML',
          projectLink: 'http://www.example.com',
          repo: 'http://www.example.com',
          blog: 'http://www.example.com'
        },
        {
          topic: 'CSS',
          projectLink: 'http://www.example.com',
          repo: 'http://www.example.com',
          blog: 'http://www.example.com'
        },
        {
          topic: 'VueJS',
          projectLink: 'http://www.example.com',
          repo: 'http://www.example.com',
          blog: 'http://www.example.com'
        },
        {
          topic: 'NuxtJS',
          projectLink: 'http://www.example.com',
          repo: 'http://www.example.com',
          blog: 'http://www.example.com'
        },
        {
          topic: 'Flutter',
          projectLink: 'http://www.example.com',
          repo: 'http://www.example.com',
          blog: 'http://www.example.com'
        },
        {
          topic: 'Netlify',
          projectLink: 'http://www.example.com',
          repo: 'http://www.example.com',
          blog: 'http://www.example.com'
        }
      ]
    }
  },
}
</script>

<style>

.image-cover{
  position: absolute;
  background-image: url('https://res.cloudinary.com/zencoder/image/upload/v1604416121/zencoder__dark_i38quk.png');
  background-repeat: no-repeat;
  background-size: 760px;
  background-position: center;
  top: 4%;
  left: 20%;
  right: 20%;
  bottom: 0%;
  pointer-events: none
}

@media only screen and (max-width: 1200px) {
  .image-cover{
      position: absolute;
      background-image: url('https://res.cloudinary.com/zencoder/image/upload/v1604416121/zencoder__dark_i38quk.png');
      background-repeat: no-repeat;
      background-size: 690px;
      background-position: center;
      top: 4%;
      left: 20%;
      right: 20%;
      bottom: -9%;
  }
}
</style>

