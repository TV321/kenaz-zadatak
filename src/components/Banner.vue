<template>
    <b-container fluid class="px-0">
        <div id="wrapper" >
            <b-container>
                <div id="banner" class="d-flex align-items-center justify-content-center" >
                    banner <br />
                    940x120
                </div>
            </b-container>
        </div>
    </b-container>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style lang="sass" scoped>  
    #wrapper
        background-color: #eeeeee
        padding: 0
        padding-top: 10px
    #banner
        border: 1px solid #d7d7d7
        height: 120px
        font-family: 'Varela Round', sans-serif
        background-color: #ffffff
        color: #999999      
</style>