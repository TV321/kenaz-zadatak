<template>

    <b-container fluid class="px-0">
        <div class="category">
            <Carousel />
            <b-container>
                <b-row>
                    <b-col cols="8">
                        <CategoryNews :name="name" :key="this.$route.fullPath" :updateList="updateList" @clickedObj="updateData"/>
                        <Banner2 />
                    </b-col>
                    <b-col cols="4">
                        <Aside 
                            :path="{ name: 'Popular' }"
                        />
                        <AsideBanners />
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </b-container>

</template>

<script>
import Carousel from '@/components/Carousel.vue'
import CategoryNews from '@/components/category/CategoryNews.vue'
import Banner2 from '@/components/Banner2.vue'
import AsideBanners from '@/components/AsideBanners.vue'
import Aside from '@/components/Aside.vue'

export default {
    props: ['name', 'updateList'],
    name: 'Category',
    components: {
        Carousel,
        CategoryNews,
        Banner2,
        AsideBanners,
        Aside
    },
    data: () => ({
        clickedList: []
    }),
    methods: {
        updateData(payload){
            console.log(payload)
            this.clickedList = [...this.clickedList, payload]
            console.log(this.clickedList)
            this.$emit('clickedArticle', payload)
        }
    }
}
</script>

<style lang="sass" scoped>
    .category
        background-color: #eeeeee

</style>