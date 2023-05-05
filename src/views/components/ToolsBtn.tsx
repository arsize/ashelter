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
  loading?: boolean
  onTrigger?: () => void
}

export const ToolsBtn: FC<ToolsProps> = (
  { icon, title, style, type, disabled, loading, tootip = "敬请期待" },
  { emit }
) => (
  <Margin style={style}>
    <NPopover trigger="hover" disabled={!disabled}>
      {{
        default: () => tootip,
        trigger: () => (
          <NButton
            onClick={() => emit("trigger", true)}
            loading={loading}
            tag="div"
            disabled={disabled}
            type={type}
          >
            <Icon size={16}>{icon}</Icon>
            <div style={{ marginLeft: "5px" }}>{title}</div>
          </NButton>
        ),
      }}
    </NPopover>
  </Margin>
)

ToolsBtn.emits = ["trigger"]

const Margin = styled.div`
  margin-right: 15px;
`
