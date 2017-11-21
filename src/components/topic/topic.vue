<template>
<div class="topic">
    <div class="topic-header">
        <headerBox></headerBox>
    </div>
    <div class="topic-content">
        <div class="topicT" v-for="item in topic">
            <img :src="item.bannerImg"  width="100%" height="200"/>
            <div class="imgBox" ref="imgBox">
                <ul ref="sImg">
                    <li v-for="(item,index) in item.book">
                        <img :src="item.img" width="100" height="100">
                        <div class="detail">
                            <p class="name">{{item.name}}</p>
                            <p class="price">￥{{item.price}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll';
import headerBox from '../header/header.vue';
const ERR_OK = 0;
export default {
    data() {
        return {
            topic: []
        };
    },
    components: {
        headerBox
    },
    created() {
        this.$http.get('/api/topic').then((response) => {
            response = response.body;
           if (response.errno === ERR_OK) {
               this.topic = response.data;
           }
        });
    },
    watch: {
        'topic'() {
            this.$nextTick(() => {
                this._initScroll();
                this._initPics();
            });
        }
    },
    mounted() {
        this.$nextTick(() => {
            this._initScroll();
            this._initPics();
        });
    },
    methods: {
        _initScroll() {
            for (var i = 0; i < this.topic.length; i++) {
                var name = this.otherScroll + i;
                if (!name) {
                    name = new BScroll(this.$refs.imgBox[i], {
                        click: true
                    });
                } else {
                    name.refresh();
                }
            }
        },
        _initPics() {
            for (var i = 0; i < this.topic.length; i++) {
                if (this.topic[i].book) {
                    let picWidth = 100;
                    let margin = 8;
                    let width = (picWidth + margin) * this.topic[i].book.length - margin;
                    this.$refs.sImg[i].style.width = width + 'px';
                    this.$nextTick(() => {
                        for (var i = 0; i < this.topic.length; i++) {
                            var nameA = this.oScroll + i;
                            if (!nameA) {
                                nameA = new BScroll(this.$refs.imgBox[i], {
                                    scrollX: true,
                                    scrollY: false,
                                    ventPassthrough: 'vertical'
                                });
                            } else {
                                nameA.refresh();
                            }
                        }
                    });
                }
            }
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.topic
    width:100%
    .topic-header
        height:50px
        position:fixed
        top:50px
        left:0
        z-index:20
    .topic-content
        width:100%
        margin-top:30px
        margin-bottom:50px
        .topicT
            width:100%
            margin-bottom:18px
            .imgBox
                width:100%
                white-space: nowrap
                margin-top:5px
                height:155px
                overflow:hidden
                & > ul
                    padding-left:10px
                    & > li
                        display: inline-block
                        margin-right: 6px
                        width: 100px
                        height:155px
                        overflow:hidden
                        &:last-child
                            margin: 0
                        & > img
                            border-radius:8px
                        .detail
                            text-align:center
                            font-size:0
                            .name
                                font-size:12px
                                color:#666666
                                margin-top:5px
                            .price
                                font-size:14px
                                color:#62CED7
                                margin-top:5px
                                font-weight:600
</style>