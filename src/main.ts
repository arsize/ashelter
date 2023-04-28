import { createApp } from "vue"
import App from "./App"
import router from "./router"
import "@/style/main.less"

const app = createApp(App)

app.use(router).mount("#app")
