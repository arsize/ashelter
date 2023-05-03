import { defineComponent } from "vue"
import "@/style/home.less"
import { onMounted } from "vue"
import styled from "@magister_zito/vue3-styled-components"

export default defineComponent({
  name: "Home",
  setup() {
    onMounted(() => {
      console.log("init")
    })
    return () => (
      <Wrapper>
        <div></div>
      </Wrapper>
    )
  },
})

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
