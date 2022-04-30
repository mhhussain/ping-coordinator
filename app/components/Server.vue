<template>
  <div class="container flex-none border-2 rounded hover:border-4 hover:border-black">
    <div>Server [{{ index+1 }}]</div>
    <div>Hostname: {{ server.targetRef.name }}</div>
    <div>IP: {{ server.ip }}</div>
    <div>
      Count: <div class="ring-2 ring-blue-500">{{ data.count }}</div>
    </div>
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