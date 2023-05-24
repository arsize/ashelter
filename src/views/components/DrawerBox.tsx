import { FC, useState } from 'react'
import { Drawer } from 'antd'

const DrawerBox: FC = () => {
  const [open, setOpen] = useState(false)
  const onClose = () => {
    setOpen(false)
  }
  return (
    <Drawer
      title="Basic Drawer"
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

export default DrawerBox
