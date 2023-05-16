import { FloatButton } from 'antd'
import { FC, useState } from 'react'

import { LoadingOutlined } from '@ant-design/icons'

import {
  FloatButtonShape,
  FloatButtonType,
} from 'antd/es/float-button/interface'

interface LFloatButton {
  tooltip?: string
  shape?: FloatButtonShape
  type?: FloatButtonType
  style?: React.CSSProperties
  icon?: React.ReactNode
  loading?: boolean
  onClick: () => void
}

// 扩展floatButtong-loading功能
const LoadingFloatBtn: FC<LFloatButton> = (props) => {
  const [loadings, setLoadings] = useState(false)
  const clickEven = () => {
    console.log('触发')
    setLoadings(true)
    setTimeout(() => {
      setLoadings(false)
    }, 1000)
    props.onClick()
  }
  return (
    <div>
      <FloatButton
        onClick={!loadings ? clickEven : props.onClick}
        tooltip={props.tooltip}
        shape={props.shape}
        type={props.type}
        style={props.style}
        icon={props.loading && loadings ? <LoadingOutlined /> : props.icon}
      />
    </div>
  )
}

LoadingFloatBtn.defaultProps = {
  tooltip: '默认',
  shape: 'square',
  type: 'default',
  loading: false,
}

export default LoadingFloatBtn
