<template>
  <template v-if="userPosts">
    <h2 class="header">Список постов пользователя</h2>
    <div class="user-post-list_user-post-preview_container">
      <div
        v-for="(post, index) in userPosts"
        :key="post.id"
        class="user-post-list_user-post-preview_wrapper"
      >
        <user-post-preview
          :postId="index"
          class="user-post-list_user-post-preview_block"
        ></user-post-preview>
        <ui-button
          @click="
            $router.push({
              name: 'userPost',
              params: { postId: post.id },
            })
          "
          >Подробнее</ui-button
        >
      </div>
    </div>
  </template>
</template>

<script>
import UiButton from "../Ui/UiButton.vue";
import UserPostPreview from "./reused-components/UserPostPreview.vue";
export default {
  components: { UserPostPreview, UiButton },
  data() {
    return {
      userPosts: false,
    };
  },
  methods: {
    async getApiUserPosts() {
      const apiUserPost = await fetch(
        `https://jsonplaceholder.typicode.com/users/${this.$route.params.userId}/posts/`
      )
        .then((res) => res.json())
        .catch((error) => console.log("USERS POSTS API ERROR: ", error));

      // console.log(apiUserPost);

      this.userPosts = apiUserPost;
      // console.log(this.userPosts);
    },
  },

  mounted() {
    this.getApiUserPosts();
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 15px;

  font-family: "Alegreya Sans SC", sans-serif;
  font-weight: 500;
  font-size: 35px;
}
.user-post-list_user-post-preview_container {
  display: flex;
  flex-direction: column;
}
.user-post-list_user-post-preview_wrapper {
  display: flex;
  margin: 10px 0;
}

.user-post-list_user-post-preview_block {
  width: 100%;
  border-right: none;
}
</style>
