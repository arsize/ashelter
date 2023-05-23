import { FloatButton } from 'antd'
import { FC, forwardRef, useState } from 'react'

import { LoadingOutlined } from '@ant-design/icons'

import {
  FloatButtonShape,
  FloatButtonType,
} from 'antd/es/float-button/interface'

export interface LFloatButton {
  tooltip?: string
  shape?: FloatButtonShape
  type?: FloatButtonType
  style?: React.CSSProperties
  icon?: React.ReactNode
  loading?: boolean
  onClick: () => void
}

// 扩展floatButtong-loading功能
const LoadingFloatBtn = forwardRef<
  HTMLAnchorElement | HTMLButtonElement | null,
  LFloatButton
>((props, ref) => {
  const [loadings, setLoadings] = useState(false)
  const clickEven = () => {
    setLoadings(true)
    setTimeout(() => {
      setLoadings(false)
    }, 1000)
    props.onClick()
  }

  return (
    <div>
      <FloatButton
        ref={ref}
        onClick={!loadings ? clickEven : props.onClick}
        tooltip={props.tooltip}
        shape={props.shape}
        type={props.type}
        style={props.style}
        icon={props.loading && loadings ? <LoadingOutlined /> : props.icon}
      />
    </div>
  )
})

LoadingFloatBtn.defaultProps = {
  shape: 'square',
  type: 'default',
  loading: false,
}

export default LoadingFloatBtn
