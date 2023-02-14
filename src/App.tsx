import building from '@/assets/building-website.svg'


function App() {
  
  return (
    <div className="bg-gray-600 w-screen h-screen relative flex items-center justify-center">

        <section className="p-10 rounded-lg bg-gray-800 w-fit mb-5  text-center">
          <img src={building} sizes='0' className='h-[300px]' alt='...'/>
          <h1 className='text-3xl font-bold font-sans mt-2 text-white '>Under Maintenance</h1>
          <a href='https://github.com/dongnez' className='text-gray-200'>volver</a>
        </section>
    </div>
  )
}

export default App
