import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Content = () => {
  return (
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  )
}

const MainWrapper = styled.div``

export default Content
