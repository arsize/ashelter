import { defineComponent } from "vue"
import styled from "vue3-styled-components"
import { ToolsBtn as Btn } from "./ToolsBtn"
import {
  AddBusinessTwotone,
  WarehouseOutlined,
  ScienceOutlined,
  SettingsOutlined,
  HikingOutlined,
} from "@vicons/material"
import { AddressCardRegular } from "@vicons/fa"

const _style = {
  marginTop: "10px",
  marginBottom: "10px",
}

export default defineComponent({
  name: "StatusLine",
  setup() {
    return () => (
      <Wrapper>
        <div class="left">
          <Btn style={_style} title="建造" icon={<AddBusinessTwotone />} />
          <Btn style={_style} title="仓库" icon={<WarehouseOutlined />} />
          <Btn
            disabled
            style={_style}
            title="研究"
            icon={<ScienceOutlined />}
          />
        </div>
        <div class="right">
          <Btn style={_style} title="装备" icon={<AddressCardRegular />} />
          <Btn disabled style={_style} title="探索" icon={<HikingOutlined />} />
          <Btn style={_style} title="设置" icon={<SettingsOutlined />} />
        </div>
      </Wrapper>
    )
  },
})

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  .left,
  .right {
    display: flex;
    flex-wrap: wrap;
  }
`
