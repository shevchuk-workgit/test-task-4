<template>
  <div class="header_container" @click="$router.push({ name: 'userList' })">
    <h1 class="user-header_header">Мир пользователя</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header_container {
  display: flex;
  background-color: black;
  margin-bottom: 36px;
  padding: 15px 30px;
  align-content: center;

  cursor: pointer;
}
.user-header_header {
  font-family: "Alegreya Sans SC", sans-serif;
  font-weight: 500;
  font-size: 36px;
  color: white;
}
</style>
