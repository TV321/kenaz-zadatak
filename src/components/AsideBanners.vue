<template>
    <b-container class="px-0">
        <div id="banners">
                <div class="banner d-flex align-items-center justify-content-center">
                    banner <br>
                    123x123
                </div>
                <div class="banner d-flex align-items-center justify-content-center">
                    banner <br>
                    123x123
                </div>
        </div>
    </b-container>

</template>

<script>
export default {
    name: 'AsideBanners2'
}
</script>

<style lang="sass" scoped>
    #banners
        background-color: #dddddd
        padding: 20px 15px
        display: flex
        justify-content: space-around
        .banner
            font-family: 'Varela Round', sans-serif
            background-color: #ffffff
            color: #999999
            border: 1px solid #d7d7d7
            width: 123px
            height: 123px
    @media all and (max-width: 992px)
        #banners
            display: none

</style>