<template>
    <div class="text-primary bg-mustard">
        <div class="w-full border-b-2 border-primary p-4 md:mb-24 mobile:mb-16">
            <router-link to="/">
            <button class="flex items-center flex-initial text-primary py-2 px-4 wiggle outline-none focus:outline-none">
                <img src="@/assets/img/arrow-left.svg" alt="Arrow left">
                <span class="font-bold ml-6">Back to Chili</span>
            </button>
         </router-link>
        </div>
        <div class="container mx-auto md:px-12 mobile:px-6">
            <h1 class="lg:text-lg leading-none mb-12 mobile:mb-4 sm:text-lg mobile:text-md">Blog</h1>
            <h2 class="md:text-md sm:text-xmd leading-normal">Interested in agency life, best practiced and chili stuff? You are on the right place.</h2>
            <div class="grid md:grid-cols-2 mobile:grid-cols-1 md:mt-24 mobile:mt-16 md:gap-8 mobile:gap-16 md:row-gap-24">
                <div v-for="post in posts" :key="post.id" v-bind:post="post" class="hover:text-chili-red">
                    <router-link :to="linkResolver(post)">
                        <prismic-image :field="post.data.post_image" class="rounded"/>
                        <prismic-rich-text :field="post.data.post_title" class="mt-4 lg:text-xmd leading-small mobile:mb-0 sm:text-xmd pb-2"/>
                        <div>{{ post.data.date | moment("from", "now") }} by <span class="italic">{{ $prismic.richTextAsPlain(post.data.author) }}</span></div>
                    </router-link>
                </div>
            </div>
            <t-pagination
								v-if="posts && disabled"
                :total-items="postsLength"
                :per-page="perPage"
                v-model="currentPage"
								@change="change"
								:disabled="!disabled"
								class="mt-24"
            />
        </div>
				<Footer />
    </div>
</template>

<script>
import Footer from './Footer';

export default {
	name: 'Post',
	components: {
    Footer
	},
  data () {
    return {
        posts: null,
        postsLength: null,
        linkResolver: this.$prismic.linkResolver,
				currentPage: 1,
				perPage: 6,
    }
	},
  methods: {
		getAllPosts() {
        this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'posts')
        ).then((response) => {
            this.postsLength = response.results.length
        });        
		},
    getPosts(pageSize, page) {
        this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'posts'),
        { orderings : '[posts.date desc]', pageSize: pageSize, page: page }
        ).then((response) => {
            this.posts = response.results
        });        
		},
		change(e) {
			this.currentPage = e
			this.getPosts(this.perPage, this.currentPage)
		}
	},
	computed: {
		disabled() {
			if (this.perPage >= this.postsLength) {
				return false
			} else {
				return true
			}
		}
	},
  created () {
		this.getAllPosts()
    this.getPosts(this.perPage, 1)
  }
}
</script>

<style lang="scss">
.wiggle {
  &:hover img {
      animation: wiggle 500ms infinite linear;
  }
}
button {
	transition: all 200ms ease-in;
}
@keyframes wiggle {
  0% { transform: translateX(0px); }
  25% { transform: translateX(-8px); }
  75% { transform: translateX(-8px); }
  100% {transform: translateX(0px); }
}
</style>