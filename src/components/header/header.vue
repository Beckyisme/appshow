<template>
<div class="box">
    <div class="left">
        <router-link to="/me">
            <i class="icon-account"></i>
        </router-link>
    </div>
    <div class="center">
        <input type="text" placeholder="请输入产品关键词或用户名" class="find">
    </div>
    <div class="right">
        <i class="icon-cart"></i>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
export default {

};
</script>

<style lang="stylus" rel="stylesheet/stylus">
.box
    width:100%
    height:30px
    display:flex
    position:fixed
    top:0
    left:0
    z-index:20
    background:#fff
    padding-top:10px
    padding-bottom:5px
    .left
        flex:0 0 20px
        width:20px
        height:20px
        margin: 5px 20px 0 15px
        vertical-align: center
    .center
        flex:1
        .find
            width:100%
            height:28px
            border-radius:6px
            background: #EFEFEF url(find.png) no-repeat 20px center;
            background-size:11px 13px
            border:none
            font-size:11px
            text-align:center
    .right
        flex:0 0 20px
        width:20px
        height:20px
        margin:5px 15px 0 20px
</style>