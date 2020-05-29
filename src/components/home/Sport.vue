<template>
<b-container class="px-0">
    <div id="sport">
        
            <b-row class="mb-3">
                <b-col class="text-left">
                    <h3>Sport</h3>
                </b-col>
                <b-col class="d-flex align-items-center justify-content-end">
                    <router-link :to="{ name: 'Popular', params: {name: 'sport'}}" >See all</router-link>
                </b-col>
            </b-row>
            <b-row>
                <b-col v-for="(item, index) in news" :key="index" cols="12" md="4">
                    <b-img :src="item.urlToImage" class="img-fluid"></b-img>
                    <b-row class="my-2">
                        <b-col class="text-left" cols="8">
                            <p>{{ dateFilter(item.publishedAt) }}</p>
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
            </div>
        </b-container>
    
</template>

<script>
export default {
    name: 'Sport',
    props: ['fetchNews', 'dateFilter'],
    data: () => ({
        news: []
    }),
    mounted() {
        this.fetchNews('sport', 3)
            .then(resp => {
                this.news = resp
            })
    }
}
</script>

<style lang="sass">
    .container
        padding-top: 10px
        padding-bottom: 10px
    #sport
        background-color: #ffffff
        border-left: 10px solid #84c14f
        box-sizing: border-box
        padding: 25px
        h3
            font-family: Bitter
            font-weight: 600
            color: #363f48
            font-size: 1.5em
        h4
            font-family: Bitter
            color: #363f48
            font-weight: 600
            font-size: 1em
        p
            font-family: 'Varela Round', sans-serif
            color: #666666
            font-size: .8em
            margin: 0
        a
            font-family: 'Varela Round', sans-serif
            position: relative
            color: #3677b5
            &:hover
                text-decoration: none
            &::after
                content: ""
                position: absolute
                border-bottom: 1px solid lighten(#3677b5, 30%)
                top: 18px
                bottom: 4px
                left: 2px
                right: 2px
                transition: all 300ms linear
            &:hover::after
                border-bottom: 1px solid #3677b5
    @media all and (max-width: 992px)
        #sport
            height: auto
</style>