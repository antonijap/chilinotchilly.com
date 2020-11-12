<template>
    <div class="text-primary bg-mustard md:py-64 mobile:py-24">
        <div class="container mx-auto md:px-12 mobile:px-4 md:w-prose mobile:w-screen">
            <div class="mb-24">
              <router-link to="./">Back</router-link>
            </div>
            <prismic-rich-text :field="fields.title" class="lg:text-lg sm:text-lg mobile:text-md font-black leading-none mb-12 mobile:mb-4"/>
            <prismic-rich-text :field="fields.content" class="prose lg:prose-xl mobile:prose-sm text-primary"/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Post',
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
.prose {
  max-width: 100%;
}
</style>