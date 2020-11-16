<template>
    <div v-if="!copy_01" class="container flex content-center justify-center h-screen">
      <img  src="../assets/img/spinner.svg" alt="spinner">
    </div>
    <div v-else class="text-primary overflow-hidden bg-mustard">
        <div class="container mx-auto md:px-12 mobile:px-6">
        <img src="../assets/img/chili.svg" alt="Chilinotchilly logo" class="absolute left-0 top-0 w-2/4 rotate">
            <section class="flex content-center flex-wrap xl:mt-40 relative">
                <img src="../assets/img/logo.svg" alt="Chilinotchilly logo" class="md:mt-24 mobile:mt-24 md:w-32 lg:mb-48">
                <h1 class="mobile:mt-32 xl:text-xl lg:text-xl sm:text-lg mobile:text-md font-black leading-none mb-12 mobile:mb-4">{{ header }}</h1>
                <h2 class="md:text-md sm:text-xmd leading-normal">{{ copy_01 }}</h2>
								<a class="py-6 px-6 bg-primary text-white rounded-lg md:text-xmd mt-10 rainbow rainbow-5 hover:text-primary" href="#contact">Get your website</a>
            </section>
            <section class="relative md:pt-40 mobile:mt-24" v-scroll-reveal="{ scale: 1.2, delay: 250, duration: 800, distance: '100px' }">
                <h3 class="lg:text-lg leading-none mb-12 mobile:mb-4 sm:text-lg mobile:text-md">Our workflow</h3>
                <p class="md:text-md sm:text-xmd leading-normal">{{ copy_02 }}</p>
            </section>
            <section class="md:pt-40 mobile:mt-24 relative" v-scroll-reveal="{ scale: 1.2, delay: 250, duration: 800, distance: '100px', interval: 600 }" id="contact">
                <h3 class="lg:text-lg lg:leading-none mb-12 mobile:mb-4 sm:text-lg mobile:text-md">Get in touch</h3>
                <p class="md:text-md sm:text-xmd leading-normal mb-12">{{ copy_03 }}</p>
            </section>
            <section v-scroll-reveal="{rotate: {z: 260}, scale: 1.2, duration: 800, distance: '100px', interval: 600 }" >
                <!-- <span class="lg:text-lg sm:text-lg mobile:hidden">👉 </span><a href="mailto:hi@chilinotchilly.com" class="lg:text-lg sm:text-lg mobile:text-xmd underline">hi@chilinotchilly.com</a> -->
								<form
									name="ask-question"
									method="post"
									data-netlify="true"
									data-netlify-honeypot="bot-field"
									@submit.prevent="checkForm"
									>
									<input type="hidden" name="contact-form" value="ask-question" />

									<input v-model="form.email" type="email" name="email" id="email" placeholder="Email" class="appearance-none bg-white rounded w-full py-4 px-4 placeholder:text-gray-500 focus:outline-none focus:bg-white md:text-md sm:text-xmd leading-normal mb-2" />
									
									<div v-if="form.emailError != null" class="bg-red-100 text-chili-red px-4 py-3 rounded relative mb-6" role="alert">
										<strong class="font-bold">{{ form.emailError }}</strong>
									</div>

									<textarea v-model="form.message" name="message" id="message" placeholder="Write something nice..." class="h-40 appearance-none bg-white rounded w-full py-4 px-4 placeholder:text-gray-500 focus:outline-none focus:bg-white md:text-md sm:text-xmd leading-normal mb-1"></textarea>

									<div v-if="form.messageError != null" class="bg-red-100 text-chili-red px-4 py-3 rounded relative mb-6" role="alert">
										<strong class="font-bold">{{ form.messageError }}</strong>
									</div>

									<button class="focus:outline-none text-white px-4 py-6 rounded w-full bg-primary md:text-md sm:text-xmd hover:text-white hover:bg-chili-green">Submit</button>
								</form>
            </section>
            <img src="../assets/img/chili-team.webp" class="mt-40 mobile:mt-12 w-100" alt="Chili team" v-scroll-reveal="{ duration: 2000, origin: 'left', distance: '150%', opacity: null, interval: 600 }">
        </div>
				<Footer />
    </div>
</template>

<script>
import axios from 'axios';
import Footer from './Footer';

export default {
	name: 'Home',
	components: {
    Footer
	},
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
					email: "",
					messageError: null,
					emailError: null
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
    handleSubmit() {
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
		},
		checkForm() {
      if (this.form.email && this.form.message) {
        this.handleSubmit()
      }

      this.form.emailError = null;
      this.form.messageError = null;

      if (!this.form.email) {
        this.form.emailError = "Uh oh, email is mandatory"
      }
      if (!this.form.message) {
        this.form.messageError = "No empty messages, write us something"
      }
    }
  },
  created () {
    this.getContent()
    this.getPosts()
	}
}
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
.rotate {
  animation: rotation 60s infinite linear;
}
.a{color: #E7484F}
.b{color: #F68B1D}
.c{color: #FCED00}
.d{color: #009E4F}
.e{color: #00AAC3}
.f{color:  #732982}
.rainbow{
  background-color: #343A40;
  border-radius: 4px;  
  color: #fff;
  cursor: pointer;
  padding: 8px 16px;
}
.rainbow{
  background-color: #343A40;
  border-radius: 4px;  
  color: #fff;
  cursor: pointer;
  padding: 8px 16px;
}
.rainbow-5:hover{
	 background-image:     
	 linear-gradient(
      to right, 
      #E7484F,
      #E7484F 16.65%,
      #F68B1D 16.65%,
      #F68B1D 33.3%,
      #FCED00 33.3%,
      #FCED00 49.95%,
      #009E4F 49.95%,
      #009E4F 66.6%,
      #00AAC3 66.6%,
      #00AAC3 83.25%,
      #732982 83.25%,
      #732982 100%,
      #E7484F 100%
    );
  animation:slidebg 6s linear infinite;
}
@keyframes slidebg {
  to {
    background-position:20vw;
  }
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