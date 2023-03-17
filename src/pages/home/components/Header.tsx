import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export const Header = () => {
  const { t,i18n } = useTranslation();

  return (
	<header className='relative'>
        <motion.div
          initial={{opacity:0,y:-50}}
          whileInView={{opacity:1,bottom:0}}
          animate={{y:0}}
          transition={{delay:0.5,duration:0.5}}
          className='mt-[200px]'
          viewport={{ once: true }}>
          <h1 className='mx-3 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>{t('header-greet')} <strong>Guillermo Jiménez</strong></h1>
        </motion.div>
      
      
        <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,bottom:0}}
          animate={{y:0}}
          transition={{delay:0.5,duration:0.5}}
          viewport={{ once: true }}
          className='mt-5'>

          <h2 className='animate-text bg-gradient-to-r from-primary-500 via-purple-500 to-green-500 bg-clip-text text-transparent text-3xl font-bold text-center'>Student</h2>
        </motion.div>
        
        <div className='scale-110 w-[25px] h-[45px] relative  border-2 border-black rounded-full m-auto'>
          <div className='h-[8px] w-[3px] rounded-sm animate-bounce  bg-black mt-2 mx-auto'> </div>
        </div>


	</header>
  )
}
