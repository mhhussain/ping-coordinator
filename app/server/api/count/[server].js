export default defineEventHandler((e) => {
  //return e.context.params.server;
  if (process.env.IN_KUBERNETES === '1') {
    return $fetch(`http://${e.context.params.server}:5005/ping/count`);
  } else {
    return { count: Math.ceil(Math.random() * 10000 ) };
  }
});