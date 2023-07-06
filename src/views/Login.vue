<script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    import Header from '../components/ui/Header.vue';
    import * as states from "../data/state";
    const usernameInput = ref("");
    const passwordInput = ref("");
    const APIStore = states.useAPI();
    function onSubmit() {
        axios.get("");
    }
</script>
<template>
    <Header name="Leeman's Tech Blog" :hide="true"></Header>
    <section class="wrapper container">
        <div class="login-container">

            <form @submit.prevent="onSubmit" class="login-form">
                <img class="logo" src="/favicon.png">
                <h1 class="form-title-main" >Leeman's Tech Blog</h1>
                <h2 class="form-title" >Login</h2>
                <div class="form-group">
                    <!-- <label for="username">Username</label> -->
                    <input v-model="usernameInput" type="text" class="form-control" id="username" placeholder="Username">
                </div>
                <div class="form-group">
                    <!-- <label for="password">Password</label> -->
                    <input v-model="passwordInput" type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <button type="submit" class="submitBtn">Login</button>
            </form>
        </div>
    </section>
</template>
<style>
    .login-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: calc(100svh - 100px);
        padding: 0 24px;
    }
    .login-form {
        flex: 1 0 0;
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 25px;
    }
    .form-group{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        /* max-width: 400px; */
        /* flex: 1 1 0; */
        width: 100%;
        margin-bottom: 16px;
    }
    .form-group input {
        font-size:1.5rem;
        max-width: 500px;
        width: 100%;
        padding: 10px;
        border: 4px solid #ccc;
        border-radius: 4px;
        outline: red;
        /* margin-bottom: 10px; */
    }
    .form-group input:focus{
        border: 4px solid var(--main-color);
    }
    .logo {
        height: 100px;
        width: 100px;
    }
    .form-title-main {
        font-size: 2.2rem;
        word-spacing: -2px;
        line-height: normal;
        text-align: center;
        margin-bottom: 12px;
    }
    .form-title {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 12px;
    }
    .submitBtn {
        font-size: 2rem;
        font-weight: 600;
        padding: 10px 20px;
        border: 2px solid transparent;
        border-radius: 12px;
        background-color: var(--main-color);
        color:white;
        max-width: 500px;
        width: 100%;
        margin-top: 24px;
        /* margin-bottom: 24px; */
    }
    .submitBtn:hover {
        background-color: #90ee90;
    }
    .submitBtn:active {
        border:2px solid var(--main-color);
        background-color: white;
        color:var(--matte-black);
    }
</style>
