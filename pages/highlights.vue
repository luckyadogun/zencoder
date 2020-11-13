<template>
  <div>
    <div id="mobile" class="lg:hidden pt-10">
      <div id="mobile">
        <MobileHeader />
      </div>
      <div class="bg-theme-tertiary p-10">
        <MyHighlights />
      </div>
      <div>
        <MobileFooter />
      </div>
    </div>

    <div id="web" class="hidden lg:block xl:block bg-theme-tertiary">
      <div class="text-black p-8 xl:text-lg md:text-sm">
        <div class="flex justify-between items-center mx-20">          
          <WebHeader />
          <NuxtLink to="/">
            <Logo />
          </NuxtLink>
        </div>
      </div>
      <div class="py-20 px-64 h-screen flex justify-center text-center">
        <MyHighlights />
      </div>
      <div class="bg-white">
        <WebFooter />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
