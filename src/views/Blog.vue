<template>
    <div class="text-primary bg-mustard md:py-64 mobile:py-24">
        <div class="container mx-auto md:px-12 mobile:px-4 md:w-prose mobile:w-screen">
            <h1 class="lg:text-lg leading-none mb-12 mobile:mb-4 sm:text-lg mobile:text-md">Blog</h1>
            <h2 class="md:text-md sm:text-xmd leading-normal">Interested in agency life, best practiced and chili stuff? You are on the right place.</h2>
            <div class="grid grid-cols-2 mt-64 gap-24 row-gap-24">
                <div v-for="post in posts" :key="post.id" v-bind:post="post" class="hover:color-primary hover:bg-blue-700">
                    <router-link :to="linkResolver(post)">
                        <prismic-image :field="post.data.post_image"/>
                        <prismic-rich-text :field="post.data.post_title" class="text-primary mt-4 lg:text-md leading-small mobile:mb-4 sm:text-lg mobile:text-md"/>
                        <!-- <div>{{ post.data.date | moment("from", "now") }}</div> -->
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Post',
  data () {
    return {
        posts: null,
        linkResolver: this.$prismic.linkResolver
    }
  },
  methods: {
    getPosts() {
        this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'posts'),
        { orderings : '[posts.date desc]' }
        ).then((response) => {
            this.posts = response.results
        });        
    }
  },
  created () {
    this.getPosts()
  }
}
</script>

<style lang="scss">

</style>