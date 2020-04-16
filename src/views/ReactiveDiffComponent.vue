<template>
  <div>
    <div>
      <p>Reactive Divv Component</p>
      <router-link to="/">Homeにもどる</router-link>
      <button @click="changeObject">参照変更</button>
    </div>
    <object-prop-btn :object="aObject" color="white" />
    <object-prop-btn :object="bObject" color="white" />
    <object-prop-btn :object="cObject" color="white" />
  </div>
</template>

<script>
import ObjectPropBtn from "@/components/ObjectPropBtn";

export default {
  components: {
    ObjectPropBtn
  },
  data() {
    return {
      obj: { a: { deep1: { deep2: 1 } }, b: 2, c: 3 }
    };
  },
  computed: {
    aObject() {
      console.log("a computed");
      return {
        name: this.obj.a.deep1.deep2.toString()
      };
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
    changeObject() {
      this.obj = Object.assign({}, this.obj);
    }
  }
};
</script>
