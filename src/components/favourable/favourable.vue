<template>
<div class="favourable">
    <div class="fav-header">
        <headerBox></headerBox>
    </div>
    <div class="fav-content">
        <ul ref="lowItem">
            <li v-for="item in favourable">
                <img :src="item.img" width="100%" height="159"/>
                <div class="darkLine"></div>
            </li>
        </ul>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import headerBox from '../header/header.vue';
const ERR_OK = 0;
export default {
    data() {
        return {
            favourable: []
        };
    },
    components: {
        headerBox
    },
    created() {
        this.$http.get('/api/favourable').then((response) => {
            response = response.body;
            if (response.errno === ERR_OK) {
                this.favourable = response.data;
            }
        });
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.favourable
    width:100%
    .fav-header
        height:50px
        position:fixed
        top:50px
        left:0
        z-index:20
    .fav-content
        margin-top:50px
        margin-bottom:50px
        .darkLine
            width:100%
            height:10px
            background:#EFEFEF
</style>