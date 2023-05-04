import { defineComponent } from "vue"
import styled from "vue3-styled-components"

export default defineComponent({
  name: "StatusLine",
  setup() {
    return () => (
      <Wrapper>
        <div>体力5:</div>
      </Wrapper>
    )
  },
})

const Wrapper = styled.div`
  width: 100%;
`
