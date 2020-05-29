<template>
<b-container>
    <div id="news-carousel-wrapper">
        
            <b-row class="mb-3">
                <b-col class="text-left">
                    <h3>News Carousel</h3>
                </b-col>
                <b-col class="d-flex align-items-center justify-content-end">
                    <b-img src="../../assets/prevy.png" class="mr-3 prev" @click="prev"></b-img>
                    <b-img src="../../assets/nexty.png" class="next" @click="next"></b-img>
                </b-col>
            </b-row>
                
            <b-row>
            <b-col>
                
            <b-carousel
                v-if="news.length"
                ref="newsCarousel"
                id="news-carousel"
                :interval="4000"
                v-model="slide"
                background="#ffffff"
                img-width="580"
                img-height="250"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
            >
                	<b-carousel-slide img-blank v-for="(articles, index) in chunkedNews" :key="index">
                        <b-row>
                            <b-col v-for="(item, index) in articles" :key="index" cols="6" md="6">
                                <b-img :src="item.urlToImage" class="img-fluid"></b-img>
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
    name: 'NewsCarousel',
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
			this.$refs.newsCarousel.prev()
		},
		next() {
			this.$refs.newsCarousel.next()
        },
        async fetchNews() {
            const url = `https://newsapi.org/v2/top-headlines?`
            const query = `sources=bbc-news&pageSize=8&apiKey=${ this.apiKey }`

            const data = await axios.get(url + query)
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
    computed: {
        chunkedNews()  {
            if(this.news.length > 0) {
                let arr = [...this.news]
                let chunks = []
                while (arr.length > 0) {
                    chunks.push(arr.splice(0, 2))
                }
                return chunks
            } else {
                return null
            }
        }
    },
    mounted() {
        this.fetchNews()
    }
}
</script>

<style lang="sass">
    .container
        padding-top: 10px
        padding-bottom: 10px
    #news-carousel-wrapper
        background-color: #ffffff
        border-left: 10px solid #fcc44d
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
    @media all and (max-width: 768px)


</style>