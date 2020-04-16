<template functional>
  <button class="btn" :style="$options.styles(props)">
    {{ props.name }}
  </button>
</template>

<script>
export default {
  props: {
    name: String,
    color: String
  },
  styles(props) {
    return {
      "background-color": props.color
    };
  }
};
</script>

<style scoped>
.btn {
  width: 50px;
}
</style>
