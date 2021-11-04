<template>
    <div class="accordion flex flex-col">
        <!--  Panel 1  -->
        <div class="w-full">
            <input type="checkbox" name="panel" id="panel-1" class="hidden">
            <label for="panel-1" class="relative block bg-black text-white p-4 shadow border-b border-grey">For Founders</label>
            <div class="accordion__content overflow-hidden bg-grey-lighter">
                <h2 class="accordion__header font-medium pt-4 pl-4">Who am I and what can I do for you?</h2>
                <p class="accordion__body p-4">
                    I am a SaaS product engineer passionate about building MVPs for startups. I have built many MVPs for many clients within many industries, 
                    even for the Federal Government of Nigeria for a called <a target="_blank" class="font-medium underline text-theme-tertiary" href="https://www.thisdaylive.com/index.php/2021/04/12/fg-to-launch-web-based-solution-for-project-monitoring/">Eyemark&trade;</a> 
                    which is currently being used by the <a target="_blank" class="font-medium underline text-theme-tertiary" href="https://nationalplanning.gov.ng/">Federal Ministry of Budget and National Planning.</a>                    
                </p>
                <p class="accordion__body p-4">
                    I also work with solo, non-tech founders without a CTO as a side-kick in helping them make better tech-inclined business decisions. 
                    If that sounds like something you are interested in, feel free to reach out via <a class="font-medium underline text-theme-tertiary" href="mailto:meetluckyadogun@gmail.com">email</a>
                </p>                    
            </div>
        </div>
        <!-- Panel 2 -->
        <div class="w-full">
            <input type="checkbox" name="panel" id="panel-2" class="hidden">
            <label for="panel-2" class="relative block bg-black text-white p-4 shadow border-b border-grey">For Recruiters</label>
            <div class="accordion__content overflow-hidden bg-grey-lighter">

                <h2 class="accordion__header font-medium pt-4 pl-4">Who am I?</h2>
                <p class="accordion__body p-4">
                    I fancy myself a product engineer. I work essentially with Python and JavaScript and love being around the 
                    startup ecosystem due to its fast-moving nature. I am highly stimulated by rigorous and innovative thinking
                    and find it to be the best fit for my personality. I love structure and fancy clean, and well-structured code.

                </p>
                <h2 class="accordion__header font-medium pt-4 pl-4">What can I do for you?</h2>
                <p class="accordion__body p-4">
                    I have vast experience building software services using Python and Django due to their fast prototyping nature.
                    I have worked in both enterprise and startup environments and understand what it takes to build a well-structured
                    and scalable system that meets the needs of its users and developers alike.

                    <nuxt-link class="font-medium underline text-theme-tertiary" to="toolbox">You can read more about my stack here</nuxt-link>
                </p>
                <h2 class="accordion__header font-medium pt-4 pl-4">What hiring styles/roles best suit me?</h2>
                <p class="accordion__body p-4">
                    Although I have some design skills (my journey started with computer graphics in high-school), I am best suited for a Backend role.
                    I have held full-time positions, worked as a freelancer and worked as a contractor. I have discovered that whatever work style 
                    I am involved with, one thing is constant: is code will be written for the purpose of the business. That is the most essential.            
                </p>
                <h2 class="accordion__header font-medium pt-4 pl-4">How can I perform best while running a coaching service?</h2>
                <p class="accordion__body p-4">
                    Like most developers, a chunk of my free time is spent working on side-projects. <a class="font-medium underline text-theme-tertiary" href="https://github.com">GitHub</a>
                    is filled with a ton of those projects which are more than often abandoned. My coaching is my side project but channeled in a more specific way such that its impact is beneficial
                    to those it serves. This helps me keep my creative juice flowing and avoid burn-out.
                </p>
                <p class="accordion__body p-4">
                    If you have more questions, feel free to reach out via <a class="font-medium underline text-theme-tertiary" href="mailto:meetluckyadogun@gmail.com">email</a>
                </p>
            </div>
        </div>
        <!--  Panel 3  -->
        <div class="w-full">
            <input type="checkbox" name="panel" id="panel-3" class="hidden">
            <label for="panel-3" class="relative block bg-black text-white p-4 shadow border-b border-grey">For Developers</label>
            <div class="accordion__content overflow-hidden bg-grey-lighter">
                <h2 class="accordion__header font-medium pt-4 pl-4">Who am I and What can I do for you?</h2>
                <p class="accordion__body p-4">
                    I am a fellow dev like you. This means two things, I am eager to learn from you and also share some of my ideas about Python, SaaS and building MVPs with you - if that's your thing.
                    
                </p>
                <p class="accordion__body p-4">
                    You may also find that my stack includes Python. If you are coming from a different eco-system, you will find my writings here. I try to make them easily digestable. 
                    I am constantly learning and trying new things out so keep an eye on my <a target="_blank" class="font-medium underline text-theme-tertiary" href="https://blog.luckyadogun.com">blog.</a>
                </p>
                <p class="accordion__body p-4">
                    If you find any of my <a target="_blank" class="font-medium underline text-theme-tertiary" href="https://github.com/luckyadogun">open source projects</a> interesting and want to collaborate, feel free to reach me via <a class="font-medium underline text-theme-tertiary" href="mailto:meetluckyadogun@gmail.com">email</a> and we can hopefully work together.
                </p>
            </div>
        </div>
        <!--  Panel 4  -->
        <div class="w-full">
            <input type="checkbox" name="panel" id="panel-4" class="hidden">
            <label for="panel-4" class="relative block bg-black text-white p-4 shadow border-b border-grey">For Random Strangers</label>
            <div class="accordion__content overflow-hidden bg-grey-lighter">
                <h2 class="accordion__header font-medium pt-4 pl-4">Hey buddy, what can I do for you?</h2>
                <p class="accordion__body p-4">
                    Whatever your feild may be, I would like you to learn about SaaS (Software As A Service) apps and idea prototyping with MVPs (Minimum Viable Products). 
                    It doesn't matter if you are into marketing, rocket-science or real-estate, a big part of your business can be automated and there are 
                    people who would be happy to use your exisiting solution instead of building theirs. That's what SaaS is about.                    
                </p>
                <p class="accordion__body p-4">
                    If you find that idea stricking, shoot me an <a class="font-medium underline text-theme-tertiary" href="mailto:meetluckyadogun@gmail.com">email</a> 
                    and I would help glad to help you learn more about how it can be of benefit for your business.
                </p>
            </div>
        </div>
        <p class="my-3">
            I believe you must have found this part of this site interesting. 
            If I didn't cover any areas you expected, please feel free to ask me 
            anything you want via email and I will be happy to answer. 
            Stay sharp
        </p>   
    </div>
</template>

<style>
    label:after {
    content: '+';
    position: absolute;
    right: 1em;
    color: #fff;
    }

    input:checked + label:after {
    content: '-';
    line-height: .8em;
    }

    .accordion__content{
    max-height: 0em;
    transition: all 0.4s cubic-bezier(0.865, 0.14, 0.095, 0.87);
    }
    input[name='panel']:checked ~ .accordion__content {
    /* Get this as close to what height you expect */
    max-height: 50em;
    }
</style>