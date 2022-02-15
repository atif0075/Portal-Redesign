<template>
    <section class="flex w-full">
        <main class="w-1/5 p-1 h-screen">
            <SlideBar />
        </main>
        <main class="w-4/5 h-screen bg-gray-300">
            <Contant />
        </main>
    </section>
</template>

<script>
import SlideBar from "./SlideBar.vue";
import Contant from "./Contant.vue";
export default {
    components: { SlideBar, Contant }
}
</script>

<style>
</style>