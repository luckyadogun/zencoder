<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-col items-center justify-center justify-items-center m-auto">
        <img class="inline object-cover w-24 h-24 mr-2 rounded-full bg-white" :src="mainPhoto"/>
        <h1 class="my-5 text-lg font-bold">Hi, I'm Lucky 👋</h1>
        <h1 class="my-5 text-4xl md:text-5xl lg:text-6xl lg:px-32 xl:px-56 tracking-tighter leading-tight md:leading-none text-center font-bold">
          Free Tools, Tips & Techniques for Founders to Build and Launch <span class="italic">Low-Cost</span> 
          <span class="text-theme-tertiary underline">Scalable</span> SaaS MVPs 10X Faster
        </h1>
        <p class="my-5 mb-10 text-sm xl:text-lg md:text-md tracking-tight md:px-12 lg:px-30 text-center font-semibold text-theme-secondary">
          I have built many MVPs, for many clients, even for the
          <span class="font-bold text-white">Government of Nigeria <br class="hidden lg:block">under the Ministry of Budget and Urban Planning. </span>
          If they can trust me, maybe, so can you.
        </p>
        <Button class="mb-16" cta='Get Free Access' />
        
        <!-- Cards -->
        <div id="cards" class="my-5">
          <h1 class="text-center md:text-xl font-medium tracking-tight leading-tight text-md mb-5">
              What's the ONE thing you need right now<br class="hidden md:block">
              to move your idea closer to reality?
          </h1>

          <div class="flex flex-col md:flex-row lg:px-32 w-full">
              <div class="block md:mr-5">
                <sequential-entrance fromLeft delay="2000"><Card :cardData="cardData1" /></sequential-entrance>
                <sequential-entrance fromTop delay="2000"><Card :cardData="cardData2" /></sequential-entrance>            
              </div>
          
              <div class="block md:mr-5">
                <sequential-entrance fromRight delay="2000"><Card :cardData="cardData3" /></sequential-entrance>
                <sequential-entrance fromBottom delay="4000"><Card :cardData="cardData4" /></sequential-entrance>            
              </div>          
          </div>      
        </div>

        <div class="text-center text-sm mb-8">
          <p class="text-md tracking-tight text-lg font-bold">
            *AND LOT'S MORE, including, FREE <span class="font-bold text-theme-tertiary">idea validation-pages</span> and<br> closed-source Python & JavaScript libraries customizable to fit your startup needs*
          </p>
        </div>
        <Button class="my-2" cta='Get Free Access' />

        <hr class="my-10 w-full border-theme-tertiary border-dashed">

        <div class="text-center mb-10">
          <p class="italic font-semibold text-md mb-8">Want to hire me instead?</p>
          <a href="mailto:meetluckyadogun@gmail.com" class="font-bold border-2 border-dashed p-3 border-theme-tertiary rounded-lg text-white">LET'S DISCUSS</a>
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
          price: "Worth $1500+",
          photo: cardImage1,
          title: "I NEED a Non-Biased cost and time estimate for SaaS MVP",
          body: `
            Two-thirds of projects significantly overrun their cost and exceed their scheduled release date.
            Let me work with you to avoid these common pitfalls and reach the market faster than the competition.
          `
        },
        cardData2: {
          price: "Worth $800+",
          photo: cardImage2,
          title: `
                  I NEED to know the best tech-stack 
                  to build my SaaS MVP 10X Faster?
                `,
          body: `
            The current technological boom has created many opportunities and a huge paradox
            of choice. Today's technologies could likely become obsolete in a few years,
            months or even weeks from now. Let's work together in picking a tech-stack that works for you.
          `
        },
        cardData3: {
          price: "Worth $2500+",
          photo: cardImage4,
          title: `
            I NEED a SaaS Product Roadmap with less opportunity cost?
          `,
          body: `
            What direction is your product taking? How do you plan to handle 
            uncertainty? Learn simple steps to avoid the dilemma of build-trap 
            and navigate from a project to a product.
          `
        },
        cardData4: {
          price: "Worth $500+",
          photo: cardImage3,
          title: `
            I NEED a decision-matrix to hire proficient and cost-effective devs
          `,
          body: `
            The most important factor in building a successful product is the human capital at your disposal.
            Leverage my experience working with engineers and designers within the sector to hire the best 
            talent that fit your project without going through hundreds of resumes.
          `
        },
      }
  },
  components: {
    ChevronsDownIcon
  }
}
</script>