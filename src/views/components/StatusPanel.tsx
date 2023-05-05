import type { FunctionalComponent as FC } from "vue"
import { NProgress, NSpace, NTooltip } from "naive-ui"
import styled from "vue3-styled-components"

export const StatusPanel: FC = () => (
  <Panel>
    <NSpace>
      <NTooltip trigger="hover">
        {{
          default: () => 90,
          trigger: () => (
            <NProgress
              class="progress"
              style={{ width: "60px" }}
              type="circle"
              percentage={90}
              offset-degree="180"
              color={"#ec1010"}
            >
              <span style={{ textAlign: "center" }}>生命</span>
            </NProgress>
          ),
        }}
      </NTooltip>

      <NTooltip trigger="hover">
        {{
          default: () => 90,
          trigger: () => (
            <NProgress
              class="progress"
              color={"#f98c1f"}
              style={{ width: "60px" }}
              type="circle"
              percentage={90}
              offset-degree="180"
            >
              <span style={{ textAlign: "center" }}>饱腹</span>
            </NProgress>
          ),
        }}
      </NTooltip>
      <NTooltip trigger="hover">
        {{
          default: () => 90,
          trigger: () => (
            <NProgress
              color={"#3e8bef"}
              class="progress"
              style={{ width: "60px" }}
              type="circle"
              percentage={90}
              offset-degree="180"
            >
              <span style={{ textAlign: "center" }}>口渴</span>
            </NProgress>
          ),
        }}
      </NTooltip>
      <NTooltip trigger="hover">
        {{
          default: () => 90,
          trigger: () => (
            <NProgress
              color={"#f3c11e"}
              class="progress"
              style={{ width: "60px" }}
              type="circle"
              percentage={90}
              offset-degree="180"
            >
              <span style={{ textAlign: "center" }}>耐力</span>
            </NProgress>
          ),
        }}
      </NTooltip>
      <NTooltip trigger="hover">
        {{
          default: () => 90,
          trigger: () => (
            <NProgress
              color={"#54b73e"}
              class="progress"
              style={{ width: "60px" }}
              type="circle"
              percentage={90}
              offset-degree="180"
            >
              <span style={{ textAlign: "center" }}>SAN</span>
            </NProgress>
          ),
        }}
      </NTooltip>
      <NTooltip trigger="hover">
        {{
          default: () => 90,
          trigger: () => (
            <NProgress
              color={"#08c1d9"}
              class="progress"
              style={{ width: "60px" }}
              type="circle"
              percentage={90}
              offset-degree="180"
            >
              <span style={{ textAlign: "center" }}>体温</span>
            </NProgress>
          ),
        }}
      </NTooltip>
    </NSpace>
  </Panel>
)

const Panel = styled.div`
  width: 100%;
  .progress {
    font-size: 11px;
    margin-right: 19px;
  }
`
