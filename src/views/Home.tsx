import { defineComponent } from "vue"
import "@/style/home.less"
import { onMounted } from "vue"
import StatusLine from "./components/StatusLine"
import { NSpace, NCard } from "naive-ui"

export default defineComponent({
  name: "Home",
  setup() {
    onMounted(() => {
      console.log("init")
    })
    return () => (
      <NSpace vertical>
        <NCard size="medium" hoverable>
          <StatusLine />
        </NCard>
      </NSpace>
    )
  },
})
