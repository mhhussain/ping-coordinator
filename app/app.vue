<template>
  <div>
    <div v-for="(a, i) in data.items[0].subsets[0].addresses"
      :index="i"
      :key="a.targetRef.name"
    >
      <Server :index="i" :server="a" />
      <br>
    </div>
  </div>
</template>

<script setup>
const { data, pending, refresh } = await useFetch('/api/endpoints');
const int = setInterval(refresh, 10000);

onBeforeUnmount(() => {
  clearInterval(int);
});
</script>
