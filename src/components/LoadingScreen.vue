<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <div class="fixed-center loading ">
      <q-spinner-bars color="purple" />
      <q-spinner-bars color="orange" />
      <q-spinner-bars color="pink" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"]
};
</script>

<style>
.loader {
  font-size: 3rem;
}

.fadeout {
  animation: fadeout 0.5s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
