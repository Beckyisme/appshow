<template>
<div class="me">
    <div class="meHeader">
        <div class="left">
            我
        </div>
        <div class="right">
           <router-link to="/home">
               <i class="icon-back"></i>
           </router-link>
        </div>
    </div>
    <div class="line border-1px"></div>
    <div class="meTitle">
        <div class="left">
            <img :src="me.head" width="61" height="61"/>
        </div>
        <div class="center">
            <div class="top">{{me.name}}</div>
            <div class="bottom">{{me.summary}}</div>
        </div>
        <div class="right">></div>
    </div>
    <div class="lineDark"></div>
    <div class="order">
        <div class="orderTitle">
            <div class="orderLeft">
                我的订单
            </div>
            <div class="orderRight">></div>
        </div>
        <div class="line border-1px"></div>
        <div class="orderContent">
            <ul>
                <li v-for="item in me.order">
                    <img :src="item.img" width="25" height="25"/>
                    <p class="orderFont">{{item.name}}</p>
                </li>
            </ul>
        </div>
    </div>
    <div class="lineDark"></div>
    <div class="list">
        <ul>
            <li v-for="item in me.item">
                <div class="listLeft">
                    <img :src="item.img" width="20" height="20"/>
                </div>
                <div class="listRight">
                    <div class="innerLeft">
                        {{item.name}}
                    </div>
                    <div class="innerRight">></div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
const ERR_OK = 0;
    export default {
        data() {
            return {
                me: []
            };
        },
        created() {
            this.$http.get('/api/me').then((response) => {
                response = response.body;
                if (response.errno === ERR_OK) {
                    this.me = response.data;
                }
            });
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin";
.me
    width:100%
    .meHeader
        width:100%
        height:43px
        display:flex
        position:relative
        line-height:43px
        .left
            flex:1
            text-align:center
        .right
            position:absolute
            top:5px
            left:10px
            & > a
                text-decoration:none
            .icon-set
                font-size:20px
    .line
        width:100%
        border-1px(rgba(7,17,27,0.1))
    .meTitle
        width:100%
        height:61px
        display:flex
        margin-top:20px
        margin-bottom:20px
        .left
            flex:0 0 61px
            width:61px
            margin-left:15px
            margin-right:10px
        .center
            flex:1
            .top
                font-size:15px
                color:#333333
                font-weight:700
                margin-top:15px
            .bottom
                font-size:11px
                color:#999999
                margin-top:5px
        .right
            flex:0 0 10px
            width:10px
            margin-right:15px
            line-height:60px
            color:#999999
    .lineDark
        width:100%
        height:8px
        background:#EEEEEE
    .order
        width:100%
        height:118px
        .orderTitle
            width:100%
            height:44px
            display:flex
            justify-content:space-between
            .orderLeft
                margin-left:15px
                line-height:44px
                font-size:14px
                color:#333333
                font-weight:700
            .orderRight
                margin-right:15px
                line-height:44px
                color:#999999
        .orderContent
            width:100%
            & > ul
                display:flex
                justify-content:space-around
                margin-top:15px
                & > li
                    display:inline-block
                    text-align:center
                    .orderFont
                        font-size:11px
                        margin-top:5px
    .list
        width:100%
        & > ul
            & > li
                display:flex
                flex-direction:row
                width:100%
                height:50px
                &:last-child
                    margin-bottom:100px
                .listLeft
                    flex:0 0 20px
                    width:20px
                    margin-left:15px
                    margin-top:15px
                    margin-right:15px
                .listRight
                    flex:1
                    margin-right:15px
                    border-bottom:1px solid #EEEEEE
                    display:flex
                    flex-direction:row
                    .innerLeft
                        flex:1
                        line-height:50px
                    .innerRight
                        flex:0 0 10px
                        width:10px
                        line-height:50px
                        color:#999999
</style>