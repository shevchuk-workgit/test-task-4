<template>
  <h2 class="user-post_header">Пост:</h2>
  <div class="user-post_post_container">
    <h3 class="user-post_title">
      {{ post.title }}
    </h3>
    <p class="user-post_post_font">
      {{ post.body }}
    </p>
  </div>
  <h2 class="user-post_header">Комментарии:</h2>
  <div v-for="comment in comments" :key="comment.id">
    <user-post-comment :comment="comment"></user-post-comment>
  </div>
  <ui-button class="user-post_button" @click="modalComment=true">Добавить комментарий</ui-button>
  <user-post-modal-add-comment v-if="modalComment" v-model:modalComment="modalComment" v-model:comments="comments"></user-post-modal-add-comment>
</template>

<script>
import UiButton from "../Ui/UiButton.vue";
import UserPostComment from "./user-post/UserPostComment.vue";
import UserPostModalAddComment from "./user-post/UserPostModalAddComment.vue";
export default {
  components: { UserPostComment, UiButton, UserPostModalAddComment },
  data() {
    return {
      post: false,
      comments: false,
      modalComment: false,
    };
  },

  methods: {
    async getApiPost() {
      const apiPost = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.postId}`
      )
        .then((res) => res.json())
        .catch((error) => console.log("USER POST API ERROR: ", error));

      // console.log(this.$route.params.postId);
      // console.log(apiPost);
      this.post = apiPost;
      // console.log(this.post);
      this.getApiComment();
    },

    async getApiComment() {
      const apiComments = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.postId}/comments`
      )
        .then((res) => res.json())
        .catch((error) => console.log("USER POST COMMENTS API ERROR: ", error));

      // console.log(apiComments);
      this.comments = apiComments;
      // console.log(this.comments);
    },

  },

  mounted() {
    this.getApiPost();
  },
};
</script>

<style scoped>
.user-post_header {
  margin-bottom: 15px;

  font-family: "Alegreya Sans SC", sans-serif;
  font-weight: 500;
  font-size: 35px;
}
.user-post_title {
  margin-bottom: 15px;

  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 24px;
}
.user-post_post_container {
  border: 1px solid black;
  padding: 14px 35px 17px 35px;
  margin-bottom: 15px;
}
.user-post_post_font {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: rgb(150, 150, 150);
}
.user-post_button {
  width: 100%;
  font-size: 17px;
}
</style>
