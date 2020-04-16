<template>
  <div>
    <div>
      <p>Reactive Same Component</p>
      <router-link to="/">Homeにもどる</router-link>
    </div>
    <template v-for="(i, index) in list">
      <normal-btn
        :key="index"
        :name="i.toString()"
        @click="change(index)"
        color="white"
      />
    </template>
  </div>
</template>

<script>
import NormalBtn from "@/components/NormalBtn";

export default {
  components: {
    NormalBtn
  },
  data() {
    return {
      list: [...Array(1000).keys()]
    };
  },
  methods: {
    change(index) {
      this.$set(this.list, index, this.list[index] + 1);
    }
  }
};
</script>
