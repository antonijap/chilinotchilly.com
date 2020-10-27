<template>
    <div class="bg-mustard text-primary">
        <img src="../assets/img/chili.svg" alt="Chilinotchilly logo" class="absolute top-0 w-2/4 rotate">
        <div class="container mx-auto md:px-12 mobile:px-10">
            <section class="flex content-center flex-wrap h-screen relative">
                <h1 class="xl:text-xl lg:text-xl sm:text-lg mobile:text-xmd font-black leading-none mb-12 mobile:mb-4">{{ header }}</h1>
                <h2 class="md:text-md sm:text-xmd leading-normal">{{ copy_01 }}</h2>
            </section>
            <section class="relative workflow" data-aos="zoom-out" data-aos-anchor-placement="top-center">
                <h3 class="lg:text-lg leading-none mb-12 mobile:mb-4 sm:text-lg mobile:text-md">Our workflow</h3>
                <p class="md:text-md sm:text-xmd leading-normal">{{ copy_02 }}</p>
            </section>
            <section class="contact mt-64 mobile:mt-32 relative" data-aos="zoom-out" data-aos-anchor-placement="center-center">
                <h3 class="lg:text-lg lg:leading-none mb-12 mobile:mb-4 sm:text-lg mobile:text-md">Get in touch</h3>
                <p class="md:text-md sm:text-xmd leading-normal mb-12">{{ copy_03 }}</p>
            </section>
            <section class="mail" data-aos="flip-up" data-aos-delay="500" data-aos-duration="500" data-aos-anchor-placement="center-center">
                <span class="lg:text-lg sm:text-lg mobile:hidden">👉 </span><a href="mailto:hi@chilinotchilly.com" class="lg:text-lg sm:text-lg mobile:text-xmd underline">hi@chilinotchilly.com</a>
            </section>
            <img src="../assets/img/chili-team.png" class="mt-40 mobile:mt-12" alt="Chili team" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="bottom-center" data-aos-anchor=".mail">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
        header: null,
        copy_01: null,
        copy_02: null,
        copy_03: null,
    }
  },
  methods: {
    getContent() {
        this.$prismic.client.getSingle('home').then((document) => {
            this.header = document.data.header[0].text,
            this.copy_01 = document.data.copy_01[0].text
            this.copy_02 = document.data.copy_02[0].text
            this.copy_03 = document.data.copy_03[0].text
        });
    }
  },
  created () {
    this.getContent()
  }
}
</script>

<style lang="scss">
.rotate {
  animation: rotation 60s infinite linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>