<template>
    <b-container>
    	<div id="carousel">
    		<b-carousel
				ref="carousel1"
      			id="carousel-1"
      			v-model="slide"
				v-if="news.length"
      			background="#ababab"
      			img-width="1024"
      			img-height="480"
      			style="text-shadow: 1px 1px 2px #333;"
      			@sliding-start="onSlideStart"
      			@sliding-end="onSlideEnd"
    		>
				<div class="left" @click="prev">
					<img src="../assets/prev.png" alt="">
				</div>
				<div class="right" @click="next">
					<img src="../assets/next.png" alt="">
				</div>
		
					<b-carousel-slide :img-src="item.urlToImage"
						v-for="(item, index) in news" :key="index">
						<div class="contentWrapper">
							<div class="content ml-2">
								<p>{{ item.publishedAt | date }}</p>
								<div class="content-title">
									<h2>{{ item.title }}</h2>
								</div>
								<button>Read article</button>
							</div>
						</div>
					</b-carousel-slide>	
							
    		</b-carousel>
  		</div>
    </b-container>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
	data: () => ({
		apiKey: '97c61c2700cd420e9f70b850ff3f71c0',
		testList: ['one', 'two'],
		news: [],
		slide: 0,
		sliding: null
	}),
	methods: {
		onSlideStart(slide) {
			this.sliding = true
		},
		onSlideEnd(slide) {
			this.sliding = false
		},
		prev() {
			this.$refs.carousel1.prev()
		},
		next() {
			this.$refs.carousel1.next()
		},
		async fetchNews() {
			const url = `https://newsapi.org/v2/top-headlines?`
			const query = `country=us&pageSize=4&apiKey=${ this.apiKey }`

			const fetch = await axios.get(url + query)
			this.news = fetch.data.articles
		}
	},
	filters: {
		date(value){
			const timestamp = new Date(value).getTime()
			const date = moment(timestamp).format('MMMM DD, YYYY')
			return date
		}
	},
	mounted() {
		this.fetchNews()
	}
}
</script>

<style lang="sass">
	.carousel-caption
		text-align: left !important
		right: 0 !important
		left: 0 !important
		top: 0 !important
		bottom: 0 !important
		padding: 0 !important
</style>

<style lang="sass" scoped>
	.carousel-item
		height: 480px !important
	.contentWrapper
		display: flex
		flex-direction: column
		justify-content: flex-end
		height: 100%
		position: relative
		box-sizing: border-box
		padding: 20px
		font-family: 'Varela Round', sans-serif
		background: rgb(2,0,36)
		background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0) 0%, rgba(4,7,59,0) 50%, rgba(0,5,6,1) 100%)
		background: rgb(255,255,255)
		background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5886729691876751) 60%, rgba(0,1,1,0.927608543417367) 100%)
		.content
			width: 70%
			text-align: left
			.content-title
				height: 120px
				overflow: hidden

			p
				margin: 0
			button
				border: 1px solid #ffffff
				background-color: transparent
				color: #ffffff
				font-size: 1em
				width: 140px
				height: 35px
			h2
				font-family: Bitter
				font-weight: 600
	#carousel
		position: relative
		height: 480px
	.left, .right
		position: absolute
		z-index: 15
		top: 50%
		margin-top: -25px
		&:hover
			cursor: pointer
	.left
		left: 2%
	.right
		right: 2%
</style>