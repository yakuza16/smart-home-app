import { createStore } from "vuex";

export default createStore({
  state: {
    smartDevices: [
      {
        type: "bulb",
        name: "żarówka",
        connectionState: "połączony",
        isTurnedOn: true,
        brightness: 50,
        color: "",
      },
      {
        type: "outlet",
        name: "gniazdko",
        connectionState: "połączony",
        isTurnedOn: true,
        powerConsumption: 20,
      },
      {
        type: "temperatureSensor",
        name: "czujnik temperatury",
        connectionState: "połączony",
        temperature: 21,
      },
    ],
    isDeviceStateInfoOpen: true,
    activeDevice: "bulb",
  },
  mutations: {
    // updateDeviceStateInfoPositionX(state, newValX) {
    //   state.deviceStateInfoPosition.x = newValX;
    // },
    // updateDeviceStateInfoPositionY(state, newValY) {
    //   state.deviceStateInfoPosition.y = newValY;
    // },
    closeDeviceStateInfo(state, newState) {
      state.isDeviceStateInfoOpen = newState;
    },
    setActiveDevice(oldDevice, newDeviceActive) {
      oldDevice.activeDevice = newDeviceActive;
    },
  },
});
