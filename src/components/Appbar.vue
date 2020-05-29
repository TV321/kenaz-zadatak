<template>
    <b-container fluid class="px-0">
        <div id="appbar">
            <b-container class="py-0">
                <b-row>

                    <b-col class="d-flex align-items-center" cols="4" md="4" sm="4">
                        <div id="logo" class="mr-3 d-flex justify-content-center">
                            <img src="../assets/logo.png" alt="Kenaz logo">
                        </div>
                        <h1><router-link :to="{name: 'Pop'}">Kenaz</router-link></h1>
                    </b-col>

                    <b-col class="d-flex justify-content-end align-items-center " cols="8" md="8" sm="8">
                        <div id="searchForm">
                            <form action="" class="form" ref="form" @submit.prevent="onSubmit">
                                <input type="text" placeholder="Search..." class="mr-2" v-model="queryString">
                                <select name="categories" id="categories" v-model="category">
                                    <option value="general">News</option>
                                    <option value="sport">Sport</option>
                                    <option value="business">Business</option>
                                    <option value="technology">Tech</option>
                                </select>
                            </form>
                        </div>

                        <div id="search" class="ml-3 d-flex justify-content-center" @click="toggleClass">
                            <img src="../assets/search.png" alt="Kenaz logo">
                        </div>
                    </b-col>

                </b-row>   
            </b-container>
        </div>
    </b-container>
</template>

<script>
export default {
    name: 'Appbar',
    data: () => ({
        queryString: '',
        category: 'general',
    }),
    methods: {
        toggleClass() {
            this.$refs.form.classList.toggle('toggle')
        },
        onSubmit() {
            if(this.queryString) {
                this.$router.push({ name: 'Popular', params: {name: this.category}, query: {queryString: this.queryString}})
                this.queryString = ''
                this.$refs.form.reset()
            }
        }
    }
}
</script>

<style lang="sass" scoped>
    #appbar
        background-color: #252525
        color: #ffffff
        height: 50px
        #logo
            width: 60px
            height: 50px
            background-color: #303030
        #search
            width: 60px
            height: 50px
            background-color: #303030
            transition: background-color .3s linear
            &:hover
                cursor: pointer
                background-color: lighten(#303030, 10%)
        #searchForm
            overflow: hidden
        input
            max-width: 150px
            box-sizing: border-box
            height: 30px
            padding: 0 5px
        select
            padding: 0
            height: 30px
        h1
            margin: 0
            font-size: 1.5em
            font-family: 'Bitter', serif
            font-weight: 400

    .form
        transition: all .3s linear
        transform: translate(100%, 0)
    .toggle
        transform: translate(0, 0)

    @media all and (max-width: 768px)
        #appbar
            input
                width: 100px
                height: 25px
                font-size: .9em
            select
                width: 85px
                height: 25px
                font-size: .9em
            h1 
                font-size: 1.2em
    .router-link-exact-active,
    .router-link-active
        color: #ffffff
        transition: all .3s linear
        &:hover
            text-decoration: none
            color: darken(#ffffff, 30%)
</style>