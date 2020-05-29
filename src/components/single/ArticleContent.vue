<template>
    <b-container  class="px-0 pt-0">
        <div id="article" class="text-left">
            <div class="acticle-content-text">
                <p>
                    {{ content }}
                </p>
            </div>

            <b-img src="https://picsum.photos/620/350/?image=128" class="img-fluid"></b-img>
            <div class="acticle-content-text bottom">
                <p>
                    Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna, at aliquam nullam facilisis aliquet sapien, eget duis consectetuer tristique nunc vitae erat, mi purus nisl lorem. 
                </p>
                <p>
                    Ac magna lobortis non, vulputate vitae viverra. Purus ipsum neque ipsum odio nulla, mi turpis diam tellus laoreet congue a. Rhoncus maecenas, sit suspendisse, condimentum purus convallis dui hendrerit. Purus ipsum neque ipsum odio nulla, mi turpis diam tellus laoreet congue. 
                </p>
            </div>

        </div>

    </b-container>
</template>

<script>
export default {
    props: ['content']
}
</script>

<style lang="sass">
    #article
        background-color: #ffffff
        .acticle-content-text
            font-family: Bitter
            margin: 0
            padding: 30px
            font-size: .9em
            &.bottom
                font-family: 'Varela Round'
</style>