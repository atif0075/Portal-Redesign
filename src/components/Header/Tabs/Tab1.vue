<template>
    <form class="w-full flex flex-col justify-between px-3">
        <div class="flex flex-col justify-between my-3">
            <label>Email</label>
            <input
                class="w-full border outline-none p-2 rounded"
                type="email"
                placeholder=" Enter your email"
            />
        </div>
        <div class="flex flex-col justify-between my-3">
            <label>Password</label>
            <input
                class="w-full border outline-none p-2 rounded"
                type="password"
                placeholder=" Enter your password"
            />
        </div>
        <div class="flex justify-end">
            <a class="text-xs underline text-indigo-500" href="#">Forgot Password?</a>
        </div>
        <div class="flex justify-end items-center p-2 my-3">
            <button class="btn-lg w-full indigo rounded">
                <router-link to="/">Login</router-link>
            </button>
        </div>
    </form>
</template>

<script>
export default {
    name: "Tab1"
}
</script>

<style>
</style>