<template>
  <div>
    <div>
      <p>Functional Component Btns</p>
      <p><router-link to="/">目次にもどる</router-link></p>
      <p><button @click="toggle">表示切り替え</button></p>
    </div>
    <div v-if="isShow">
      <template v-for="i in list">
        <functional-component-btn :key="i" :label="i.toString()" color="white" />
      </template>
    </div>
  </div>
</template>

<script>
import FunctionalComponentBtn from "@/components/FunctionalComponentBtn";

export default {
  components: {
    FunctionalComponentBtn
  },
  data() {
    return {
      isShow: false
    };
  },
  computed: {
    list() {
      return [...Array(1000).keys()];
    }
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    }
  }
};
</script>
