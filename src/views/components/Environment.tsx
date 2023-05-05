import { defineComponent, reactive, watchEffect } from "vue"
import styled from "vue3-styled-components"
import { Icon } from "@vicons/utils"
import { AccessTimeRound } from "@vicons/material"
import { NTime } from "naive-ui"

// 定时器
let timer: any

// 环境指数
export default defineComponent({
  name: "Environment",
  setup() {
    const state = reactive({
      time: new Date(),
    })
    if (timer) {
      clearInterval(timer)
    }
    timer = () => {
      state.time = new Date()
    }
    setInterval(timer, 1000)

    return () => (
      <Wrapper>
        <div class="left">
          <div class="item">多云</div>
          <div class="item">30℃</div>
          <div class="item">湿度：59%</div>
          <div class="item">风速：大风</div>
        </div>
        <div class="right">
          <Icon>
            <AccessTimeRound />
          </Icon>
          <NTime style={{ marginLeft: "5px" }} time={state.time} />
        </div>
      </Wrapper>
    )
  },
})

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 13px;
  padding-left: 10px;
  .left,
  .right {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
  .item {
    margin-right: 15px;
  }
`
