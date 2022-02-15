<template>
    <section class="border h-full w-full">
        <div class="w-full">
            <button
                @click="currentTabComponent = 'Tab1'"
                class="text-base text-indigo-400 trans font-semibold w-1/5 py-3"
            >Basic Info</button>
            <button
                @click="currentTabComponent = 'Tab2'"
                class="text-base text-indigo-400 trans font-semibold w-2/5 py-3"
            >My Profile</button>
            <button
                @click="currentTabComponent = 'Tab3'"
                class="text-base text-indigo-400 trans font-semibold w-2/5 py-3"
            >Education</button>
        </div>
        <div class="w-full h-full">
            <keep-alive>
                <component :is="currentTabComponent"></component>
            </keep-alive>
        </div>
    </section>
</template>

<script>
import Tab1 from "../../components/ProfileTabs/Tab1.vue";
import Tab2 from "../../components/ProfileTabs/Tab2.vue";
import Tab3 from "../../components/ProfileTabs/Tab3.vue";
export default {
    name: "Profile",
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