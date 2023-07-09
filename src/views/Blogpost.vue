	<script setup>
		import Header from '../components/ui/Header.vue';
		import Footer from '../components/ui/Footer.vue';
		import { useRoute,useRouter } from 'vue-router';
		import { onBeforeMount,ref, watch} from 'vue';
		import axios from 'axios';
		import { useAPI,useAuthenticationStore } from '../data/state';
		import uniqid from 'uniqid';
		import {DateTime} from "luxon";
		const APIStore = useAPI();
		const AuthStore = useAuthenticationStore();
		const route = useRoute();
		const router = useRouter();
		const postId = route.params.id
		const Post = ref();
		const liked = ref(false);
		const comment = ref("");
		const commentError = ref({errors:[{msg:""}]});
		async function getPost(id) {
			// Request Post Object
			const response = await axios.get(`${APIStore.API}posts/${id}`)
				.then(response => response.data.post)
				.catch(error => {
					if (error.response) {
						router.push("/");
					}
				});
			return response;
		}
		async function updatePost(id) {
			// Updates Post Ref
			Post.value = await getPost(id);
			if (AuthStore.isLoggedIn) {
				const message = await checkLiked(id);
				if (message == "Liked") {
					liked.value = true;
				} else {
					liked.value = false;
				}
			}
		}
		async function toggleLikeHandler() {
			// Toggle Like Handler
			const response = await axios.put(`${APIStore.API}posts/${postId}/addLike`,{},
			{headers:{"Authorization":localStorage.getItem("token")}})
				.then(response => response.data.message);
			if (response == "Incremented") {
				liked.value = true;
			} else {
				liked.value = false;
			}
			updatePost(postId);
		}
		async function checkLiked(id) {
			// Check if token already liked the post
			const response = await axios.get(`${APIStore.API}posts/${id}/checkLike`,
			{headers:{"Authorization":localStorage.getItem("token")}})
			.then(response => response.data.message);
			return response;
		}
		async function addComment() {
			// Add Comment Handler
            const response = await axios.post(`${APIStore.API}posts/${postId}/addComment`,{comment:comment.value},
            {headers:{"Authorization":localStorage.getItem("token")}})
                .then(()=> {
					comment.value = "";
					commentError.value = {errors:[{msg:""}]};
					updatePost(postId);
				})
				.catch(error => {
						if (error.response) {
							commentError.value = error.response.data;
						}
					});
		}
		onBeforeMount( watch(() => route.params.id, async (id) => {
			updatePost(id);
		},{ immediate: true }));
	</script>
	<template>
		<Header title="Leeman's Tech Blog"/>
		<section v-if="Post" class="wrapper-blog container">
			<div class="blogMetaData">
				<h2 class="blogAuthor">By: {{ Post.author.username }}</h2>
				<h3 class="blogDate">{{ DateTime.fromISO(Post.date).toLocaleString(DateTime.DATETIME_MED) }}</h3>
				<h4 v-if="Post.isEdited">[Edited]</h4>
			</div>
			<div class=blogHero>
				<h1 class="blogTitle">{{Post.title}}</h1>
				<img class="blogPostImg" :src="Post.headlineImage">
			</div>
			<div v-html="Post.content" class="blogContent">
			</div>
			<hr/>
			<section class="blogSection">
				<p class="likes">
					{{ (Post.likes > 1) ? `${Post.likesCount} likes` :`${Post.likesCount} like`}}
					<button v-if="AuthStore.isLoggedIn" @click="toggleLikeHandler" type="button"><span  class="material-symbols-outlined" :class="{liked:liked}">thumb_up</span></button>
				</p>
				<p class="numComments">{{ (Post.comments.length) > 1 ? `${Post.comments.length} comments`: `${Post.comments.length} comment`  }} </p>
				<div v-if="AuthStore.isLoggedIn" class="commentForm">
						<form @submit.prevent="addComment" class="commentForm">
							<div>
								<textarea type="text" @change="(e)=>comment=e.target.value" class="commentInput" :value="comment" placeholder="Write a comment..."></textarea>
							</div>
							<p>{{ commentError.errors[0].msg }}</p>
							<button type="submit" class="commentButton">Post</button>
						</form>
					</div>
				<article class="commentSection">
					<div v-for="comment in Post.comments" :key="uniqid()" class="comment" >
						<p class="commentAuthor">{{ comment.user.username }} ({{ DateTime.fromISO(comment.date).toLocaleString(DateTime.DATETIME_MED)  }})</p>
						<p>{{ comment.comment }}</p>
					</div>
				</article>
			</section>
		</section>
		<section v-else class="wrapper-blog container">
			Loading...
		</section>
		<Footer/>
	</template>
	<style scoped>
	.wrapper-blog {
		margin-inline: auto auto;
		flex:1 0 auto;
		max-width: calc(1280px - 120px);
	/*	background-color:lightgray;*/
	}
	.blogPostImg {
		width:100%;
		height: 500px;
		object-fit:cover;
	}
	.blogTitle {
		text-align:center;
		padding: 20px 40px;
		font-size: 3rem;
		font-weight: 600;
		letter-spacing: 2px;
		line-height: 2ch;
	}
	.blogMetaData {
		width:100%;
		margin-top:36px;
		display:flex;
		flex-direction: column;
		justify-content:flex-start;
		align-items:flex-start;
		/* gap:12px; */
		padding: 0 24px;
	}
	.blogAuthor {
		/* padding: 10px 0; */
		font-size:1.5rem;
		font-style:italic;
	}
	.blogContent {
		padding: 30px 10vw;
		font-size:1.5rem;
		overflow:hidden;
	}
	.blogContent img {
		width: 100%
	}
	.blogContent::first-letter {
		font-size:3rem;
		margin-left: 2px;
	}
	.blogSection {
		padding:12px 24px;
	}
	.likes {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.commentSection {
		border-left: 2px solid lightgray;
		padding:12px 24px;
	}
	.comment {
		padding: 12px 0;
	}
	.commentAuthor {
		font-weight:600;
	}
	.liked {
		color:var(--main-color);
	}
	.likes button{
		background-color:white;
		border: 1px solid lightgray;
		border-radius: 8px;
	}
	.likes button:hover {
		border: 1px solid var(--main-color);
	}
	.likes button:active{
		background-color: var(--main-color);
		color:white;
	}
	.commentButton {
		padding: 12px 24px;
		width: 100%;
		border: 2px solid var(--main-color);
		background-color: white;
		border-radius: 12px;
	}
	.commentButton:hover {
		background-color: var(--main-color);
		color:white;
	}
	.commentButton:active {
		background-color: white;
		color:var(--main-color);
	}
	.commentForm textarea {
		width: 100%;
		height:100px;
		padding: 12px;
		border: 2px solid lightgray;
		border-radius: 8px;
		font:1rem;
		resize:none;
	}
	@media (max-width:1200px){
		.blogTitle {
			font-size:2.5rem;
		}
		.wrapper-blog {
			margin-inline: auto;
	/*		background-color:red;*/
		}
	}
	@media (max-width: 600px) {
		.blogTitle {
			font-size:2rem;
		}
		.blogContent {
			font-size: 1rem;
		}
	}
	</style>
