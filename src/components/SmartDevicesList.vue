<script>
import DeviceState from "../components/DeviceState.vue";

export default {
  components: {
    DeviceState,
  },
  data() {
    return {};
  },
  methods: {
    setDevice(newDeviceActive) {
      this.$store.commit("closeDeviceStateInfo", true);
      this.$store.commit("setActiveDevice", newDeviceActive);
      console.log(this.$store.state.activeDevice);
    },
  },
};
</script>

<template>
  <ul class="flex flex-col lg:flex-row">
    <li
      v-for="device in this.$store.state.smartDevices"
      :key="device.type"
      class="w-full"
      @click="() => setDevice(device.type)"
    >
      <div
        class="flex space-x-2 border-1 border-black py-2 mx-5 px-4 cursor-pointer"
      >
        <p>{{ device.type }}</p>
        <p>{{ device.name }}</p>
        <p>{{ device.connectionState }}</p>
      </div>
    </li>
  </ul>
  <DeviceState />
</template>

<style scoped></style>
