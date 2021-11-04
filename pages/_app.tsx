import {ThemeProvider} from "next-themes";
import "../styles/globals.scss"


function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App;