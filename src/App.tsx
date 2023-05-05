import { defineComponent } from "vue"
import { RouterView } from "vue-router"
import { ThemeProvider } from "vue3-styled-components"
import { NMessageProvider } from "naive-ui"
export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <ThemeProvider theme={{ primary: "palevioletred" }}>
        <NMessageProvider>
          <RouterView />
        </NMessageProvider>
      </ThemeProvider>
    )
  },
})
