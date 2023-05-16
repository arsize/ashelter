import styled from 'styled-components'
import { theme } from 'antd'
import useThemeStore from '@/store'
import Environment from './components/Environment'
import Statistics from './components/Statistics'
import WareHouse from './components/Warehouse'

const { useToken } = theme

function Home() {
  const { token } = useToken()
  const { light, change } = useThemeStore()

  // const changeTheme = () => {
  //   change()
  // }

  return (
    <>
      <Wrapper
        style={{
          backgroundColor: light ? '#fff' : token.colorBgLayout,
          color: token.colorText,
        }}
      >
        <Environment />
        <Statistics />
        <WareHouse />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div``

export default Home
