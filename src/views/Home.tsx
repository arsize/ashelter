import { defineComponent } from "vue"
import "@/style/home.less"
import { onMounted } from "vue"
import StatusLine from "./components/StatusLine"

export default defineComponent({
  name: "Home",
  setup() {
    onMounted(() => {
      console.log("init")
    })
    return () => (
      <div>
        <div>home</div>
        <StatusLine />
        <div>home</div>
      </div>
    )
  },
})
