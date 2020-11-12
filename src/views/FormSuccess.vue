<template>
    <div class="text-primary flex content-center flex-wrap h-screen relative bg-mustard">
        <div class="container mx-auto md:px-12 mobile:px-6">
            <h1 class="lg:text-lg leading-none mb-12 mobile:mb-4 sm:text-lg mobile:text-md">You're Awesome! Thank you for your submission!</h1>
            <router-link to="/">
                <button class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border-2 border-primary rounded">Back to Chili</button>
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SubmissionSuccess"
  }
</script>