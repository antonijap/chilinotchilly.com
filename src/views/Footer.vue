<template>
  <footer class="grid grid-cols-3 gap-4 container mx-auto py-40 items-start">
    <div class="grid grid-flow-row gap-0">
        <img src="@/assets/img/logo.svg" alt="Chili logo" class="w-24 mb-10">
        <a class="disabled text-gray-600 py-3 cursor-not-allowed">Our story (work in progress)</a>
        <a class="disabled text-gray-600 py-3 cursor-not-allowed">Pricing (work in progress)</a>
        <a class="disabled text-gray-600 py-3 cursor-not-allowed">Blog (work in progress)</a>
    </div>
    <div class="grid mt-16">
        <p class="py-3">Connect with us (for reals, we don't bite)</p>
        <a class="py-3 hover:text-chili-red underline" href="mailto:hi@chilinotchilly.com">hi@chilinotchilly.com</a>
        <a class="py-3 hover:text-chili-red underline" href="https://www.linkedin.com/company/chilinotchilly">Linkedin</a>
    </div>
    <div class="grid mt-16">
        <p>Made with lots of love in beautiful Finland. Suomi. Torille. Perkele!</p>
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