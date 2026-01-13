import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/css/style.css";
import MotionPlugin from "@/plugins/motion";
import router from "@/router/index"; 
import Vue3Marquee from "vue3-marquee";
import 'virtual:svg-icons-register' 
const app = createApp(App);
app.use(MotionPlugin);
app.use(router); 
app.use(Vue3Marquee)
app.mount("#app");
