<template>
  <footer class="flex flex-col md:px-12 mobile:px-6 container mx-auto md:py-40 mobile:pt-24 mobile:pb-12 items-start md:text-xmd">
    <img src="@/assets/img/logo.svg" alt="Chili logo" class="w-24 md:mb-12 mobile:mb-6">
    <div class="grid gap-2 md:grid-cols-1 xl:grid-cols-3 mobile:grid-cols-1">
        <div class="grid">
            <a class="disabled text-gray-600 py-3 cursor-not-allowed">Our story (work in progress)</a>
            <a class="disabled text-gray-600 py-3 cursor-not-allowed">Pricing (work in progress)</a>
            <a class="disabled text-gray-600 py-3 cursor-not-allowed">Blog (work in progress)</a>
        </div>
        <div class="grid">
            <p class="py-3">Connect with us (for reals, we don't bite)</p>
            <a class="py-3 hover:text-chili-red underline" href="mailto:hi@chilinotchilly.com">hi@chilinotchilly.com</a>
            <a class="py-3 hover:text-chili-red underline" href="https://www.linkedin.com/company/chilinotchilly">Linkedin</a>
        </div>
        <div class="grid">
            <p class="py-3">Made with lots of love in beautiful Finland. Suomi. Torille. Perkele!</p>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>

</style>