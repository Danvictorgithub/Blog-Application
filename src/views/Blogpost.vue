<script setup>
	import Header from '../components/ui/Header.vue';
	import Footer from '../components/ui/Footer.vue';
	import { useRoute,useRouter } from 'vue-router';
	import { onBeforeMount, onMounted, reactive ,ref, watch} from 'vue';
	import axios from 'axios';
	import { useAPI } from '../data/state';
	import uniqid from 'uniqid';
	const APIStore = useAPI();
	const route = useRoute();
	const router = useRouter();
	const postId = route.params.id
	const Post = ref();
	onBeforeMount( watch(() => route.params.id, async (id) => {
		Post.value = await getPost(id);
		console.log(Post.value.comments);
	},{ immediate: true }));
	async function getPost(id) {
		const response = await axios.get(`${APIStore.API}posts/${id}`)
			.then(response => response.data.post)
			.catch(error => {
				if (error.response) {
					router.push("/");
				}
			});
		return response;
	}
</script>
<template>
	<Header title="Leeman's Tech Blog"/>
	<section v-if="Post" class="wrapper-blog container">
		<div class="blogMetaData">
			<h2 class="blogAuthor">By: {{ Post.author.username }}</h2>
			<!-- <h3 class="blogDate">November 4, 2002</h3> -->
		</div>
		<div class=blogHero>
			<h1 class="blogTitle">{{Post.title}}</h1>
			<img class="blogPostImg" :src="Post.headlineImage">
		</div>
		<div v-html="Post.content" class="blogContent">
		</div>
		<hr/>
		<section class="blogSection">
			<p class="likes">{{ (Post.likes > 1) ? `${Post.likesCount} likes` :`${Post.likesCount} like`}}</p>
			<p class="numComments">{{ (Post.comments.length) > 1 ? `${Post.comments.length} comments`: `${Post.comments.length} comment`  }} </p>
			<article class="commentSection">
				<div v-for="comment in Post.comments" :key="uniqid()" class="comment">
					<p class="commentAuthor">{{ comment.user.username }}</p>
					<p>{{ comment.comment }}</p>
				</div>
			</article>
		</section>
	</section>
	<section v-else class="wrapper blog"></section>
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
	margin-top:36px;
	display:flex;
	justify-content:flex-start;
	align-items:center;
	gap:12px;
}
.blogAuthor {
	padding: 10px 0;
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
}
</style>
