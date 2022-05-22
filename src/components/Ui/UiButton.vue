<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {

}
</script>

<style scoped>
.button {
  background-color: black;
  padding: 10px 20px;
  border:1px solid black;

  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 11px;
  color: white;
}
.button:hover{
  background-color: rgb(70, 70, 70);
}
.button:active{
  background-color: teal;
}
</style>