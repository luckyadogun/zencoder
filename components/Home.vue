<template>
  <div id="home">

    <div id="mobile" class="lg:hidden pt-10">
      <div class="flex flex-col items-center justify-center">
        <NuxtLink to="/">
          <Logo />
        </NuxtLink>
      </div>
      <div class="flex justify-center my-10 mx-0 text-xs md:text-lg text-center">
        <NuxtLink to="/whyhireme"
          ><p class="mr-2 md:mr-12 font-extrabold">Why Hire Me?</p></NuxtLink
        >
        <a class="mr-2 md:mr-12" target="_blank" :href="resumeUrl">Download CV</a>
        <NuxtLink to="/"><p class="mr-2 md:mr-12">Books</p></NuxtLink>
        <NuxtLink to="/"><p class="mr-2 md:mr-12">OSS</p></NuxtLink>
        <NuxtLink to="/"
          ><p class="mr-2 md:mr-12">
            LifeOutsideTech
          </p></NuxtLink
        >
      </div>
      <div class="flex justify-center">
        <img :src="imageUrl" alt="zencoder" />
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
            <NuxtLink to="/whyhireme"><p class="mr-4 xl:mr-14 font-bold">Why Hire Me?</p></NuxtLink>
            <a class="mr-4 xl:mr-14" target="_blank" :href="resumeUrl">Download CV</a>
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

        <div class="image-cover"></div>
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
      imageUrl: 'https://res.cloudinary.com/zencoder/image/upload/v1604416121/zencoder__dark_i38quk.png',
      resumeUrl: 'https://drive.google.com/file/d/1JW0o8q6KimZocJvAWVoqLq5pVxlPysjl/view?usp=sharing',
      HtmlSubTitles: ['< backend_stacks />', '< frontend_stacks />'],
      backEndStacks: [
        // {
        //   topic: 'Algorithm Design',
        //   projectLink: 'https://github.com/luckyadogun/leetcode',
        //   repo: 'https://github.com/luckyadogun/leetcode',
        //   blog: 'https://dev.to/iam_zencoder/series/9573'
        // },
        {
          topic: 'JavaScript',
          projectLink: 'https://brandshack.herokuapp.com/',
          repo: '#',
          blog: '#'
        },
        // {
        //   topic: 'NodeJS',
        //   projectLink: '#',
        //   repo: '#',
        //   blog: '#'
        // },
        // {
        //   topic: 'NextJS',
        //   projectLink: '#',
        //   repo: '#',
        //   blog: '#'
        // },
        
        // {
        //   topic: 'Strapi',
        //   projectLink: '#',
        //   repo: '#',
        //   blog: '#'
        // },
        {
          topic: 'Python',
          projectLink: 'https://www.darader.com/',
          repo: 'https://github.com/luckyadogun/timberinvoice',
          blog: '#'
        },
        {
          topic: 'Django/Django RESTAPI',
          projectLink: 'https://evening-lake-45761.herokuapp.com/',
          repo: 'https://github.com/luckyadogun/timberinvoice',
          blog: '#'
        },
        // {
        //   topic: 'FastAPI',
        //   projectLink: '#',
        //   repo: '#',
        //   blog: '#'
        // },
        {
          topic: 'Docker',
          projectLink: 'https://www.darader.com/',
          repo: 'https://github.com/luckyadogun/timberinvoice/blob/master/Dockerfile',
          blog: '#'
        },
        {
          topic: 'AmazonS3',
          projectLink: 'https://darader-assets.s3.us-east-2.amazonaws.com/media/property/DBv0kVxICST2/images/46D909BC-2485-4231-BCC4-62137CAC0782.jpeg',
          repo: 'https://github.com/luckyadogun/AmazonS3-Samples/blob/main/amazons3.py',
          blog: ''
        },
        {
          topic: 'Heroku',
          projectLink: 'https://agile-inlet-28736.herokuapp.com/',
          repo: 'https://github.com/luckyadogun/AmazonS3-Samples/blob/main/amazons3.py',
          blog: ''
        }
      ],
      frontEndStacks: [
        {
          topic: 'UI/UX',
          projectLink: 'https://dribbble.com/YoYoBerry',
          repo: 'https://dribbble.com/YoYoBerry',
          blog: '#'
        },
        {
          topic: 'HTML/CSS3',
          projectLink: 'https://codepen.io/luckyadogun',
          repo: 'https://codepen.io/luckyadogun',
          blog: '#'
        },
        {
          topic: 'TailwindCSS',
          projectLink: 'https://compassionate-varahamihira-dbe085.netlify.app/',
          repo: 'https://github.com/luckyadogun/zencoder',
          blog: '#'
        },
        {
          topic: 'VueJS',
          projectLink: 'https://epic-hamilton-21cf1f.netlify.app/',
          repo: 'https://github.com/luckyadogun/zencoder',
          blog: '#'
        },
        {
          topic: 'NuxtJS',
          projectLink: 'https://compassionate-varahamihira-dbe085.netlify.app/',
          repo: 'https://github.com/luckyadogun/zencoder',
          blog: '#'
        },
        // {
        //   topic: 'Flutter',
        //   projectLink: '#',
        //   repo: '#',
        //   blog: '#'
        // },
        {
          topic: 'Netlify',
          projectLink: 'https://epic-hamilton-21cf1f.netlify.app/',
          repo: '#',
          blog: '#'
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

