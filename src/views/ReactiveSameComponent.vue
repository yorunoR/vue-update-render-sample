<template>
  <div>
    <div>
      <p>Reactive Same Component</p>
      <router-link to="/">Homeにもどる</router-link>
      <button @click="changeProperty">ディープ変更</button>
      <button @click="changeObject">参照変更</button>
    </div>
    <normal-btn :name="aObject.name" color="white" />
    <normal-btn :name="bObject.name" color="white" />
    <normal-btn :name="cObject.name" color="white" />
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
      obj: { a: { deep1: { deep2: 1 } }, b: 2, c: 3 }
    };
  },
  computed: {
    aObject() {
      console.log("a computed");
      return { name: this.obj.a.deep1.deep2.toString() };
    },
    bObject() {
      console.log("b computed");
      return { name: this.obj.b.toString() };
    },
    cObject() {
      console.log("c computed");
      return { name: this.obj.c.toString() };
    }
  },
  methods: {
    changeProperty() {
      this.obj.a.deep1.deep2 = this.obj.a.deep1.deep2 + 1;
    },
    changeObject() {
      this.obj = Object.assign({}, this.obj);
    }
  }
};
</script>
