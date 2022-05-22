<template>
  <template v-if="userPosts">
    <div class="user-post-preview_block">
      <h3 class="post-title">{{ userPosts[postId].title }}</h3>
      <p class="post-body">
        {{ userPostsBodyCut[postId] }}
      </p>
    </div>
  </template>
  <div v-else class="user-post-preview_block">Загрузка...</div>
</template>

<script>
export default {
  data() {
    return {
      userPosts: false,
      userPostsBodyCut: false,
    };
  },
  props: {
    postId: {
      type: Number,
    },
  },

  methods: {
    async getApiUserPosts() {
      const apiUserPost = await fetch(
        `https://jsonplaceholder.typicode.com/users/${this.$route.params.userId}/posts/`
      )
        .then((res) => res.json())
        .catch((error) => console.log("USER POST API ERROR: ", error));

      // console.log(apiUserPost);

      this.userPosts = apiUserPost;

      this.cutOfUserPostsBody();
    },
    cutOfUserPostsBody() {
      this.userPostsBodyCut = this.userPosts.map((item) => {
        const bodyIndex = item.body.indexOf(`\n`);
        const newBody = `${item.body.slice(0, bodyIndex)}...`;
        // console.log(newBody)

        return newBody;
      });

      // console.log(this.userPostsBodyCut);
    },
  },

  mounted() {
    this.getApiUserPosts();
  },
};
</script>

<style scoped>
.user-post-preview_block {
  border: 1px solid black;
  padding: 14px 35px 17px 35px;
}

.post-title {
  margin-bottom: 4px;

  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 17px;
}
.post-body {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: rgb(150, 150, 150);
}
</style>
