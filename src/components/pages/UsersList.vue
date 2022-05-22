<template>
  <h2 class="users-list_header">Список пользователей</h2>
  <div class="users-list_container">
    <div v-for="user in apiUsersList" :key="user.id" class="users-list_block">
      <h3 class="users-list_user-name">{{ user.name }}</h3>
      <div class="users-list_user-city">{{ user.address.city }}</div>
      <ui-button
        @click="$router.push({ name: 'user', params: { userId: user.id } })"
        >Смотреть профиль</ui-button
      >
    </div>
  </div>
</template>

<script>
import UiButton from "../Ui/UiButton.vue";
export default {
  components: { UiButton },

  data() {
    return {
      apiUsersList: false,
    };
  },

  methods: {
    async getApiUsersList() {
      this.apiUsersList = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      )
        .then((res) => res.json())
        .catch((error) => console.log("USERS LIST API ERROR: ", error));
    },
  },

  mounted() {
    this.getApiUsersList();
  },
};
</script>

<style scoped>
.users-list_container {
  display: flex;
  flex-wrap: wrap;
}
.users-list_block {
  border: 1px solid black;
  padding: 15px 17px;
  min-width: 240px;

  margin: 13px;
}

.users-list_header {
  margin-bottom: 15px;

  font-family: "Alegreya Sans SC", sans-serif;
  font-weight: 500;
  font-size: 35px;
}
.users-list_user-name {
  margin-bottom: 4px;

  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  font-size: 17px;
}
.users-list_user-city {
  margin-bottom: 35px;

  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: rgb(150, 150, 150);
}
</style>
