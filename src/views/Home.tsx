import styled from 'styled-components'
import Environment from './components/Environment'
import Statistics from './components/Statistics'
import WareHouse from './components/Warehouse'

function Home() {
  return (
    <Wrapper>
      <Environment />
      <Statistics />
      <WareHouse />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export default Home
