<template>
  <button class="btn" @click="click" :style="styles">
    {{ object.label }}
  </button>
</template>

<script>
export default {
  props: {
    object: Object,
    color: String
  },
  computed: {
    styles() {
      return {
        "background-color": this.color
      };
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
.btn {
  width: 50px;
}
</style>
