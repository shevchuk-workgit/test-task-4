<template>
  <template v-if="user">
    <h2 class="user_header">{{ user.username }}</h2>
    <user-features :user="user"></user-features>
    <h2 class="user_header">Посты:</h2>
    <div class="user-post-preview_container">
      <user-post-preview :postId="0" class="user-page_user-post-preview_block"></user-post-preview>
      <user-post-preview :postId="1" class="user-page_user-post-preview_block"></user-post-preview>
      <user-post-preview :postId="2" class="user-page_user-post-preview_block"></user-post-preview>
    </div>
    <router-view></router-view>
    <ui-button
      @click="
        $router.push({
          name: 'postList',
          params: { userId: user.id },
        })
      "
      class="button"
      >Посмотреть все посты</ui-button
    >
  </template>
</template>

<script>
import UiButton from "../Ui/UiButton.vue";
import UserFeatures from "./user-page/UserFeatures.vue";
import UserPostPreview from "./reused-components/UserPostPreview.vue";
export default {
  components: { UserFeatures, UserPostPreview, UiButton },
  data() {
    return {
      user: false,
    };
  },

  methods: {
    async getApiUsersList() {
      const apiUsersList = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      )
        .then((res) => res.json())
        .catch((error) => console.log("USERS LIST API ERROR: ", error));

      this.user = apiUsersList[this.$route.params.userId - 1];
    },
  },

  mounted() {
    this.getApiUsersList();
  },
};
</script>

<style scoped>
.user_header {
  margin-bottom: 15px;

  font-family: "Alegreya Sans SC", sans-serif;
  font-weight: 500;
  font-size: 35px;
}
.user-post-preview_container {
  display: flex;
  margin-bottom: 20px;
}
.user-page_user-post-preview_block{
  width: 100%;
  margin-right: 20px;
}
.user-page_user-post-preview_block:last-child{
  margin-right: 0;
}
.button {
  width: 100%;
  font-size: 17px;
}
</style>
