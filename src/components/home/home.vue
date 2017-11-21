<template>
<div>
<div class="home">
    <div class="home-header">
        <headerBox></headerBox>
    </div>
    <div class="home-banner">
        <el-carousel trigger="click" height="158px">
            <el-carousel-item v-for="item in goods.banner" :key="item">
                <img :src="item.img" width="100%" height="158"/>
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="home-content">
        <div class="saleList">
            <h4>TOP热卖清单 </h4>
            <div class="sale" ref="wrapper">
                <ul ref="contentWrapper">
                    <li @click="selectProduct(goodsIn,$event)"  v-for="goodsIn in goods.hotList" class="list">
                        <div class="list-img">
                            <img :src="goodsIn.img">
                            <p class="title">{{goodsIn.name}}</p>
                            <p class="price">￥{{goodsIn.price}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="all">
                查看全部 &gt;
            </div>
        </div>
        <div class="blackLine"></div>
        <div class="classesTitle">
            <h4>精选专题</h4>
            <div class="sTitle">
                <img :src="goods.photos.titleImg" width="100%" height="200"/>
            </div>
            <div class="imgBox" ref="imgBox">
                <ul ref="sImg">
                    <li v-for="(item,index) in goods.photos.list" class="photos">
                        <img :src="item.img" width="100" height="100">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    <goods :goodsIn="selectedProduct" ref="goodsIn"></goods>
</div>
</template>

<script type="text/ecmascript-6">
import headerBox from '../header/header.vue';
import goods from '../goods/goods.vue';
import BScroll from 'better-scroll';
const ERR_OK = 0;
export default {
    data() {
        return {
            goods: [],
            selectedProduct: {}
        };
    },
    watch: {
        'goods'() {
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
    components: {
        headerBox,
        goods
    },
    created() {
        this.$http.get('/api/goods').then((response) => {
            response = response.body;
            if (response.errno === ERR_OK) {
                this.goods = response.data;
            }
        });
    },
    methods: {
         selectProduct(goodsIn, event) {
             console.log('1');
             this.selectedProduct = goodsIn;
             this.$refs.goodsIn.show();
         },
         _initScroll() {
            if (!this.meunScroll) {
                    this.meunScroll = new BScroll(this.$refs.wrapper, {
                    click: true
                 });
            } else {
                 this.meunScroll.refresh();
            }
            if (!this.photoScroll) {
                this.photoScroll = new BScroll(this.$refs.imgBox, {
                    click: true
                });
            } else {
                 this.photoScroll.refresh();
            }
        },
        _initPics() {
            if (this.goods.hotList) {
                let picWidth = 101;
                let margin = 10;
                let width = (picWidth + margin) * this.goods.hotList.length - margin;
                this.$refs.contentWrapper.style.width = width + 'px';
                this.$nextTick(() => {
                    if (!this.picScroll) {
                        this.picScroll = new BScroll(this.$refs.wrapper, {
                            scrollX: true,
                            eventPassthrough: 'vertical'
                        });
                    } else {
                        this.picScroll.refresh();
                    }
                });
            }
            if (this.goods.photos.list) {
                let picWidth = 101;
                let margin = 10;
                let width = (picWidth + margin) * this.goods.photos.list.length - margin;
                this.$refs.sImg.style.width = width + 'px';
                this.$nextTick(() => {
                    if (!this.pScroll) {
                        this.pScroll = new BScroll(this.$refs.imgBox, {
                            scrollX: true,
                            eventPassthrough: 'vertical'
                        });
                    } else {
                        this.pScroll.refresh();
                    }
                });
            }
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.home
    width:100%
    .home-banner
        width:100%
        margin-top:50px
    .home-content
        width:100%
        margin-top:10px
        .blackLine
            width:100%
            height:7px
            background:#EFEFEF
        .saleList
            width:100%
            & > h4
                text-align:center
                color:#333333
                &:after
                    content:' '
                    background:url('./rule.png') no-repeat 0 1px
                    background-size:18px 18px
                    display:inline-block
                    width:18px
                    height:18px
                    margin-left:10px
                &:before
                    content:' '
                    background:url('./rule.png') no-repeat 0 1px
                    background-size:18px 18px
                    display:inline-block
                    width:18px
                    height:18px
                    margin-right:5px
            .sale
                width: 100%
                overflow: hidden
                white-space: nowrap
                margin-top:10px
                & > ul
                    font-size:0
                    padding:0
                    .list
                        display: inline-block
                        margin-right: 6px
                        width: 101px
                        height: 150px
                        &:last-child
                            margin: 0
                        .list-img
                            text-align:center
                            & > img
                                width:79px
                                height:77px
                            .title
                                font-size:12px
                                color:#666666
                                margin-top:20px
                            .price
                                font-size:14px
                                color:#62CED7
                                margin-top:5px
                                font-weight:600
            .all
                overflow:hidden
                width:100%
                text-align:center
                margin-bottom:20px
                color:#333333
                font-size:14px
        .classesTitle
            width:100%
            height:390px
            & > h4
                text-align:center
                color:#333333
                margin-top:20px
                margin-bottom:15px
                &:after
                    content:' '
                    background:url('./rule.png') no-repeat 0 1px
                    background-size:18px 18px
                    display:inline-block
                    width:18px
                    height:18px
                    margin-left:10px
                &:before
                    content:' '
                    background:url('./rule.png') no-repeat 0 1px
                    background-size:18px 18px
                    display:inline-block
                    width:18px
                    height:18px
                    margin-right:5px
            .imgBox
                width:100%
                overflow:hidden
                white-space: nowrap
                margin-top:5px
                & > ul
                    font-size: 0
                    padding-left:10px
                    & > li
                        display: inline-block
                        margin-right: 6px
                        width: 100px
                        height: 100px
                        &:last-child
                            margin: 0
                        img
                            border-radius:8px
</style>