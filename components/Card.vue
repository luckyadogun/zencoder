<template>
    
        <a href="mailto:meetluckyadogun@gmail.com" class="text-center p-5 bg-white my-6 md:my-3 rounded-3xl text-black flex flex-col justify-center">
            <div class="flex justify-end">
                <p class="bg-theme-dark mb-5 py-1 px-2 text-xs w-20 md:w-32 text-theme-tertiary rounded-3xl md:rounded-2xl font-bold">{{cardData.price}}</p>
            </div>
            <div class="flex flex-col items-center p-5">
                <img :src="cardData.photo" class="w-2/5 md:w-2/5 mb-3" alt="">
                <p class="font-extrabold tracking-tighter leading-tight text-xl md:text-sm lg:text-lg">
                    {{ cardData.title }}
                </p>
                <p class="text-xs my-5 tracking-tight leading-tight md:text-sm">
                    {{ cardData.body }}
                </p>
                <p class="underline text-sm font-bold text-theme-tertiary">Learn More</p>
            </div>
        </a>
</template>


<script>
import cardImage from '~/assets/images/07.png'

export default {
    props: {
        cardData: Object
    },
    data() {
        return {
            cardImage: cardImage
        }
    }
}
</script>