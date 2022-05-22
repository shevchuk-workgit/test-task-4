<template>
  <div class="main_container">
    <user-header></user-header>
    <router-view></router-view>
  </div>
</template>

<script>
import UserHeader from './components/UserHeader.vue';
import "./reset.css";

export default {
  components: { UserHeader },

};
</script>

<style>
.main_container {
  padding: 50px;
}

</style>
