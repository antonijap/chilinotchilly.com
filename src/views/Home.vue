<template>
    <div class="bg-mustard text-primary">
        <img src="../assets/img/chili.svg" alt="Chilinotchilly logo" class="absolute top-0 w-2/4 rotate">
        <div class="container mx-auto md:px-12 mobile:px-10">
            <section class="flex content-center flex-wrap h-screen relative">
                <h1 class="xl:text-xl lg:text-xl sm:text-lg mobile:text-md font-black leading-none mb-12 mobile:mb-4">{{ header }}</h1>
                <h2 class="md:text-md sm:text-xmd leading-normal">{{ copy_01 }}</h2>
            </section>
            <section class="relative" data-aos="fade-up" data-aos-offset="400" data-aos-easing="ease-out">
                <h3 class="lg:text-lg leading-none mb-12 mobile:mb-4 sm:text-lg mobile:text-md">Our workflow</h3>
                <p class="md:text-md sm:text-xmd leading-normal">{{ copy_02 }}</p>
            </section>
            <section id="contact" class="mt-64 mobile:mt-32 relative" data-aos="fade-up" data-aos-easing="ease-out" data-aos-delay="300" data-aos-anchor-placement="top-bottom">
                <h3 class="lg:text-lg lg:leading-none mb-12 mobile:mb-4 sm:text-lg mobile:text-md">Get in touch</h3>
                <p class="md:text-md sm:text-xmd leading-normal mb-12">{{ copy_03 }}</p>
            </section>
            <section data-aos="flip-up" data-aos-easing="ease-out" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">
                <span class="lg:text-lg sm:text-lg">👉 </span><a href="mailto:hi@chilinotchilly.com" class="lg:text-lg sm:text-lg underline">hi@chilinotchilly.com</a>
            </section>
            <img src="../assets/img/chili-team.png" class="mt-40 mobile:mt-12" alt="Chili team" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="1000" data-aos-anchor-placement="bottom-center">
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