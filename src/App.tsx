import { RouterProvider, createBrowserRouter} from "react-router-dom"
import { router } from "./routes/router"
import { I18nextProvider } from "react-i18next"
import i18n from "./i18n"

function App() {
  return (
    <>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router}/>
    </I18nextProvider>
    </>
  )
}

export default App
