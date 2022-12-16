import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";

// TODO find a better alternative to windi that works with webstorm
// TODO check all the CSS, and change hover color from yellow lol
import "virtual:windi.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
