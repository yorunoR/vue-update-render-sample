<template>
  <div>
    <div>
      <p>Functional Component Btn</p>
      <router-link to="/">Homeにもどる</router-link> |
      <button @click="toggle">表示切り替え</button>
    </div>
    <div v-if="isShow">
      <template v-for="i in lists">
        <functional-component-btn :key="i" color="white" />
      </template>
    </div>
  </div>
</template>

<script>
import FunctionalComponentBtn from '@/components/FunctionalComponentBtn'

export default {
  name: "Home",
  components: {
    FunctionalComponentBtn
  },
  data () {
    return {
      isShow: false
    }
  },
  computed: {
    lists () {
      return [...Array(10000).keys()]
    }
  },
  methods: {
    toggle () {
      this.isShow = !this.isShow
    }
  }
};
</script>
