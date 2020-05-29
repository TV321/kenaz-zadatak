<template>
    <b-container fluid class="px-0">
        <div id="navbar">
            <b-container class="py-0">
                <b-navbar toggleable="md" class="p-0 d-flex">
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav>
                            <b-nav-item 
                                :to="{ name: 'Popular', params: {name: item.link}}" 
                                v-for="(item, index) in links" 
                                :key="index"
                                >{{ item.name }}
                            </b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </b-container>
        </div>
    </b-container>
</template>

<script>
export default {
    name: 'Navbar',
    data: () => ({
        links: [
            {
                name: 'news',
                color: '#3677b5',
                link: 'general'
            },
                        {
                name: 'sport',
                color: '#84c14f',
                link: 'sport'
            },
                        {
                name: 'business',
                color: '#ee6151',
                link: 'business'
            },
                        {
                name: 'tech',
                color: '#fcc44d',
                link: 'technology'
            },
                        {
                name: 'travel',
                color: '#a99765',
                link: 'health'
            },
                        {
                name: 'life',
                color: '#5dcff3',
                link: 'science'
            }
        ]
    })
}
</script>

<style lang="sass" scoped>
    #navbar
        background-color: #4d4382

    .navbar
        height: 50px
        background-color: #4d4382

    #nav-collapse > ul > li:nth-child(1) > a
        border-bottom: 3px solid #3677b5
    #nav-collapse > ul > li:nth-child(2) > a
        border-bottom: 3px solid #84c14f
    #nav-collapse > ul > li:nth-child(3) > a
        border-bottom: 3px solid #ee6151
    #nav-collapse > ul > li:nth-child(4) > a
        border-bottom: 3px solid #fcc44d
    #nav-collapse > ul > li:nth-child(5) > a
        border-bottom: 3px solid #a99765
    #nav-collapse > ul > li:nth-child(6) > a
        border-bottom: 3px solid #5dcff3

    #nav-collapse > ul > li
        > a
            text-transform: uppercase
            font-family: Bitter
            font-weight: 600
            font-size: 1.2em
            color: #ffffff
            padding: 14px
            line-height: 1
            box-sizing: border-box
            height: 50px
            transition: all .2s linear
            &:hover
                background-color: #299ec3
                border-bottom: 0               
            // &.router-link-exact-active
            &.router-link-active
                background-color: #299ec3
                border-bottom: 0
    @media all and (max-width: 768px) 
        .navbar-nav
            background-color: #303030
            position: relative
            z-index: 30
        #navbar > div > nav > button
            margin: 5px 0
            border-radius: 0

</style>