import { defineComponent } from "vue"
import { RouterView } from "vue-router"
import { ThemeProvider } from "vue3-styled-components"

export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <ThemeProvider theme={{ primary: "palevioletred" }}>
        <RouterView />
      </ThemeProvider>
    )
  },
})
