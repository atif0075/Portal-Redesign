<template>
    <form class="w-full flex flex-col justify-between px-3">
        <div class="flex flex-col justify-between my-2">
            <label>CNIC</label>
            <input
                class="w-full border outline-none p-2 rounded"
                type="text"
                placeholder=" Enter your email"
            />
        </div>
        <div class="flex flex-col justify-between my-2">
            <label>Roll No</label>
            <input
                class="w-full border outline-none p-2 rounded"
                type="text"
                placeholder=" Enter your roll no"
            />
        </div>
        <div class="flex flex-col justify-between my-2">
            <label>Password</label>
            <input
                class="w-full border outline-none p-2 rounded"
                type="password"
                placeholder=" Enter your password"
            />
        </div>
        <div class="flex flex-col justify-between my-2">
            <label>Confirm Password</label>
            <input
                class="w-full border outline-none p-2 rounded"
                type="password"
                placeholder=" Retype your password"
            />
        </div>
        <div class="flex justify-end">
            <a class="text-xs underline text-indigo-500" href="#">Forgot Password?</a>
        </div>
        <div class="flex justify-end items-center p-1 my-2">
            <button class="btn-lg w-full indigo rounded">
                <router-link to="/">Register</router-link>
            </button>
        </div>
    </form>
</template>

<script>
export default {
    name: "Tab3"

}
</script>

<style>
</style>