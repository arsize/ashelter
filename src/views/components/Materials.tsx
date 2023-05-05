import { defineComponent } from "vue"
import styled from "vue3-styled-components"
import { NNumberAnimation, NStatistic } from "naive-ui"

// 物资清单
export default defineComponent({
  name: "Materials",
  setup() {
    return () => (
      <Wrapper>
        <Block>
          <NStatistic label="木材">
            <NNumberAnimation from={0} to={10}></NNumberAnimation>
          </NStatistic>
        </Block>
        <Block>
          <NStatistic label="石头">
            <NNumberAnimation from={0} to={0}></NNumberAnimation>
          </NStatistic>
        </Block>
        <Block>
          <NStatistic label="铁矿">
            <NNumberAnimation from={0} to={0}></NNumberAnimation>
          </NStatistic>
        </Block>
        <Block>
          <NStatistic label="铜矿">
            <NNumberAnimation from={0} to={0}></NNumberAnimation>
          </NStatistic>
        </Block>
        <Block>
          <NStatistic label="银矿">
            <NNumberAnimation from={0} to={0}></NNumberAnimation>
          </NStatistic>
        </Block>
        <Block>
          <NStatistic label="金矿">
            <NNumberAnimation from={0} to={0}></NNumberAnimation>
          </NStatistic>
        </Block>
        <Block>
          <NStatistic label="书籍">
            <NNumberAnimation from={0} to={0}></NNumberAnimation>
          </NStatistic>
        </Block>
        <Block>
          <NStatistic label="机核">
            <NNumberAnimation from={0} to={0}></NNumberAnimation>
          </NStatistic>
        </Block>
        <Block>
          <NStatistic label="石油">
            <NNumberAnimation from={0} to={0}></NNumberAnimation>
          </NStatistic>
        </Block>
        <Block>
          <NStatistic label="水晶">
            <NNumberAnimation from={0} to={0}></NNumberAnimation>
          </NStatistic>
        </Block>
      </Wrapper>
    )
  },
})

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 13px;
  padding-left: 10px;
`
const Block = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`
