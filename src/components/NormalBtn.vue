<template>
  <button class="btn" @click="click" :style="styles">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: String,
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
