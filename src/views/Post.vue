<template>
    <div class="text-primary bg-mustard">
      <div class="w-full border-b-2 border-primary p-4 lg:mb-32 md:mb-16 mobile:mb-8">
        <router-link to="./">
          <button class="flex items-center flex-initial text-primary py-2 px-4 wiggle outline-none focus:outline-none">
          <img src="@/assets/img/arrow-left.svg" alt="Arrow left">
          <span class="font-bold ml-6">Back to Chili Blog</span>
          </button>
        </router-link>
        </div>
        <div class="container mx-auto md:px-12 mobile:px-6">
          <prismic-rich-text :field="fields.title" class="lg:text-lg sm:text-lg mobile:text-md font-black md:leading-none mb-12 mobile:mb-4"/>
          <prismic-rich-text :field="fields.content" class="prose max-w-none lg:prose-xl mobile:prose-sm text-primary"/>
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
  metaInfo() {
    return { 
      title: fields.title,
      meta: [
        { name: 'description', content: fields.content},
        { property: 'og:title', content: fields.title},
        { property: 'og:site_name', content: 'Chilinotchily'},
        { property: 'og:type', content: 'post'},    
        { name: 'robots', content: 'index,follow'} 
      ]
    }
  },
  data () {
    return {
      documentId: '',
      fields: {
        title: null,
        date: null,
        content: null
      },
    }
  },
  methods: {
    getContent (uid) {
      // Query to get post content
      this.$prismic.client.getByUID('posts', uid)
        .then((document) => {
          if (document) {
            this.documentId = document.id
            this.fields.title = document.data.post_title
            this.fields.date = document.data.post_date
            this.fields.content = document.data.post_content
          } 
          else {
            // Returns error page
            this.$router.push({ name: 'not-found' })
          }
        })
    }
  },
  created () {
    this.getContent(this.$route.params.uid);
  },
  beforeRouteUpdate (to, from, next) {
    this.getContent(to.params.uid)
    next()
  }
}
</script>

<style lang="scss">

</style>