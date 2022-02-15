<template>
    <section class="flex justify-center items-start w-full h-full">
        <main class="border h-auto w-96 mt-12 p-2">
            <div class="border h-full w-full">
                <div class="w-full">
                    <button
                        @click="currentTabComponent = 'Tab1'"
                        class="text-xs trans font-semibold text-gray-700 w-1/5 py-3"
                    >Login</button>
                    <button
                        @click="currentTabComponent = 'Tab2'"
                        class="text-xs trans font-semibold text-gray-700 w-2/5 py-3"
                    >Student Login</button>
                    <button
                        @click="currentTabComponent = 'Tab3'"
                        class="text-xs trans font-semibold text-gray-700 w-2/5 py-3"
                    >Student Registration</button>
                </div>
                <div class="w-full h-full">
                    <keep-alive>
                        <component :is="currentTabComponent"></component>
                    </keep-alive>
                </div>
            </div>
        </main>
    </section>
</template>

<script>
import Tab1 from "./Tabs/Tab1.vue";
import Tab2 from "./Tabs/Tab2.vue";
import Tab3 from "./Tabs/Tab3.vue";

export default {
    name: "Right",
    components: {
        Tab1,
        Tab2,
        Tab3,
    },
    data: () => {
        return {
            currentTabComponent: "Tab1",
        };
    },
}
</script>

<style>
</style>