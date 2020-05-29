<template>
    <b-container class="p-0">
        <div id="popular">
            <div class="asideCard" v-for="n in 5" :key="n">
                <b-row>
                    <b-col cols="12" lg="7">
                        <b-row>
                            <b-col class="text-left" cols="8"><p>August 26, 2013</p></b-col>
                            <b-col class="text-right" cols="4"><p><b-img src="../../assets/bubble1.png"></b-img> 5</p></b-col>
                        </b-row>
                        <b-row>
                            <b-col class="text-left">
                                <h4>Palestinians call off peace talks after clash</h4>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="12" lg="5" class="d-flex justify-content-end">
                        <b-img fluid src="https://picsum.photos/200/200/?image=54" ></b-img>
                    </b-col>
                </b-row>
            </div>
        </div>
    </b-container>
</template>

<script>
export default {
    name: 'Popular'
}
</script>

<style lang="sass">
    #popular
        .asideCard
            background-color: #4d4382
            padding: 6% 9%
            border-bottom: 2px solid #3e3668
            transition: all .3s linear
            &:hover
                cursor: pointer
                background-color: #3e3668
            img.img-fluid
                border: 2px solid #ffffff
                width: 70px
                height: auto
            h4
                font-size: .9em
                font-family: Bitter
                color: #ffffff
                font-weight: 500
            p
                font-size: .6em
                font-family: 'Varela Round', sans-serif
                color: #acb3ba
                margin: 0
</style>