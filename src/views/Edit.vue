<script setup>
    import Header from '../components/ui/Header.vue';
    import Footer from '../components/ui/Footer.vue';
    import TinyMCE from '../components/WYSIWYG/TinyMCE.vue';
    import { ref, watch, onBeforeMount } from 'vue';
    import { useAuthenticationStore, useAPI} from '../data/state';
    import axios from 'axios';
    import { useRouter, useRoute } from 'vue-router';
    import uniqid from "uniqid";
    const router = useRouter();
    const route = useRoute();
    const postID = route.params.id;
    const AuthStore = useAuthenticationStore();
    const APIStore = useAPI();

    const Post = ref({});
    const error = ref({message:"",errors:[]});
    const blogTitle = ref("");
    const blogImage = ref();
    const content = ref("");
    const blogImagePrev = ref("");

    const loading = ref(false);

    function blogImageHandler(e) {
        //updates Blog Image Preview
        //saves Ref to blogImage for Upload

        blogImage.value = e.target.files[0];
        const fileReader = new FileReader()
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = () => {
            blogImagePrev.value = fileReader.result;
        }
    }
    function editPost() {
        if (loading.value) {
            return;
        }
        loading.value = true;
        const formData = new FormData();
        formData.append("title", blogTitle.value);
        formData.append("content", content.value);
        formData.append("headlineImage", blogImage.value);
        axios.put(APIStore.API+'posts/'+postID,formData, { headers: {"Authorization": localStorage.getItem("token")}})
        .then((response) => {
            router.push(`/post/${response.data.postId}`);
        })
        .catch((err) => {
            if (err.response) {
                if (err.response.status == 401) {
                    AuthStore.$reset();
                    router.push(`/`);
                }
                error.value = err.response.data;
                loading.value = false;
            } else if (err.request) {
                error.value = [{msg:"Unable to upload post to server. Please try later."}];
                loading.value = false;
            }
        });
    }
    onBeforeMount( watch(() => postID, async (id) => {
            axios.get(`${APIStore.API}posts/${id}`)
                .then((response) => {
                    Post.value = response.data.post;
                    blogTitle.value = Post.value.title;
                    blogImagePrev.value = Post.value.headlineImage;
                    content.value = Post.value.content;
                    if (Post.value.author.username !== AuthStore.username) {
                        router.push("/");
                    }
                })
		},{ immediate: true }));
    if (!AuthStore.isLoggedIn) {
        router.push("/");
    }
</script>
<template>
    <Header/>
    <section class="wrapper container createPost">
        <h1>Edit Post</h1>
        <form v-if="(Post != {})" @submit.prevent="editPost">
            <div class="addTitle">
                <textarea type="text" id="title" name="title" v-model="blogTitle" placeholder="Enter Blog Title"
                minLength="8" maxLength="64" required></textarea>
            </div>
            <div class="addImage">
            <div class="group">
                <span class="material-symbols-outlined">image</span>
                <input type="file" accept="image/*" @change="blogImageHandler"/>
            </div>
            <img v-if="blogImagePrev" class="blogImagePreview" :src="blogImagePrev" alt="Blog Image Review">
            </div>
            <TinyMCE v-if="content"  :initContent="content" @tinymcecontent="(childContent) => content = childContent"/>
            <button type="submit">Submit</button>
            <h2 v-if="loading">Editing...</h2>
            <ul>
                <li v-if="error.message">{{ error.message}}</li>
                <li v-for="err in error.errors" :key="uniqid()">
                    {{err.msg}}
                </li>
            </ul>
        </form>
    </section>
    <Footer />
</template>
<style scoped>
    .createPost {
        padding: 24px 12px;
    }
    .createPost > *, .createPost form > * {
        margin-bottom:16px;
    }
  .addImage {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        /* width: 350px; */
        max-width: 100%;
        color: #444;
        padding: 5px;
        gap: 12px;
        background: #fff;
        border-radius: 10px;
        border: 1px solid lightgray;
    }
    .addImage .group {
        display:flex;
        gap: 24px;
        justify-content: center;
        align-items: center;
    }
    .blogImagePreview {
        border-radius: 24px;
    }
    .addImage input[type=file]::file-selector-button {
        margin-right: 20px;
        border: none;
        background: var(--main-color);
        padding: 10px 20px;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
        transition: background .2s ease-in-out;
        display: none;
    }
    .addImage input {
        width: 100%;
        height: 100%;
        display: block;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
    }
    .addTitle textarea {
        width: 100%;
        height: auto;
        display: block;
        text-align: center;
        font-size:2rem;
        font-weight: bold;
        color:#444;
        margin: 0;
        padding: 12px;
        border-radius: 10px;
        border: 1px solid lightgray;
        outline: 0;
        resize:none;
    }
    button {
        width:100%;
        height: 50px;
        border: 2px solid var(--main-color);
        font-size:2rem;
        font-weight: bold;
        border-radius: 12px;
        background-color: white;
    }
    button:hover {
        background-color: var(--main-color);
        color:white
    }
    button:active {
        background-color: white;
        color:var(--main-color);
    }
    .createPost h1 {
        font-weight: bolder;
        font-size:3rem;
        color: var(--matte-black);
    }
</style>
