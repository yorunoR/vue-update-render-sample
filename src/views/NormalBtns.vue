<template>
  <div>
    <div>
      <p>Normal Btn</p>
      <router-link to="/">Homeにもどる</router-link> |
      <button @click="toggle">表示切り替え</button>
    </div>
    <div v-if="isShow">
      <template v-for="i in lists">
        <normal-btn :key="i" color="white" />
      </template>
    </div>
  </div>
</template>

<script>
import NormalBtn from '@/components/NormalBtn'

export default {
  name: "Home",
  components: {
    NormalBtn
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
