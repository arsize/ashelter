import { FC, useState } from 'react'
import { Drawer } from 'antd'

const Architecture: FC = () => {
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }
  return (
    <Drawer
      title="建筑"
      placement={'bottom'}
      closable={false}
      onClose={onClose}
      open={open}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}

export default Architecture
