<template>
<div class="people">
    <div class="people-header">
        <headerBox></headerBox>
    </div>
    <div class="people-content" ref="people">
        <ul ref="peopleContent">
            <li v-for="item in people">
                <div class="pageTitle">
                    <div class="pLeft">
                        <img :src="item.head" width="40" height="40"/>
                    </div>
                    <div class="pCenter">
                        <div class="top">{{item.name}}</div>
                        <div class="bottom">
                            <span>文章 {{item.page}}</span>
                            <span>视频 {{item.video}}</span>
                            <span>图片 {{item.photo}}</span>
                        </div>
                    </div>
                    <div @click="sight($event)" class="pRight">
                       <span :class="[{ add: item.isActive }, remove]"> +关注</span>
                    </div>
                </div>
                <div class="pageContent" ref="imgBox">
                    <ul class="imgItem" ref="imgItem">
                        <li v-for="item in item.share">
                            <img :src="item.img" width="183" height="135"/>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll';
import headerBox from '../header/header.vue';
const ERR_OK = 0;
    export default{
        data() {
            return {
                people: []
            };
        },
        components: {
            headerBox
        },
        watch: {
            'people'() {
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
        created() {
            this.$http.get('/api/people').then((response) => {
                response = response.body;
                if (response.errno === ERR_OK) {
                    this.people = response.data;
                    this.$nextTick(() => {
                        this.meunScroll = new BScroll(this.$refs.people, {
                            click: true
                        });
                    });
                 }
            });
        },
        methods: {
            sight(event) {
                if (!event._constructed) {
                    return;
                }
                for (var i = 0; i < this.people.length; i++) {
                    if (this.people[i].isActive) {
                        this.$message({
                            message: '取消关注',
                            type: 'success'
                        });
                        this.people[i].isActive = false;
                    } else {
                        this.$message({
                            message: '关注成功',
                            type: 'success'
                        });
                        this.people[i].isActive = true;
                    }
                }
            },
            _initScroll() {
                for (var i = 0; i < this.people.length; i++) {
                    var name = this.photoScroll + i;
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
                for (var i = 0; i < this.people.length; i++) {
                    if (this.people[i].share) {
                        let picWidth = 183;
                        let margin = 10;
                        let width = (picWidth + margin) * this.people[i].share.length - margin;
                        this.$refs.imgItem[i].style.width = width + 'px';
                        this.$nextTick(() => {
                            for (var i = 0; i < this.people.length; i++) {
                                var nameA = this.oScroll + i;
                                if (!nameA) {
                                    nameA = new BScroll(this.$refs.imgBox[i], {
                                        scrollX: true,
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
.people
    width:100%
    .people-header
        height:50px
        position:fixed
        top:50px
        left:0
        z-index:20
    .people-content
        width:100%
        margin-top:60px
        margin-bottom:50px
        overflow:hidden
        &:last-child
            margin-bottom:30px
        & > ul
            width:100%
            overflow:hidden
            & > li
                height:225px
                .pageTitle
                   display:flex
                   .pLeft
                      flex:0 0 40px
                      width:40px
                      margin-left:15px
                   .pCenter
                      flex:1
                      display:flex
                      flex-direction:column
                      padding:0 10px
                      .top
                         font-size:14px
                         color:#333333
                         font-weight:700
                         margin-bottom:5px
                      .bottom
                         font-size:12px
                         color:#999999
                         margin-top:5px
                         & > span
                            margin-right:5px
                            font-weight:600
                   .pRight
                      flex:0 0 48px
                      width:48px
                      height:40px
                      margin-right:15px
                      & > span
                         border:1px solid #62CED7
                         border-radius:5px
                         line-height:40px
                         padding:5px
                         font-size:10px
                   .add
                      color:#fff
                      background:#62CED7
                   .remove
                      color:#333
                      background:none
                .pageContent
                   width:100%
                   white-space: nowrap
                   margin-top:15px
                   overflow:hidden
                   & > ul
                      margin-left:15px
                      & > li
                         display:inline-block
                         width:183px
                         height:135px
                         margin-right:10px
                         &:last-child
                            margin-right:0
                         & > img
                            border-radius:5px
</style>