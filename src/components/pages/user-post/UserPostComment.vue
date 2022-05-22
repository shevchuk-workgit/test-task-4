<template>
  <div class="user-post-comment_block">
    <p class="user-post-comment_name">{{ comment.name }}</p>
    <p class="user-post-comment_email">{{ comment.email }}</p>
    <p class="user-post-comment_body">{{ comment.body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.user-post-comment_block {
  border: 1px solid black;
  padding: 14px 35px 17px 35px;
  margin-bottom: 15px;
}
.user-post-comment_name {
  margin-bottom: 4px;

  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 17px;
}
.user-post-comment_email {
  margin-bottom: 4px;
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
}

.user-post-comment_body {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: rgb(150, 150, 150);
}
</style>
