<template>
  <div
    class="user-post-modal-add-comment_container"
    @click.self="closeModalComment"
  >
    <div class="user-post-modal-add-comment_wrapper">
      <h2>Оставьте свой комментарий:</h2>
      <form class="user-post-modal-add-comment_form">
        <label
          class="user-post-modal-add-comment_form_label user-post-modal-add-comment_font-title"
          >Имя:
          <input
            v-model="name"
            type="text"
            placeholder="Укажите Ваше имя"
            class="user-post-modal-add-comment_input"
          />
        </label>
        <label
          class="user-post-modal-add-comment_form_label user-post-modal-add-comment_font-title"
          >Email:
          <input
            type="text"
            v-model="email"
            placeholder="Укажите Вашу почту"
            class="user-post-modal-add-comment_input"
          />
        </label>
        <label
          class="user-post-modal-add-comment_form_label user-post-modal-add-comment_font-title"
        >
          Текст сообщения
          <textarea
            v-model="body"
            placeholder="Введите текст сообщения"
            class="user-post-modal-add-comment_input user-post-modal-add-comment_textarea"
          ></textarea>
        </label>
        <ui-button
          class="user-post-modal-add-comment_button"
          @click.prevent="postComment"
          >Отправить/send</ui-button
        >
      </form>
    </div>
  </div>
</template>

<script>
import UiButton from "@/components/Ui/UiButton.vue";
export default {
  components: { UiButton },

  data() {
    return {
      name: "",
      email: "",
      body: "",
    };
  },

  props: {
    modalComment: {
      type: Boolean,
    },
    comments: {
      type: Array,
    },
  },

  methods: {
    async postComment() {
      await fetch(
        "https://jsonplaceholder.typicode.com/comments",
        {
          method: "POST",
          body: JSON.stringify({
            postId: +this.$route.params.postId,
            name: this.name,
            email: this.email,
            body: this.body,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((response) => response.json())
        .then((json) => {
          console.log('Object sent to the server: ',json);
          // Изменение пропса вынужденная мера, из-за фейкового поста. Нужно для отображения новых комментариев.
          this.comments.push(json);
        }).catch((error) => console.log("COMMENT POST API ERROR: ", error));

      this.$emit("update:modalComment", false);
    },

    closeModalComment() {
      this.$emit("update:modalComment", false);
    },
  },
};
</script>

<style scoped>
.user-post-modal-add-comment_container {
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
}
.user-post-modal-add-comment_wrapper {
  background-color: #fff;
  border: 1px solid black;
  padding: 25px;
}
.user-post-modal-add-comment_form {
  display: flex;
  flex-direction: column;
}
.user-post-modal-add-comment_form_label {
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
}
.user-post-modal-add-comment_font-title {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 14px;
}
.user-post-modal-add-comment_input {
  border: 1px solid black;

  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
}
.user-post-modal-add-comment_input:focus {
  outline: 2px solid black;
}
.user-post-modal-add-comment_textarea {
  resize: vertical;
}
.user-post-modal-add-comment_button {
  font-size: 14px;
}
</style>
