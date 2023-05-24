import styled from 'styled-components'
import Environment from './components/Environment'
import Statistics from './components/Statistics'
import WareHouse from './components/Warehouse'
import DrawerBox from './components/DrawerBox'

function Home() {
  return (
    <Wrapper>
      <Environment />
      <Statistics />
      <WareHouse />
      <DrawerBox />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default Home
