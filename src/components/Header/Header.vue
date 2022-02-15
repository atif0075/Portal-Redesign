<template>
    <section class="w-full">
        <main class="w-full h-32 flex justify-between items-center">
            <div class="w-1/6 bg-gray-50 h-full">Logo</div>
            <div class="w-4/6 bg-gray-50 h-full text-center">
                <h1
                    class="head py-2 text-indigo-500"
                >RIPHAH INTERNATIONAL UNIVERSITY FAISALABAD CAMPUS</h1>
                <p
                    class="text-sm py-2 text-orange-500"
                >Establishment of State of the Art Educational Institutions with a focus on inculcating Islamic ethical values</p>
                <h1 class="py-2 headsm text-gray-500">WEB EDUCATIONAL PORTAL</h1>
            </div>
            <div
                class="w-1/4 bg-gray-50 flex flex-col justify-center items-center h-full text-gray-500"
            >
                <p class="text-xs font-semibold py-2">Main Satyana Road Faisalabad Near Fish Farm</p>
                <p class="text-xs font-semibold py-2">Phone: +92 41 8777 210, +92 41 8777 310</p>
            </div>
        </main>
        <main class="flex justify-between w-full container mx-auto">
            <div class="w-3/5">
                <Left />
            </div>
            <div class="w-2/5">
                <Right />
            </div>
        </main>
        <main>
            <Footer />
        </main>
    </section>
</template>

<script>
import Left from "./Left.vue";
import Right from "./Right.vue";
import Footer from "./Footer.vue";
export default {
    components: { Left, Right, Footer }
}
</script>

<style>
</style>