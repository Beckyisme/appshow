<template>
<div class="app">
    <div class="content">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
    <div class="footer">
        <div class="footer-item">
            <router-link to="/">
                <span class="icon icon-assessed-Badge"></span>
                <span>文艺精选</span>
            </router-link>
        </div>
        <div class="footer-item">
            <router-link to="/topic">
                <span class="icon icon-store"></span>
                <span>文具专题</span>
            </router-link>
        </div>
        <div class="footer-item">
            <router-link to="/people">
                <span class="icon icon-atm"></span>
                <span>达人推荐</span>
            </router-link>
        </div>
        <div class="footer-item">
            <router-link to="/favourable">
                <span class="icon icon-account"></span>
                <span>限时优惠</span>
            </router-link>
        </div>
   </div>
</div>
</template>

<script type="text/ecmascript-6">
 export default {
 };
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
    width:100%
    .content
        width:100%
    .footer
        width:100%
        height:50px
        bottom:0
        left:0
        z-index:20
        overflow:hidden
        display:flex
        flex-wrap:nowrap
        justify-content:space-around
        position:fixed
        background:#fff
        .footer-item
            text-align:center
            margin-top:5px
            & > a
                text-decoration:none
                color:#7A7A7A
                display:flex
                flex-direction:column
                .icon
                    margin-bottom:5px
                .icon-assessed-Badge,.icon-store,.icon-atm,.icon-account
                    font-size:20px
                span
                    font-size:11px
                &.active
                    color: #62CED7
</style>
