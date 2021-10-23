<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-col items-center justify-center justify-items-center m-auto">
        <img class="inline object-cover w-24 h-24 mr-2 rounded-full bg-white" :src="mainPhoto"/>
        <h1 class="my-5 text-lg font-bold">Hi, I'm Lucky 👋</h1>
        <h1 class="my-5 text-3xl md:text-5xl lg:text-6xl lg:px-56 tracking-tighter leading-tight md:leading-none text-center font-bold">
          Everything You Need to Build & Launch Low-Cost 
          Scalable SaaS MVPs 10X Faster
        </h1>
        <p class="my-5 text-xs md:text-sm lg:text-lg tracking-tight md:px-10 lg:px-56 text-center font-semibold text-theme-secondary">
          I have done it many times, for many clients, even for the
          <span class="font-bold text-white">Federal Government of Nigeria <br class="hidden md:block">for the Ministry of Budget and Urban Planning. </span>
          If they can trust me, maybe you can. So feel free to reach out.
        </p>
        <Button class="my-5" cta='Ask Me Anything' />
        
        
        <!-- Cards -->
        <div id="cards" class="my-5">
          <h1 class="text-center font-bold tracking-tight leading-tight text-lg">
              Take any of the steps below.
              Move from wanting to doing.
          </h1>
          
          <div>
            <sequential-entrance fromTop delay="2000"><Card :cardData="cardData1" /></sequential-entrance>
            <sequential-entrance fromRight delay="4000"><Card :cardData="cardData2" /></sequential-entrance>
            <sequential-entrance fromBottom delay="8000"><Card :cardData="cardData3" /></sequential-entrance>
            <sequential-entrance fromLeft delay="1600"><Card :cardData="cardData4" /></sequential-entrance>
          </div>
        </div>

        <div class="text-center font-bold tracking-tight leading-tight text-sm mb-8">
          <p class="mb-5">
            I didn’t take any of the steps above, 
            I want a CTO to guide our startup 
            to success technically
          </p>
          <a href="" class="text-theme-tertiary underline">PARTNER WITH A DIGITAL CTO. IT’S FREE</a>
        </div>

        <hr class="w-full mb-5 border-theme-tertiary border-dashed">

        <div class="text-center mb-10">
          <p class="italic font-semibold text-xs">Want to hire me instead?</p>
          <Button class="my-5" cta='Download my resume' />
        </div>
    </div>
    
  </div>
</template>

<script>
import { ChevronsDownIcon } from 'vue-feather-icons'

import mainPhoto from '~/assets/images/zencoder__dark.png'
import cardImage1 from '~/assets/images/07.png'
import cardImage2 from '~/assets/images/02.png'
import cardImage3 from '~/assets/images/08.png'
import cardImage4 from '~/assets/images/09.png'

export default {
  data() {
      return {
        title: 'Home',
        mainPhoto: mainPhoto,
        cardData1: {
          price: "$1500",
          photo: cardImage1,
          title: "How long will my SaaS project take and how much would it cost?",
          body: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          `
        },
        cardData2: {
          price: "FREE",
          photo: cardImage2,
          title: `
                  What’s the best tech-stack 
                  to go from idea to MVP 10X Faster 
                  with little or no trade-offs?
                `,
          body: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          `
        },
        cardData3: {
          price: "$2500",
          photo: cardImage4,
          title: `
            What Product Roadmap should I take with less opportunity cost?
          `,
          body: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          `
        },
        cardData4: {
          price: "$500",
          photo: cardImage3,
          title: `
            I have several prospective 
            developers with equally attractive 
            CV’s whom should I hire?
          `,
          body: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          `
        },
      }
  },
  components: {
    ChevronsDownIcon
  }
}
</script>