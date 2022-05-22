<template>
  <div class="user-features_container">
    <div class="user-features_wrapper">
      <div class="user-features_block user-features-font">
        Имя: {{ user.name }}
      </div>
      <div class="user-features_block user-features-font">
        Почта: {{ user.email }}
      </div>
      <div class="user-features_block user-features-font">
        Телефон: {{ user.phone }}
      </div>
    </div>
    <div class="user-features_wrapper">
      <div class="user-features_block user-features-font">
        Сайт:
        {{ user.website }}
      </div>
      <div class="user-features_block user-features-font">
        Имя компании:
        {{ user.company.name }}
      </div>
      <div class="user-features_block user-features-font">
        Специализация компании:
        {{ user.company.bs }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.user-features_container{
  margin-bottom: 40px;
}
.user-features_wrapper {
  display: flex;
  margin-bottom: 10px;
}
.user-features_wrapper:first-child {
  border-bottom: none;
}
.user-features_block {
  flex-grow: 1;
  border: 1px solid black;
  border-right: none;
  padding: 14px 20px 10px 20px;
}
.user-features_wrapper .user-features_block:last-child {
  border-right: 1px solid black;
}
.user-features-font {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
}
</style>
