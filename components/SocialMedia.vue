<template>
    <div>
        <!-- <p class="text-xs mb-5 text-theme-secondary text-center">Let's stay connected:</p> -->
        <div class="flex justify-center">
            <a href="https://twitter.com/iam_zencoder" target="_blank"><twitter-icon size="1.5x" class="mr-3"></twitter-icon></a>
            <a href="https://www.linkedin.com/in/luckyadogun/" target="_blank"><linkedin-icon size="1.5x" class="mr-3"></linkedin-icon></a>
            <a href="https://github.com/luckyadogun" target="_blank"><github-icon size="1.5x" class="mr-3"></github-icon></a>
        </div>
         
    </div>
</template>

<script>
import { TwitterIcon, LinkedinIcon, GithubIcon  } from 'vue-feather-icons'

export default {
  components: {
    TwitterIcon,
    LinkedinIcon,
    GithubIcon,
  }
}
</script>