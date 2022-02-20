import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import Vuex from "vuex";
import store from "./store";

const app = createApp(App);
app.use(Vuex);
app.use(store);
app.mount("#app");
