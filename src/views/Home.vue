<template>
    <div class="bg-mustard pb-20">
        <div class="container mx-auto">
            <section class="flex content-center flex-wrap h-screen">
                <img src="../assets/img/chili.svg" alt="Chilinotchilly logo" class="mb-20 pl-12 rotate">
                <h1 class="lg:text-xl lg:leading-none font-black mb-12">{{ header }}</h1>
                <h2 class="lg:text-md lg:leading-normal">{{ copy_01 }}</h2>
            </section>
            <section>
                <h3 class="lg:text-lg lg:leading-none mb-12">Our workflow</h3>
                <p class="lg:text-md lg:leading-normal">We work as a team. A team that also includes you. This means less ping-ponging files, no waiting, and zero unnecessary bullshit. Just high-quality design. We are transparent, efficient, and always within your budget. And the best part — no industry jargon, we talk like humans.</p>
            </section>
            <section class="mt-64">
                <h3 class="lg:text-lg lg:leading-none mb-12">Get in touch</h3>
                <p class="lg:text-md lg:leading-normal mb-12">Every website is different. Some sites have more content, some are more complex. What matters is what you need. Chilinotchilly is your creative co-worker in the process. We will help you to determine what is relevant for your website. Once the right balance is found, it is time for action. The Chilinotchilly team is packed with skills to help you to get the right content done. From photos to copy, and all the way to product design and branding, we will help you to create exactly what you need to build your kickass website.</p>
                <a href="mailto:hi@chilinotchilly.com" class="lg:text-lg lg:leading-normal underline">hi@chilinotchilly.com</a>
                <img src="../assets/img/chili-team.jpg" class="my-40" alt="Chili team">
            </section>
            <footer>
                <p class="lg:text-md lg:leading-normal">Developed and designed by Chilinotchilly in Finland 🇫🇮</p>
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