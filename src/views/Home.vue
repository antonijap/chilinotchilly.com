<template>
    <div class="text-primary overflow-hidden bg-mustard">
        <img src="../assets/img/chili.svg" alt="Chilinotchilly logo" class="absolute top-0 w-2/4 rotate">
        <div class="container mx-auto md:px-12 mobile:px-6">
            <img src="../assets/img/logo.svg" alt="Chilinotchilly logo" class="mt-64 relative">
            <section class="flex content-center flex-wrap h-screen relative">
                <h1 class="xl:text-xl lg:text-xl sm:text-lg mobile:text-xlg font-black leading-none mb-12 mobile:mb-4">{{ header }}</h1>
                <h2 class="md:text-md sm:text-xmd leading-normal">{{ copy_01 }}</h2>
            </section>
            <section class="relative" v-scroll-reveal="{ scale: 1.2, delay: 250, duration: 800, distance: '100px' }">
                <h3 class="lg:text-lg leading-none mb-12 mobile:mb-4 sm:text-lg mobile:text-md">Our workflow</h3>
                <p class="md:text-md sm:text-xmd leading-normal">{{ copy_02 }}</p>
            </section>
            <section class="mt-64 mobile:mt-32 relative" v-scroll-reveal="{ scale: 1.2, delay: 250, duration: 800, distance: '100px', interval: 600 }">
                <h3 class="lg:text-lg lg:leading-none mb-12 mobile:mb-4 sm:text-lg mobile:text-md">Get in touch</h3>
                <p class="md:text-md sm:text-xmd leading-normal mb-12">{{ copy_03 }}</p>
            </section>
            <section v-scroll-reveal="{rotate: {z: 260}, scale: 1.2, duration: 800, distance: '100px', interval: 600 }">
                <!-- <span class="lg:text-lg sm:text-lg mobile:hidden">👉 </span><a href="mailto:hi@chilinotchilly.com" class="lg:text-lg sm:text-lg mobile:text-xmd underline">hi@chilinotchilly.com</a> -->
								<form
									name="ask-question"
									method="post"
									data-netlify="true"
									data-netlify-honeypot="bot-field"
									@submit.prevent="handleSubmit"
									>
									<input type="hidden" name="contact-form" value="ask-question" />
									<input v-model="form.email" type="email" name="email" id="email" placeholder="Email" class="appearance-none bg-white rounded w-full py-4 px-4 placeholder:text-gray-500 focus:outline-none focus:bg-white md:text-md sm:text-xmd leading-normal mb-4"></input>
									<textarea v-model="form.message" @input="ev => form.askPerson = ev.target.value" name="message" id="message" placeholder="Write something nice..." class="h-40 appearance-none bg-white rounded w-full py-4 px-4 placeholder:text-gray-500 focus:outline-none focus:bg-white md:text-md sm:text-xmd leading-normal mb-4"></textarea>
									<button class="text-primary px-4 py-6 rounded w-full border-4 border-primary md:text-md sm:text-xmd leading-normal hover:border-green-600 hover:text-white hover:bg-green-600">Submit</button>
								</form>
            </section>
              <section class="mt-64 mobile:mt-32 relative" v-scroll-reveal="{ scale: 1.2, delay: 250, duration: 800, distance: '100px', interval: 600 }">
                  <h3 class="lg:text-lg lg:leading-none mb-40 mobile:mb-4 sm:text-lg mobile:text-md">Latest from <a href="/blog">blog</a></h3>
                  <div class="grid grid-cols-2">
                    <div v-for="post in posts" :key="post.id" v-bind:post="post">
                      <router-link :to="linkResolver(post)">
                        <prismic-image :field="post.data.post_image"/>
                        <prismic-rich-text :field="post.data.post_title" class="text-primary mt-4 lg:text-md leading-small mobile:mb-4 sm:text-lg mobile:text-md"/>
                        <!-- <div>{{ post.data.date | moment("from", "now") }}</div> -->
                    </router-link>
                  	</div>          
              	</div>
            	</section>
            <img src="../assets/img/chili-team.webp" class="mt-40 mobile:mt-12 w-100" alt="Chili team" v-scroll-reveal="{ duration: 2000, origin: 'left', distance: '150%', opacity: null, interval: 600 }">
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data () {
    return {
        header: null,
        copy_01: null,
        copy_02: null,
        copy_03: null,
        posts: null,
				linkResolver: this.$prismic.linkResolver,
				form: {
        	message: "",
        	email: ""
      	}
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
    },
    getPosts() {
        this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'posts'),
        { orderings : '[posts.date desc]', pageSize : 2, }
        ).then((response) => {
            this.posts = response.results
        });        
		},
		encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "ask-question",
          ...this.form
        }),
        axiosConfig
			)
			.then(() => {
        this.$router.push('thanks')
      })
      .catch(() => {
        this.$router.push('404')
      })
    }
  },
  created () {
    this.getContent()
    this.getPosts()
	}
}
</script>

<style lang="scss">
.rotate {
  animation: rotation 60s infinite linear;
}
button {
	transition: all 200ms ease-in;
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