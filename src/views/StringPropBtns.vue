<template>
  <div>
    <div>
      <p>String Prop Btns</p>
      <p><router-link to="/">目次にもどる</router-link></p>
      <p>
        <button @click="changeProperty">ディープ変更</button> |
        <button @click="changeObject">参照変更</button>
      </p>
      <p>
        オブジェクト：{{ obj }}
      </p>
    </div>
    <normal-btn :label="aObject.label" color="white" v-for="i in list" :key="`a-${i}`" />
    <hr />
    <normal-btn :label="bObject.label" color="white" v-for="i in list" :key="`b-${i}`" />
    <hr />
    <normal-btn :label="cObject.label" color="white" v-for="i in list" :key="`c-${i}`" />
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
      list: [...Array(100).keys()],
      obj: { a: { deep1: { deep2: 1 } }, b: 2, c: 3 }
    };
  },
  computed: {
    aObject() {
      return { label: this.obj.a.deep1.deep2.toString() };
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
