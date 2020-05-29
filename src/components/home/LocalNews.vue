<template>
<b-container>
    <div id="local-news-carousel-wrapper">
        
            <b-row class="mb-3">
                <b-col class="text-left">
                    <h3>Local News</h3>
                </b-col>
                <b-col class="d-flex align-items-center justify-content-end">
                    <b-img src="../../assets/prevb.png" class="mr-3 prev" @click="prev"></b-img>
                    <b-img src="../../assets/nextb.png" class="next" @click="next"></b-img>
                </b-col>
            </b-row>
                
            <b-row>
            <b-col>
                
            <b-carousel
                ref="localNewsCarousel"
                id="local-news-carousel"
                :interval="4000"
                v-model="slide"
                background="#ffffff"
                img-width="580"
                
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                	<b-carousel-slide img-blank v-for="(item, index) in news" :key="index">
                        <b-row>
                            <b-col>
                                <b-row class="d-flex align-items-center justify-content-center">
                                    <b-img :src="item.urlToImage" class="img-fluid" id="local-img"></b-img>
                                </b-row>

                                <b-row class="my-1">
                                    <b-col class="text-left" cols="8">
                                        <p>{{ item.publishedAt | date }}</p>
                                    </b-col>
                                    <b-col class="text-right" cols="4">
                                        <p><b-img src="../../assets/bubble1.png"></b-img> 5</p>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col class="text-left">
                                        <h4>{{ item.title }}</h4>
                                     </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
					</b-carousel-slide>	

            </b-carousel>
            </b-col>
            </b-row>

    </div>
</b-container>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    name: 'LocalNews',
    data: () => ({
        apiKey: '97c61c2700cd420e9f70b850ff3f71c0',
        slide: 0,
        sliding: null,
        news: [],

    }),
    methods: {
        onSlideStart(slide) {
			this.sliding = true
		},
		onSlideEnd(slide) {
			this.sliding = false
        },
        prev() {
			this.$refs.localNewsCarousel.prev()
		},
		next() {
			this.$refs.localNewsCarousel.next()
        },
        
        async fetchNews() {
            const url = `https://newsapi.org/v2/top-headlines?`
            const query = `country=rs&pageSize=8&apiKey=${ this.apiKey }`

            const data = await axios.get(url + query)
            console.log(data.data.articles)
            this.news = data.data.articles
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
    #local-img
        max-height: 150px
    .container
        padding-top: 10px
        padding-bottom: 10px
    #local-news-carousel-wrapper
        background-color: #ffffff
        border-left: 10px solid #a99765
        box-sizing: border-box
        padding: 25px
        .prev, .next
            &:hover
                cursor: pointer
        h3
            font-family: Bitter
            font-weight: 600
            color: #363f48
            font-size: 1.2em

        h4
            font-family: Bitter
            color: #363f48
            font-weight: 600
            font-size: 1em
            margin: 0
        p
            font-family: 'Varela Round', sans-serif
            color: #666666
            font-size: .8em
            margin: 0
    @media all and (max-width: 992px)
        #local-news-carousel-wrapper 
            height: 450px 
            overflow: hidden
        #local-img
            max-height: 250px
    @media all and (max-width: 768px)
        #local-news-carousel-wrapper 
            height: auto
        #local-img
            max-height: 150px

</style>