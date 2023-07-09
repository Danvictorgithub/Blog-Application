<script setup>
    import Header from "../components/ui/Header.vue";
    import Footer from "../components/ui/Footer.vue";
    import { ref, onBeforeMount } from "vue";
    import { useAPI, useAuthenticationStore } from "../data/state";
    import axios from "axios";
    import { routerKey, useRouter } from "vue-router";

    const router = useRouter();
    const APIStore = useAPI();
    const AuthStore = useAuthenticationStore();
    const Posts = ref([]);
    onBeforeMount(() => {
        axios
            .get(`${APIStore.API}posts/getUserPost`, {
                headers: { Authorization: localStorage.getItem("token") },
            })
            .then((response) => {
                Posts.value = response.data.posts;
                console.log(Posts.value);
            })
            .catch((err) => {
                if (err.response) {
                    if (err.response.status == 401) {
                        AuthStore.$reset();
                        localStorage.clear();
                        router.push("/");
                    }
                }
            });
    });
</script>
<template>
    <Header />
    <section class="wrapper container managePost">
        <h2>Your Posts</h2>
        <div class="postList">
            <div v-for="post in Posts" class="post">
                <div clsas="imageContainer">
                    <img class="postImage" :src="post.headlineImage" />
                </div>
                <div class="postGroup">
                    <div class="postInfo">
                        <h3 class="postTitle">{{ post.title }}</h3>
                        <p class="postContent">{{ post.content }}</p>
                    </div>
                    <div class="crudTools">
                        <button>
                            <span class="material-symbols-outlined">update</span>
                            Update
                        </button>
                        <button>
                            <span class="material-symbols-outlined">delete</span>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>
<style scoped>
    .managePost {
        padding: 24px 0;
    }

    .managePost h2 {
        font-size: 2rem;
        font-weight: 600;
        border-bottom: 2px solid lightgray;
    }
    .postList {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    .post {
        display: flex;
        padding: 12px;
    }

    .postTitle {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 8px;
    }

    .postContent {
        font-size: 1.2rem;
    }

    .postInfo {
        padding: 12px;
    }
    .postImage {
        border-radius: 12px;
    }
    .postGroup {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .postImage {
        height: 265px;
        width: 350px;
        object-fit: cover;
        /* object-position: center; */
    }

    .crudTools {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap:10px;
    }
    .crudTools button {
        background-color: white;
        border: 2px solid lightgray;
        border-radius: 12px;
        padding:12px;

        display:flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25rem;
        gap:8px;
    }
    .crudTools button span {
        font-size: 2rem;
        font-weight: 600;
    }
    @media (max-width: 768px) {
        .post {
            flex-direction: column;
        }

        .postImage {
            width: 100%;
        }
        .postGroup {
            flex-direction: column;
        }
    }
    </style>
