<template functional>
  <button :style="$options.styles(props)">
    ボタン
  </button>
</template>

<script>
export default {
  props: {
    color: String
  },
  styles(props) {
    return {
      "background-color": props.color
    }
  }
}
</script>
