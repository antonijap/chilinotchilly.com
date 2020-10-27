<template>
    <div class="bg-mustard pb-20">
        <div class="container mx-auto md:px-12 mobile:px-4">
            <section class="flex content-center flex-wrap h-screen">
                <img src="../assets/img/chili.svg" alt="Chilinotchilly logo" class="mobile:w-12 mobile:mx-auto ml-12 mb-20 rotate">
                <h1 class="xl:text-xxl lg:text-xl sm:text-lg mobile:text-md font-black leading-none mb-12 mobile:mb-4">{{ header }}</h1>
                <h2 class="sm:text-md leading-normal">{{ copy_01 }}</h2>
            </section>
            <section>
                <h3 class="lg:text-lg leading-none mb-12 mobile:mb-4 sm:text-lg mobile:text-md">Our workflow</h3>
                <p class="sm:text-md leading-normal">{{ copy_02 }}</p>
            </section>
            <section class="mt-64 mobile:mt-32">
                <h3 class="lg:text-lg lg:leading-none mb-12 mobile:mb-4 sm:text-lg mobile:text-md">Get in touch</h3>
                <p class="sm:text-md leading-normal mb-12">{{ copy_03 }}</p>
                <a href="mailto:hi@chilinotchilly.com" class="lg:text-lg sm:text-lg underline">hi@chilinotchilly.com</a>
                <img src="../assets/img/chili-team.jpg" class="my-40 mobile:my-12" alt="Chili team">
            </section>
            <footer>
                <p class="sm:text-md leading-normal">Developed and designed by Chilinotchilly in Finland 🇫🇮</p>
            </footer>
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
  animation: rotation 10s infinite linear;
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