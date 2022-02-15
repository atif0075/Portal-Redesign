<template>
    <section class="flex w-full">
        <main class="w-1/5 p-1">
            <button
                class="py-2 px-4 rounded w-full bg-indigo-500 text-gray-50 text-left"
            >Welcome To Riphah Fsd</button>
        </main>
        <main class="w-4/5 p-2 bg-gray-100 rounded flex justify-between items-center">
            <p
                class="text-sm text-indigo-400"
            >Riphah College Of {{ Dept }} Department of Computing / You are Logged in As: {{ LoggedAs }} / {{ Name }} ({{ Roll }})</p>
            <button class="orange btn-sm rounded">Signout</button>
        </main>
    </section>
    <section class="flex w-full">
        <main class="w-1/5 p-1 h-screen">
            <SlideBar />
        </main>
        <main class="w-4/5 h-screen">
            <Contant />
        </main>
    </section>
</template>

<script>
// Riphah College Of Computing Department of Computing You are Logged in As: Student Welcome! MUHAMMAD ATIF MEHMOOD (15320) 
import SlideBar from "./SlideBar.vue";
import Contant from "./Contant.vue";
export default {
    components: { SlideBar, Contant },
    data: () => {
        return {
            LoggedAs: "Student",
            Dept: "Computing",
            Name: "MUHAMMAD ATIF MEHMOOD",
            Roll: "15320"

        }
    },
}
</script>

<style>
</style>