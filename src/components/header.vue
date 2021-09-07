<!--
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-04-07 17:23:57
 * @LastEditTime: 2021-09-07 09:46:26
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \issue-generator\src\components\header.vue
-->
<template lang="pug">
  nav
    el-menu(theme="dark", mode="horizontal", :default-active="language", :router="true")
      li
        a(href="https://github.com/zouyaoji/vue-cesium", target="_blank")
          img(src="../assets/images/vue-cesium-logo.svg")

      el-menu-item.right(index="zh-CN") 中文
      el-menu-item.right(index="en-US") English
</template>

<script>
  export default {
    name: 'main-header',

    data () {
      return {
        language: ''
      }
    },

    computed: {
      lang () {
        return this.$route.path.split('/')[1] || window.navigator.language
      }
    },

    watch: {
      lang: {
        handler (val) {
          this.language = val
        },
        immediate: true
      }
    }
  }
</script>

<style lang="stylus">
  .el-menu--horizontal
    li
      float left
      height 60px
      line-height 60px
      margin 0
      cursor pointer
      position relative
      box-sizing border-box
      color #bfcbd9
      padding 0 20px
      img
        margin-top 11px
        height: 38px
    .el-menu-item.right
      float right
</style>
