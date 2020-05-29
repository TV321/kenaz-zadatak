<template>
    <b-container class="pb-0">
        <div id="header">
            <b-img :src="img" class="img-fluid"></b-img>
				<div class="content text-left d-flex align-items-end">
                    <div class="caption">
                        <p>{{ date | date }}</p>
                        <h2>{{ title }}</h2>
                    </div>
				</div>
			</div>
    </b-container>
</template>
<script>
import moment from 'moment'
export default {
    props: ['title', 'date', 'img'],
    filters: {
        date(value){
			const timestamp = new Date(value).getTime()
			const date = moment(timestamp).format('MMMM DD, YYYY')
			return date
		}
    },
}
</script>
<style lang="sass">
    #header
        position: relative
        color: #222222
        .content
            height: 100%
            width: 100%
            position: absolute
            bottom: 0
            left: 0
            padding: 30px
            background: rgb(2,0,36)
            background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0) 0%, rgba(231,231,231,0.4374124649859944) 50%, rgba(221,221,221,1) 100%)
            .caption
                width: 70%
                p
                    font-family: 'Varela Round', sans-serif
                    margin: 0
                h2
                    font-family: Bitter
                    font-weight: 600


</style>