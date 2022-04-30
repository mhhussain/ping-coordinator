<template>
  <div>
    <div>Server [{{ index+1 }}]</div>
    <div>Hostname: {{ server.targetRef.name }}</div>
    <div>IP: {{ server.ip }}</div>
    <div>Count: [{{ data.count }}]</div>
  </div>
</template>

<script setup>
const props = defineProps({
  server: {
    type: [Object]
  },
  index: {
    type: Number
  }
});

const { data, pending, refresh } = await useFetch(`/api/count/${props.server.ip}`);
const int = setInterval(refresh, 1000);

onBeforeUnmount(() => {
  clearInterval(int);
});
</script>