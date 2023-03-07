import Dotnez from "./components/Dotnez"
import Header from "./modules/header/Header"
import { useTranslation } from "react-i18next"
     

function App() {
  
  const {t} = useTranslation();


  return (
    <div className="">
      {/* <Dotnez   /> */}
      
      <Header/>
      <p>{t('prueba')}</p>


    </div>
  )
}

export default App
