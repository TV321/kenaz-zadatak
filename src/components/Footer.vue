<template>
    <b-container fluid class="px-0">
        <div id="footer">
            <b-container>

                <b-row>
                    <b-col cols="4" class="d-flex align-items-center">
                        <b-container>
                            <b-row class="mb-2">
                                <b-col cols="2" class="px-0 d-flex">
                                    <b-img src="../assets/logob.png" fluid></b-img>
                                </b-col>
                                <b-col class="d-flex align-items-center px-0">
                                    <h3 id="logo">Kenaz</h3>
                                </b-col>
                            </b-row>
                        </b-container>
                    </b-col>
                    <b-col cols="4" class="d-flex align-items-center">
                        <h3>Newsletter</h3>
                    </b-col>
                    <b-col cols="4" class="d-flex align-items-center">
                        <h3>Tags Widget</h3>
                    </b-col>
                </b-row>
                <b-row class="mb-5">
                    <b-col cols="4" class="text-left">
                        <b-container>
                            <b-row>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Vivamus leo ante.
                                </p>
                            </b-row>
                            <b-row>
                                    <b-img class="sm-icon" src="../assets/sm/sm1.png" fluid></b-img>
                                    <b-img class="sm-icon" src="../assets/sm/sm2.png" fluid></b-img>
                                    <b-img class="sm-icon" src="../assets/sm/sm3.png" fluid></b-img>
                                    <b-img class="sm-icon" src="../assets/sm/sm4.png" fluid></b-img>
                                    <b-img class="sm-icon" src="../assets/sm/sm5.png" fluid></b-img>
                                    <b-img class="sm-icon" src="../assets/sm/sm6.png" fluid></b-img>
                                    <b-img class="sm-icon" src="../assets/sm/sm7.png" fluid></b-img>
                            </b-row>
    	                </b-container>
                    </b-col>
                    <b-col cols="4" class="text-left">
                        <b-container>
                            <b-row>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Vivamus leo ante.
                                </p>
                            </b-row>
                            <b-row>
                                <form action="" class="footer-form">
                                    <input type="text" placeholder="Your mail">
                                    <input type="submit" value="Subscribe">
                                </form>
                            </b-row>
                        </b-container>
                    </b-col>
                    <b-col cols="4" class="text-left">
                        <b-container>
                            <b-row>
                                <button class="widget">assueverit</button>
                                <button class="widget">utroquoe</button>
                                <button class="widget">probo</button>
                                <button class="widget">assuev</button>
                                <button class="widget">probo</button>
                                <button class="widget">assueverit</button>
                                <button class="widget">titl</button>
                                <button class="widget">assueverit</button>
                                <button class="widget">assueverit</button>
                                <button class="widget">utroquoe</button>
                                <button class="widget">probo</button>
                                <button class="widget">assueverit</button>
                                <button class="widget">utroquoe</button>
                            </b-row>
                        </b-container>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="4" class="text-left">
                        <h3 class="post-titles">Featured</h3>
                    </b-col>
                    <b-col cols="4" class="text-left">
                        <h3 class="post-titles">Random Posts</h3>
                    </b-col>
                    <b-col cols="4" class="text-left">
                        <h3 class="post-titles">Recently Viewed</h3>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="4" >
                        <b-container>
    	                    <b-row v-for="n in 3" :key="n" class="py-3" id="post-card">
                                <b-col cols="12" lg="8">
                                        <b-row class="date-row">
                                            <b-col class="text-left pl-0" cols="8">
                                                <p>
                                                    August 26, 2013
                                                </p>
                                            </b-col>
                                            <b-col class="text-right" cols="4">
                                                <p>
                                                    <b-img src="../assets/bubble1.png"></b-img>
                                                    5
                                                </p>
                                            </b-col>
                                        </b-row>
                                        <b-row class="text-left content-row">
                                            <p>
                                                Palestinians call off peace talks after clash
                                            </p>
                                        </b-row>
                                </b-col>
                                <b-col cols="12" lg="4" class="px-0 thumb-img d-flex justify-content-lg-end justify-content-start">
                                    <b-img src="https://picsum.photos/200/200/?image=54" fluid></b-img>
                                </b-col>
                            </b-row>

                        </b-container>
                    </b-col>
                    <b-col cols="4">
                        <b-container>
    	                    <b-row v-for="n in 3" :key="n" class="py-3" id="post-card">
                                <b-col cols="12" lg="8">
                                        <b-row class="date-row">
                                            <b-col class="text-left pl-0" cols="8">
                                                <p>
                                                    August 26, 2013
                                                </p>
                                            </b-col>
                                            <b-col class="text-right" cols="4">
                                                <p>
                                                    <b-img src="../assets/bubble1.png"></b-img>
                                                    5
                                                </p>
                                            </b-col>
                                        </b-row>
                                        <b-row class="text-left content-row">
                                            <p>
                                                Palestinians call off peace talks after clash
                                            </p>
                                        </b-row>
                                </b-col>
                                <b-col cols="12" lg="4" class="p-0 thumb-img d-flex justify-content-lg-end justify-content-start">
                                    <b-img src="https://picsum.photos/200/200/?image=54" fluid></b-img>
                                </b-col>
                            </b-row>
                        </b-container>
                    </b-col>
                    <b-col cols="4">
                        <b-container>
    	                    <b-row v-for="(article, index) in recentlyViewed" :key="index" class="py-3" id="post-card">
                                <b-col cols="12" lg="8">
                                        <b-row class="date-row">
                                            <b-col class="text-left pl-0" cols="8">
                                                <p>
                                                    {{ article.publishedAt | date }}
                                                </p>
                                            </b-col>
                                            <b-col class="text-right" cols="4">
                                                <p>
                                                    <b-img src="../assets/bubble1.png"></b-img>
                                                    5
                                                </p>
                                            </b-col>
                                        </b-row>
                                        <b-row class="text-left content-row">
                                            <p>
                                                {{ article.title }}
                                            </p>
                                        </b-row>
                                </b-col>
                                <b-col cols="12" lg="4" class="px-0 thumb-img d-flex justify-content-lg-end justify-content-start">
                                    <b-img :src="article.urlToImage" fluid></b-img>
                                </b-col>
                            </b-row>
                        </b-container>
                    </b-col>
                </b-row>


            </b-container>
        </div>
        <div id="bottom-section">
            <b-container>
                <b-row>
                    <b-col class="text-left">
                        <p>&copy; 2020 - Kenaz Template - Proudly made in Nuštar, Croatia</p>
                    </b-col>
                    <b-col class="text-right">
                        <p>Typography - Templates - Contact Form - 404 Page</p>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </b-container>
</template>

<script>
import moment from 'moment'
export default {
    props: ['recentlyViewed'],
    name: 'Footer',
    filters: {
        date(value){
			const timestamp = new Date(value).getTime()
			const date = moment(timestamp).format('MMMM DD, YYYY')
			return date
		}
    },
}
</script>

<style lang="sass" scoped>
    #post-card
        border-bottom: 1px solid #323232
        &:last-child
            border-bottom: 0
        .thumb-img
            img
                border: 2px solid #ffffff
                max-height: 75px

    #footer
        padding-top: 50px
        border-top: 20px solid #4d4382
        background-color: #252525
        color: #ffffff
        font-family: Bitter
        .footer-form
            display: flex
            flex-flow: row wrap
            align-items: flex-start
        input
            font-family: 'Varela Round', sans-serif
            padding: 0 20px
            height: 50px
            font-size: .9em
            border: 0
            box-sizing: border-box
            &[type=text]
                background-color: #333333
                color: #999999
                width: 180px
            &[type=submit]
                background-color: #4d4382
                color: #cccccc
                transition: all .3s linear
                &:hover
                    background-color: lighten(#4d4382, 5%)
        .date-row
            font-size: .8em
            font-family: 'Varela Round', sans-serif
            p
                margin: 0
        .content-row
            p
                color: #ffffff
                font-size: .9em
                margin: 0
        .post-titles
            color: #ffffff
        .widget
            margin: 3px
            font-size: .7em
            border: 0
            padding: 4px 8px
            font-family: 'Varela Round', sans-serif
            background-color: #333333
            color: #666666
            transition: all .3s linear
            &:hover
                background-color: #4d4382
                color: #cccccc

        h3
            color: #cccccc
            margin: 0
            font-size: 1.6em
            font-weight: 600
        #logo
            color: #45b0e3
            font-family: Bitter
            font-size: 1.9em
            font-weight: 400
        p
            color: #666666
            font-size: .9em
        .sm-icon
            padding: 3px
            &:hover
                cursor: pointer
    #bottom-section
        padding-top: 10px
        background-color: #252525
        border-top: 1px solid #323232
        color: #999999
        font-family: 'Varela Round', sans-serif
        font-size: .8em
    @media all and (max-width: 992px)
        #footer
            .footer-form
                flex-direction: column
                align-items: stretch
            input
                &[type=text]
                    width: 100%

</style>