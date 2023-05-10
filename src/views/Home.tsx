import styled from 'styled-components'
import { theme, Switch } from 'antd'
import useThemeStore from '@/store'

const { useToken } = theme

function Home() {
  const { token } = useToken()
  const { light, change } = useThemeStore()
  const changeTheme = () => {
    console.log('1')
    change()
  }
  return (
    <Wrapper
      style={{
        backgroundColor: light ? '#fff' : token.colorBgLayout,
        color: token.colorText,
      }}
    >
      <Switch
        onClick={changeTheme}
        className="switch"
        checkedChildren="夜间"
        unCheckedChildren="白天"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div``

export default Home
