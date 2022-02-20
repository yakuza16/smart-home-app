<script>
import SmartDevicesList from "./components/SmartDevicesList.vue";
export default {
  components: {
    SmartDevicesList,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>

<template>
  <h1>Smart devices list</h1>
  <SmartDevicesList />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(240, 235, 235);
  margin-top: 60px;
  min-height: 50vh;
}
</style>
