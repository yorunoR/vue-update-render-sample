<template functional>
  <button class="btn" :style="$options.styles(props)">
    {{ props.label }}
  </button>
</template>

<script>
export default {
  props: {
    label: String,
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
