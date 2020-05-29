<template>
    <b-container class="px-0">
        <div id="comments" class="text-left">
            <h2 class="mb-4">Comments</h2>
                <b-row v-for="n in 3" :key="n" class="comment-content">
                    <b-col cols="2" class="pr-0">
                        <b-img src="../../assets/comments.png" class="img-fluid"></b-img>
                    </b-col>
                    <b-col cols="10">
                        <b-container class="py-0 pl-0">

                        
                        <b-row class="mb-2">
                            <b-col cols="auto pl-0">
                                <p class="name">Matt Adams</p>
                            </b-col>
                            <b-col  cols="auto d-flex align-items-end">
                                <p class="date">Jan 2, 2013 2:35pm</p>
                            </b-col>
                            <b-col  cols="auto ml-auto pr-0">
                                <p class="reply">Reply</p>
                            </b-col>
                        </b-row>
                        <b-row>
                            <p class="comment">
                                Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac 
                                ultrices nulla non netus. Placerat vehicula donec non suscipit egestas, augue vel
                                suspendisse. Et felis venenatis blandit sed est ultrices, adipiscing urna.
                            </p>
                        </b-row>
                        </b-container>

                    </b-col>
                </b-row>
            <h2 class="mb-4">Add Your Comment</h2>
            <p class="mb-4">
                Molestias ultricies, ante quam urna ut volutpat, egestas dolor dui, nec hac ultrices nulla non netus.
                Placerat vehicula donec non suscipit egestas, augue vel suspendisse. Et felis venenatis blandit sed 
                est ultrices, adipiscing urna.
            </p>
            <form action="">
                <input type="text" placeholder="Name">
                <br>
                <input type="mail" placeholder="Email Address">
                <br>
                <textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea>
                <br>
                <input type="submit" value="Submit">
            </form>
        </div>
    </b-container>
</template>

<style lang="sass">
    #comments
        form
            input, textarea
                color: #6e6e6e
                background-color: #dddddd
                border: 0
                font-family: 'Varela Round'
                margin-bottom: 10px
                padding: 10px 20px
                outline: none
                border-bottom: 2px solid #dddddd
                transition: all .2s ease-in
                &:focus
                    border-bottom: 2px solid #4d4382
                &[type=text],&[type=mail]
                    width: 60%
                &[type=submit]
                    border: 0
                    padding: 10px 40px
                    color: #ffffff
                    background-color: #4d4382
                    transition: all .3s linear
                    &:hover
                        background-color: lighten(#4d4382, 10%)
            textarea
                width: 100%
        background-color: #ffffff
        padding: 30px
        color: #363f48
        .comment-content
            margin-bottom: 50px
        h2
            font-family: Bitter
            font-size: 1.5em
            font-weight: 600
        p
            font-family: 'Varela Round'
            margin: 0
            font-size: .9em
            &.name
                color: #4d4382
                font-size: 1.2em
                font-family: Bitter
                line-height: 1.2
            &.date
                font-size: .8em
                color: #666666
            &.reply
                color: #4d4382
                font-weight: 600
                font-size: .9em
</style>