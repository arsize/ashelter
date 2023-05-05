import { FunctionalComponent as FC, StyleValue, VNode } from "vue"
import { NButton, NPopover } from "naive-ui"
import { Icon } from "@vicons/utils"
import styled from "vue3-styled-components"
import { Type } from "naive-ui/es/button/src/interface"

interface ToolsProps {
  title: string
  icon: VNode
  style?: StyleValue
  type?: Type
  disabled?: boolean
  tootip?: string
}

export const ToolsBtn: FC<ToolsProps> = ({
  icon,
  title,
  style,
  type,
  disabled,
  tootip = "敬请期待",
}) => (
  <Margin style={style}>
    <NPopover trigger="hover" disabled={!disabled}>
      {{
        default: () => tootip,
        trigger: () => (
          <NButton tag="div" disabled={disabled} type={type}>
            <Icon size={16}>{icon}</Icon>
            <div style={{ marginLeft: "5px" }}>{title}</div>
          </NButton>
        ),
      }}
    </NPopover>
  </Margin>
)

const Margin = styled.div`
  margin-right: 15px;
`
