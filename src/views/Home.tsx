import { defineComponent } from "vue"
import "@/style/home.less"
import { onMounted, h } from "vue"
import ToolsLine from "./components/ToolsLine"
import { Alert16Regular } from "@vicons/fluent"
import { NSpace, NCard, useMessage, NIcon } from "naive-ui"
import { Footer } from "./components/Footer"

export default defineComponent({
  name: "Home",
  setup() {
    const message = useMessage()
    onMounted(() => {
      message.warning("欢迎来到末日庇护所", {
        icon: () => h(NIcon, null, { default: () => h(Alert16Regular) }),
      })
    })

    return () => (
      <NSpace vertical>
        <NCard size="medium" hoverable>
          <ToolsLine />
        </NCard>
        <Footer />
      </NSpace>
    )
  },
})
