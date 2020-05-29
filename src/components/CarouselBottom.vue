<template>
    <b-container class="px-0">
    	<div id="carousel-bottom-wrapper">
    		<b-carousel
				ref="carouselBottom"
      			id="carousel-bottom"
      			v-model="slide"
      			background="#ababab"
      			img-width="1024"
      			img-height="400"
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
		
					<b-carousel-slide img-src="https://picsum.photos/1024/550/?image=66">
						<div class="contentWrapper">
							<div class="content d-flex flex-column align-items-between justify-content-between">
									<div class="d-flex align-items-center justify-content-center">
											<b-img fluid src="../assets/searchb.png"></b-img>
									</div>
									<div class="d-flex align-items-center justify-content-around">
										<b-img src="https://picsum.photos/120/120/?image=63"></b-img>
										<b-img src="https://picsum.photos/120/120/?image=65"></b-img>
										<b-img src="https://picsum.photos/120/120?image=12"></b-img>
										<b-img src="https://picsum.photos/120/120/?image=18"></b-img>
										<b-img src="https://picsum.photos/120/120/?image=43"></b-img>
										<b-img src="https://picsum.photos/120/120/?image=52"></b-img>
										<b-img src="https://picsum.photos/120/120/?image=67"></b-img>
									</div>
							</div>
						</div>
					</b-carousel-slide>	
							
    		</b-carousel>
  		</div>
    </b-container>
</template>

<script>
export default {
	data: () => ({
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
			this.$refs.carouselBottom.prev()
		},
		next() {
			this.$refs.carouselBottom.next()
		},
	},

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
		height: 400px !important
	.contentWrapper
		display: flex
		flex-direction: column
		justify-content: flex-end
		height: 100%
		position: relative
		box-sizing: border-box
		padding: 20px
		background: rgb(2,0,36)
		background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0) 0%, rgba(4,7,59,0) 50%, rgba(0,5,6,1) 100%)
		.content
			width: 100%
			text-align: left
			height: 280px
	#carousel-bottom-wrapper
		position: relative
		height: 400px
		&:hover
			cursor: pointer
	.left, .right
		position: absolute
		z-index: 15
		top: 35%
		margin-top: -25px
		&:hover
			cursor: pointer
	.left
		left: 2%
	.right
		right: 2%


</style>