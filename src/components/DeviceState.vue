<script>
import interact from "interactjs";
import BulbInfo from "./BulbInfo.vue";
import OutletInfo from "./OutletInfo.vue";
import TemperatureSensorInfo from "./TemperatureSensorInfo.vue";
export default {
  components: {
    BulbInfo,
    OutletInfo,
    TemperatureSensorInfo,
  },
  data() {
    return {};
  },
  methods: {
    closeDeviceStateInfo() {
      this.$store.commit("closeDeviceStateInfo", false);
    },
  },
  mounted() {
    const element = this.$refs.interactElement;
    // const updateStartingPosition = (newPosX, newPosY) => {
    //   this.$store.commit("updateDeviceStateInfoPositionX", newPosX);
    //   this.$store.commit("updateDeviceStateInfoPositionY", newPosY);
    // };

    const position = {
      x: 0,
      y: 0,
    };

    interact(element).draggable({
      listeners: {
        move(event) {
          position.x += event.dx;
          position.y += event.dy;
          // updateStartingPosition(position.x, position.y);

          event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
        },
      },
    });
  },
};
</script>

<template>
  <div
    class="w-1/3 h-auto border-1 border-gray-400 touch- relative p-14"
    ref="interactElement"
    v-show="this.$store.state.isDeviceStateInfoOpen"
  >
    <BulbInfo v-if="this.$store.state.activeDevice === 'bulb'" />
    <OutletInfo v-else-if="this.$store.state.activeDevice === 'outlet'" />
    <TemperatureSensorInfo
      v-else-if="this.$store.state.activeDevice === 'temperatureSensor'"
    />
    <button
      @click="closeDeviceStateInfo"
      class="bg-red-700 p-1 absolute right-0 top-0"
    >
      X
    </button>
  </div>
</template>

<style></style>
