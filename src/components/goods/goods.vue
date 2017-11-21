<template>
    <div v-show="showFlag" class="goods">
        <div class="inHeader">
            <div class="left" @click="goodShow">
                <i class="icon-back"></i>
            </div>
            <div class="right">
                <i class="icon-skip"></i>
            </div>
        </div>
        <div class="content">
            <img :src="goodsIn.img"/>
            <div class="line border-1px"></div>
            <div class="cost">
                <div class="left">
                    <div class="top">
                        {{goodsIn.name}}
                    </div>
                    <div class="bottom">￥{{goodsIn.price}}</div>
                </div>
                <div class="right">
                    <div class="top" @click="addPro($event)">
                        <i class="icon-favorites" :class="[{ add: goodsIn.isActive }, remove]"></i>
                    </div>
                    <div class="bottom">{{goodsIn.add}}</div>
                </div>
            </div>
            <div class="darkLine"></div>
            <div class="recommend">
               <ul>
                  <li v-for="item in goodsIn.recommend">
                      <img :src="item.img" width="48px" height="71"/>
                      <p>{{item.color}}</p>
                  </li>
               </ul>
            </div>
            <div class="darkLine"></div>
        </div>
        <div class="cartFooter">
            <div class="line border-1px"></div>
            <div class="footer">
                <div class="left">
                    <i class="icon-atm"></i>
                </div>
                <div class="right">
                    <div class="rLeft">加入购物车</div>
                    <div class="rRight">立即购买</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            showFlag: false
        };
    },
    props: {
        goodsIn: {
            type: Object
        }
    },
    methods: {
        show() {
            this.showFlag = true;
        },
        goodShow() {
            this.showFlag = false;
            console.log('1');
        },
        addPro(event) {
            if (this.goodsIn.isActive) {
                this.$message({
                    message: '取消收藏',
                    type: 'success'
                });
                this.goodsIn.isActive = false;
            } else {
                this.$message({
                    message: '成功收藏',
                    type: 'success'
                });
                this.goodsIn.isActive = true;
            }
        }
    }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixin";
.goods
    position:fixed
    top:0px
    left:0
    bottom:0px
    z-index:50
    width:100%
    background:#fff
    .inHeader
       display:flex
       justify-content:space-between
       height:40px
       width:100%
       .left
          margin-left:15px
          line-height:40px
       .right
          margin-right:15px
          line-height:40px
    .content
       width:100%
       text-align:center
       & > img
          padding:25px 0
       .line
          width:100%
          border-1px(rgba(7,17,27,0.1))
       .cost
          width:100%
          display:flex
          justify-content:space-between
          margin:10px 0
          .left
             margin-left:15px
             .top
                font-size:15px
                color:#333333
             .bottom
                font-size:15px
                color:#62ced7
                text-align:left
                margin-top:5px
          .right
             margin-right:15px
             .add
                color:#62CED7
             .remove
                color:#333
             .bottom
                font-size:11px
                color:#62ced7
       .darkLine
          width:100%
          height:8px
          background:#EEEEEE
       .recommend
          width:100%
          & > ul
             display:flex
             justify-content:space-around
             padding-top:20px
             & > li
                width:65px
                height:112px
                text-align:center
                & > p
                   margin-top:5px
                   font-size:12px
                   color:#666666
    .cartFooter
       width:100%
       height:50px
       position:fixed
       bottom:0
       left:0
       background:#fff
       .line
           width:100%
           border-1px(rgba(7,17,27,0.1))
       .footer
           width:100%
           .left
               flex:0 0 75px
               width:75px
               text-align:center
               .icon-atm
                  font-size:20px
                  line-height:50px
           .right
               flex:1
               display:flex
               flex-direction:row
               text-align:center
               font-size:15px
               .rLeft
                   flex:1
                   background:#E5E5E6
                   line-height:50px
               .rRight
                   flex:1
                   background:#62CED7
                   line-height:50px
</style>