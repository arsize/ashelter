import Content from './Content'
import { theme, Tour, TourProps, FloatButton, message } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import LoadingFloatBtn from '@/views/components/LoadingFloatBtn'
import { CarpenterTwotone } from '@ricons/material'
import useWareStore from '@/store/ware'
import useMyStore from '@/store/userInfo'
import styled from 'styled-components'
import useRoleStasStore from '@/store/roleHealth'

const { useToken } = theme

const LayoutWarp: React.FC = () => {
  const ware = useWareStore()
  const user = useMyStore()
  const { token } = useToken()
  const [open, setOpen] = useState<boolean>(false)
  const refTour = useRef(null)
  const health = useRoleStasStore()

  const steps: TourProps['steps'] = [
    {
      title: '',
      description: '一切从这里开始，请点击伐木.',
      target: () => refTour.current,
    },
  ]
  useEffect(() => {
    if (user.isFirstOpen) {
      setOpen(true)
    }
  }, [user.isFirstOpen])

  return (
    <Wrapper
      style={{
        backgroundColor: token.colorBgLayout,
        color: token.colorText,
      }}
    >
      <Header />
      <Content />

      <FloatButton.BackTop
        visibilityHeight={1}
        style={{ right: '30px', bottom: '110px' }}
      />
      <LoadingFloatBtn
        ref={refTour}
        onClick={() => {
          ware.addWood(1)
          if (health.endurance > 0) {
            health.change({
              endurance: health.endurance - 10,
            })
          } else {
            message.warning('耐力值不够，请休息一下')
          }
        }}
        icon={<CarpenterTwotone />}
        loading
        style={{ right: '30px', bottom: '50px' }}
      />
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  overflow-y: scroll;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
`

export default LayoutWarp
