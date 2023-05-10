import { FC, ReactNode, useState } from 'react'

import { Icon } from '@ricons/utils'
import { Button } from 'antd'
import { ButtonType } from 'antd/es/button'
import { Tooltip } from 'antd'
import styled from 'styled-components'

interface BtnProps {
  width?: string
  height?: string
  title: string
  icon?: ReactNode
  type?: ButtonType
  disabled?: boolean
  tooltip?: string
}

const ToolsBtn: FC<BtnProps> = (props) => {
  const [mouseIn, changeHover] = useState(false)
  return (
    <Wrapper
      width={props.width}
      height={props.height}
      onMouseEnter={() => changeHover(true)}
      onMouseLeave={() => changeHover(false)}
    >
      <Tooltip
        className="tooltip"
        title={props.tooltip}
        open={props.disabled && mouseIn}
      >
        <Button
          className="btn"
          style={{ width: '100%', height: '100%' }}
          type={props.type}
          disabled={props.disabled}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {props.icon && <Icon size={18}>{props.icon}</Icon>}
            <div style={{ marginLeft: '5px' }}>{props.title}</div>
          </div>
        </Button>
      </Tooltip>
    </Wrapper>
  )
}

ToolsBtn.defaultProps = {
  width: '83px',
  height: '32px',
  type: 'default',
  tooltip: '敬请期待',
  disabled: false,
}

const Wrapper = styled.div.attrs((props: BtnProps) => props)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  .tooltip {
    width: 100%;
    height: 100%;
  }
`

export default ToolsBtn
