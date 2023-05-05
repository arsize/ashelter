import { NCard } from "naive-ui"
import type { FunctionalComponent as FC } from "vue"
import styled from "vue3-styled-components"

export const Footer: FC = () => (
  <FooterWap>
    <NCard size={"small"}>
      <div class="content">
        <div>Powered by vue3. Copyright © 2021 ~ 2023</div>
      </div>
    </NCard>
  </FooterWap>
)

const FooterWap = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aaa;
    font-size: 12px;
  }
`
