<script setup>
	import {ref,reactive, onMounted,computed} from 'vue';
	import { useRouter } from 'vue-router';
	import uniqid from "uniqid";
	import axios from "axios";
	import {useAPI,useLoading, useAuthenticationStore} from "../data/state";
	import {DateTime} from "luxon";
	import Header from '../components/ui/Header.vue';
	import Footer from '../components/ui/Footer.vue';
	// const loadingState = useLoading();
	const router = useRouter();
	const APIStore = useAPI();
	const AuthStore = useAuthenticationStore();
	const Posts = reactive({data:[]});
	const PostList = computed(() => {
		return Posts.data.filter((post) => !(post == Posts.data[0]));
	})
	async function fetchPosts() {
		axios.get(`${APIStore.API}posts`)
		.then((response) => {
			Posts.data = response.data.posts;
			console.log(PostList);
		}).catch (err => {
			if (err.request) {
				console.log(err);
			}
		})
	}
	console.log(Posts.data)
	fetchPosts();
	// onMounted(()=> {
	// 	document.onreadystatechange = () => {
	// 		if(document.readyState == "complete") {
	// 			loadingState.setIsLoading(true);
	// 		}
	// 	}
	// });
</script>
<template>
	<Header title="Leeman's Tech Blog"/>
	<div class="loading" v-if="Posts.data.length == 0"><img class="rotate" src="/favicon.png" alt="logo"></div>
	<section class="wrapper container">
		<div v-if="Posts.data[0] == undefined" class="homeHero">
			<div class="gradient">
				<section class="blogHeroInfo">
				<article>
					<h2>
						Blog Post
					</h2>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam velit nihil eos nam, odio harum, quae quidem amet sunt facere vel non eligendi minima laborum assumenda soluta hic porro.</p>

					<button class="readBlogPost">Read Blog</button>
				</article>
			</section>
			</div>
			<img class="heroImg" src="../assets/steve.jpg">
		</div>
		<div v-else class="homeHero">
			<div class="gradient">
				<section class="blogHeroInfo">
				<article>
					<h2>
						<!-- Blog Title -->
						{{ (Posts.data.length != 0) ? Posts.data[0].title : "Blog Post" }}
					</h2>
					<p>{{ (Posts.data.length != 0) ? Posts.data[0].content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam velit nihil eos nam, odio harum, quae quidem amet sunt facere vel non eligendi minima laborum assumenda soluta hic porro." }}</p>
					<div v-if="Posts.data[0] != undefined">
						<RouterLink :to=/post/+Posts.data[0]._id><button  class="readBlogPost" @click="">Read Blog</button></RouterLink>
					</div>
				</article>
			</section>
			</div>
			<img class="heroImg" :src=Posts.data[0].headlineImage>
		</div>
		<main>
			<h2>Recently Uploaded Blogs:</h2>
			<div class="recentBlog">
				<RouterLink :to=/post/+post._id v-for="post in PostList" :key="uniqid()">
				<div class="blogCard">
					<img :src=post.headlineImage>
					<h1>{{ post.title }}</h1>
					<p>{{ DateTime.fromISO(post.date).toLocaleString(DateTime.DATETIME_MED) }}</p>
					<p>{{ post.content }}</p>
				</div>
				</RouterLink>
			</div>
		</main>
	</section>
	<Footer/>
</template>
<style scoped>
	.homeHero {
		height: 600px;
		position:relative;
/*		background-color:black;*/
		overflow:hidden;
	}
	.gradient {
		width:100%;
		height:100%;
		position:absolute;
  		display:inline-block;
  		background: linear-gradient(to right, transparent,rgb(0,0,0,0.85),black);
	}
	.heroImg {
/*		width:100%;*/
		height:100%;
	}
	.blogHeroInfo{
		height:100%;
		color:white;
		display:grid;
		justify-content:center;
		align-items:center;
		grid-template-columns: 1fr 1fr;
	}
	.blogHeroInfo article {
		padding:24px;
		color:white;
		grid-column: 2 / 3;
	}
	.blogHeroInfo article h2{
		font-size:2rem;
		font-weight:bold;
		color: var(--main-color);
	}
	.blogHeroInfo article p {
		font-size:1.25rem;
		margin-bottom:12px;
	}
	.blogHeroInfo article button {
/*		background-color:white;*/
/*		color:var(--matte-black);*/
/*		border:4px solid transparent;*/
		font-size:1.5rem;
		padding:20px 40px;
		font-weight: bold;
		background-color: transparent;
		color: white;
		border:4px solid var(--main-color);
	}
	.blogHeroInfo article button:hover {
		background-color: var(--main-color);
		color:white;
	}
	.blogHeroInfo article button:active {
		/*background-color: transparent;
		color: white;
		border:4px solid var(--main-color);*/

		background-color:white;
		color:var(--matte-black);
		border:4px solid transparent;
	}
	main {
		padding: 24px 48px;
	}
	main h2 {
		font-size:2rem;
		margin-bottom:24px;
	}
	.recentBlog {
		display:grid;
		grid-template-columns: repeat(auto-fill,minmax(350px,1fr));
		gap:24px;
	}
	a {
		text-decoration: none;
		color: var(--matte-black);
	}
	.blogCard img {
		width:100%;
		height:250px;
		object-fit:cover;
	}
	.blogCard h1 {
		font-size:1.2rem;
        font-weight:bold;
        color: var(--matte-black);
	}
	.blogCard p, .blogCard h1 {
		width:100%;
		overflow-wrap: break-word;
	}
	@media (max-width:768px) {
		.blogHeroInfo {
			grid-template-columns: 1fr;
			grid-template-rows: 0fr 1fr;
		}
		.blogHeroInfo article {
			text-align:center;
			grid-column: 0 / 1;
			grid-row: 2 / 3;
		}
	}
	.loading {
		position:absolute;
		height:100%;
		width:100%;
		background-color:lightgray;
		display:flex;
		justify-content:center;
		align-items:center;
		z-index:999;
	}
	.rotate {
	  animation: rotation 2s infinite linear;
	}
	@media (max-width:600px) {
		.recentBlog {
			grid-template-columns:1fr;
		}
		main {
			padding: 12px 3vw;
		}
		.blogCard img {
			height:calc(225px);
		}
	}
	@keyframes rotation {
	  from {
	    transform: rotate(0deg);
	  }
	  to {
	    transform: rotate(359deg);
	  }
	}
</style>
