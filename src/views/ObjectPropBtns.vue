<template>
  <div>
    <div>
      <p>Object Prop Btns</p>
      <p><router-link to="/">Homeにもどる</router-link></p>
      <p>
        <button @click="changeProperty">ディープ変更</button> |
        <button @click="changeObject">参照変更</button>
      </p>
      <p>
        オブジェクト：{{ obj }}
      </p>
    </div>
    <object-prop-btn :object="aObject" color="white" v-for="i in list" :key="`a-${i}`" />
    <hr />
    <object-prop-btn :object="bObject" color="white" v-for="i in list" :key="`b-${i}`" />
    <hr />
    <object-prop-btn :object="cObject" color="white" v-for="i in list" :key="`c-${i}`" />
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
      list: [...Array(100).keys()],
      obj: { a: { deep1: { deep2: 1 } }, b: 2, c: 3 }
    };
  },
  computed: {
    aObject() {
      return {
        label: this.obj.a.deep1.deep2.toString()
      };
    },
    bObject() {
      return { label: this.obj.b.toString() };
    },
    cObject() {
      console.log("computed");
      return { label: this.obj.c.toString() };
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
