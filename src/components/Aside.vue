<template>
    <b-container class="pt-0 px-0">
        <div id="aside">
            <div id="header">
                <b-row>
                    <b-col cols="12" lg="4"><router-link :to="path">Popular</router-link></b-col>
                    <b-col cols="12" lg="4"><router-link to="/top_rated">Top Rated</router-link></b-col>
                    <b-col cols="12" lg="4"><router-link to="/comments">Comments</router-link></b-col>
                </b-row>
            </div>
            <router-view></router-view>
            <div id="content">
                <b-row>
                    <b-col></b-col>
                </b-row>
            </div>

        </div>
    </b-container>
</template>

<script>
export default {
    name: 'Aside',
    props: ['path']
}
</script>

<style lang="sass">
    #aside
        background-color: #3e3668
        color: #ffffff
        #header
            padding: 15px 10px 15px 0
            overflow: hidden
        #content
            height: 42px
            background-color: #4d4382
        a
            font-family: 'Varela Round', sans-serif
            position: relative
            color: #ffffff
            font-size: .8em
            &.router-link-exact-active,
            // &.router-link-active
                color: #efbb4f
                &::after
                    content: ""
                    osition: absolute
                    border-bottom: 1px solid darken(#efbb4f, 30%)
                    top: 18px
                    bottom: 4px
                    left: 2px
                    right: 2px
                    transition: all 300ms linear
                &:hover::after
                    border-bottom: 1px solid #efbb4f

            &:hover
                text-decoration: none
            &::after
                content: ""
                position: absolute
                border-bottom: 1px solid darken(#ffffff, 30%)
                top: 18px
                bottom: 4px
                left: 2px
                right: 2px
                transition: all 300ms linear
            &:hover::after
                border-bottom: 1px solid #ffffff
    @media all and (max-width: 992px) 
        #aside
            #header
            #content
            a
                &.router-link-exact-active
                    &::after
                        left: -100px
                        right: -100px
                &::after
                    left: -100px
                    right: -100px

</style>