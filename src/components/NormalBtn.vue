<template>
  <button :style="styles">
    ボタン
  </button>
</template>

<script>
export default {
  props: {
    color: String
  },
  computed: {
    styles () {
      return {
        "background-color": this.color
      }
    }
  }
}
</script>
