<template>
    <epfl-header></epfl-header>
    <menu></menu>
    <h2>{{ title }}</h2>
    <router-view></router-view>
</template>

<script>
import epflheader from './templates/header.vue'
import menu from './templates/menu.vue'

export default {
  components: {
    'epfl-header': epflheader,
    menu: menu
  },
  data:function() {
    return {
      title: 'EPFL Graph application!'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
