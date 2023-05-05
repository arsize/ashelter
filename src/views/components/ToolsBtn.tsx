import { FunctionalComponent as FC, StyleValue, VNode, render } from "vue"
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
}

export const ToolsBtn: FC<ToolsProps> = ({
  icon,
  title,
  style,
  type,
  disabled,
}) => (
  <Margin style={style}>
    <NPopover trigger="hover">
      {{
        default: () => "或许不想知道你的花园长得咋样",
        trigger: () => (
          <NButton disabled={disabled} type={type}>
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
