import { defineComponent, ref } from "vue"
import "@/style/home.less"
import { onMounted, h } from "vue"
import ToolsLine from "./components/ToolsLine"
import { Alert16Regular } from "@vicons/fluent"
import { NSpace, NCard, useMessage, NIcon } from "naive-ui"
import { Footer } from "./components/Footer"
import { StatusPanel } from "./components/StatusPanel"
import Environment from "./components/Environment"
import Materials from "./components/Materials"
import styled from "vue3-styled-components"
import { ToolsBtn as Btn } from "./components/ToolsBtn"
import { CarpenterTwotone } from "@vicons/material"
import { config } from "@/global"

export default defineComponent({
  name: "Home",
  setup() {
    const message = useMessage()
    let loading = ref(false)
    onMounted(() => {
      message.warning(config.firstInfo, {
        icon: () => h(NIcon, null, { default: () => h(Alert16Regular) }),
      })
    })
    const handleClick = () => {
      loading.value = true
      setTimeout(() => {
        loading.value = false
      }, 500)
    }

    return () => (
      <Wrapper>
        <NSpace vertical>
          <NCard size="medium" hoverable>
            <ToolsLine />
          </NCard>
          <Layout>
            <NCard
              contentStyle={{ padding: "0 20px" }}
              title="环境"
              hoverable
              size="large"
              class="status"
            >
              <Environment />
            </NCard>
            <div style={{ width: "1px", height: "10px" }}></div>
            <NCard
              title="物资"
              hoverable
              size="large"
              contentStyle={{ padding: 0 }}
              class="status"
              v-slots={{
                "header-extra": () => {
                  return (
                    <Btn
                      loading={loading.value}
                      onTrigger={handleClick}
                      title="伐木"
                      icon={<CarpenterTwotone />}
                    />
                  )
                },
              }}
            >
              <Materials />
            </NCard>
            <div style={{ width: "1px", height: "10px" }}></div>
            <NCard title="状态" hoverable size="large" class="status">
              <StatusPanel />
            </NCard>
          </Layout>

          <Footer />
        </NSpace>
      </Wrapper>
    )
  },
})

const Wrapper = styled.div`
  padding-bottom: 50px;
`
const Layout = styled.div`
  .status {
    width: 600px;
  }
  @media (max-width: 425px) {
    .status {
      width: 90%;
      margin: 0 auto;
    }
  }
`
