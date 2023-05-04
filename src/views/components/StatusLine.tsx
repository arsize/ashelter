import { defineComponent } from "vue"
import styled from "vue3-styled-components"
import { NButton } from "naive-ui"

export default defineComponent({
  name: "StatusLine",
  setup() {
    return () => (
      <Wrapper>
        <NButton>建造</NButton>
      </Wrapper>
    )
  },
})

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`
