<template>
    <div class="text-primary bg-mustard md:py-64 mobile:py-24">
        <div class="container mx-auto md:px-12 mobile:px-4 md:w-prose mobile:w-screen">
            <h1>Blog</h1>
            <div class="grid grid-cols-3">
                <div v-for="post in posts" :key="post.id" v-bind:post="post">
                    <router-link :to="linkResolver(post)">
                        <prismic-image :field="post.data.post_image"/>
                        <prismic-rich-text :field="post.data.post_title" class="text-primary"/>
                        <div>{{ post.data.date | moment("from", "now") }}</div>
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