<template>
  <hr />
  <h3 :class="{ active: isActive }">Class样式绑定</h3>
  <h3 :class="classObject">Class样式绑定-多属性</h3>
  <h3 :class="[isActive ? 'active' : '']">Class样式绑定-三目运算符</h3>
  <button @click="activeHandler">changeColor</button>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      classObject: {
        active: false,
        text_danger: false,
      },
    };
  },
  methods: {
    activeHandler() {
      this.isActive = !this.isActive;
      this.classObject.active = !this.classObject.active;
      this.classObject.text_danger = !this.classObject.text_danger;
    },
  },
};
</script>

<style>
.active {
  font-size: 30px;
}
.text_danger {
  color: red;
}
</style>