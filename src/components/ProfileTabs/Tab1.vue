<template>
    <section class="flex justify-center items-center py-12 w-full">
        <div class="w-96 p-2 flex flex-col justify-center items-center rounded">
            <main class="w-full">
                <main
                    class="border-indigo-500 border-l-4 font-bold py-2 text-indigo-500 bg-gray-50 px-2"
                >Image</main>
                <div class="flex justify-center py-3">
                    <img
                        class="w-28 border-4 p-1 rounded-full border-indigo-200"
                        src="../../assets/images/myPic.jpg"
                        alt="your Image"
                    />
                </div>
            </main>
            <div class="w-full">
                <main
                    class="border-indigo-500 border-l-4 font-bold py-2 text-indigo-500 bg-gray-50 px-2"
                >Name</main>
                <main class="text-orange-500 text-center font-semibold py-3">{{ StdName }}</main>
            </div>
            <div class="w-full">
                <main
                    class="border-indigo-500 border-l-4 font-bold py-2 text-indigo-500 bg-gray-50 px-2"
                >Contacts</main>
                <div class="py-3">
                    <main class="text-orange-500 font-semibold py-2 pl-4">{{ mail }}</main>
                    <main class="text-orange-500 font-semibold py-2 pl-4">{{ ph }}</main>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            StdName: "MUHAMMAD ATIF MEHMOOD IFTIKHAR ALI",
            mail: "chatif476@gmail.com",
            ph: "+92 (302) 9798428"
        }
    },
}
</script>

<style>
</style>