<template>
  <div>我是detail/{{ useRoute().params.id }}</div>
  <div>
    {{ count }}
  </div>
  <el-button @click="changeCount('add')">+</el-button>
  <el-button @click="changeCount('remove')">-</el-button>
  <nuxt-link to="/detail2">go</nuxt-link>
</template>
<script setup>
console.log(useRoute().params.id);
// console.log($route.params.id)
onMounted(() => {
  console.log("生成");
});
const count = useCounter();
const data = await useFetch("/api/todo");
const changeCount = (type) => {
  type === "add" ? count.value++ : count.value--;
};
</script>
