<script setup>
    import Header from "../components/ui/Header.vue";
    import Footer from "../components/ui/Footer.vue";
    import { ref, onBeforeMount } from "vue";
    import { useAPI, useAuthenticationStore } from "../data/state";
    import axios from "axios";
    import { routerKey, useRouter ,RouterLink} from "vue-router";
    import { DateTime } from "luxon";
    const router = useRouter();
    const APIStore = useAPI();
    const AuthStore = useAuthenticationStore();
    const Posts = ref([]);

    const loading = ref(true);

    async function updateManagePost() {
        await axios
            .get(`${APIStore.API}posts/getUserPost`, {
                headers: { Authorization: localStorage.getItem("token") },
            })
            .then((response) => {
                Posts.value = response.data.posts;
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
        loading.value = false;
    }
    async function deleteHandler(id) {
        axios.delete(`${APIStore.API}posts/${id}`, {
            headers: {Authorization: localStorage.getItem("token")}})
            .then(() => {
                updateManagePost();
            })
    }
    onBeforeMount(async () => {
        //loads users posts
        await updateManagePost();
    });
</script>
<template>
    <Header />
    <section class="wrapper container managePost">
        <h2>Your Posts</h2>
        <div class="postList">
            <h2 v-if="loading">Loading...</h2>
            <div v-for="post in Posts" class="post">
                    <RouterLink :to=/post/+post._id class="postGroup">
                        <div class="imageContainer">
                            <img class="postImage" :src="post.headlineImage" />
                        </div>
                            <div class="postInfo">
                                <div class="postInfoDescription">
                                    <h3 class="postTitle">{{ post.title }}</h3>
                                    <h5>{{ DateTime.fromISO(post.date).toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS) }}</h5>
                                </div>
                                <p class="postContent">{{ post.content }}</p>
                        </div>
                    </RouterLink>
                    <div class="crudTools">
                            <RouterLink :to=/post/+post._id+/edit/>
                                <button>
                                    <span class="material-symbols-outlined">update</span>
                                    Update
                                </button>
                            </RouterLink>
                            <button @click="deleteHandler(post._id)">
                                <span class="material-symbols-outlined">delete</span>
                                Delete
                            </button>
                        </div>
            </div>
        </div>
    </section>
    <Footer />
</template>
<style scoped>
    a {
        color: var(--matte-black);
        text-decoration: none;
    }
    .managePost {
        padding: 24px 12px;
    }
    .managePost h2 {
        font-size: 2rem;
        font-weight: 600;
        border-bottom: 2px solid lightgray;
        margin-bottom:24px;
    }
    .postList {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:24px;
    }
    .post {
        display: flex;
        width: 100%;
    }
    .postImage {
        height: 265px;
        width: 350px;
        object-fit: cover;
        border-radius: 12px;
    }
    .postGroup {
        flex: 1 1 0;
        min-width:0%;
        display:flex;
    }
    .postInfo {
        flex: 1 1 0;
        min-width: 0;
        padding: 12px;
        overflow-wrap:break-word;
    }
    .postTitle {
        font-size: 1.5rem;
        font-weight: 600;
    }
    .postContent {
        width: 100%;
        white-space:normal;
        font-size: 1.2rem;
        margin-top:24px;
    }
    .crudTools {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        gap:10px;
        padding: 10px 0;
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
    .crudTools button:hover {
        border: 2px solid var(--main-color);
    }
    .crudTools button:active {
        background-color: var(--main-color);
        color:white;
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
