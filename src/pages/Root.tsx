import { Navbar } from '@/modules'
import { Outlet } from 'react-router-dom'

const Root = () => {

  return (
	<div className='min-h-screen w-full'>
		<Navbar/>
		<Outlet/>
	</div>
  )
}

export default Root