import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
	<div className='h-screen flex items-center justify-center'>
		<div className='mb-[10%]'>

			<h1 className='text-5xl font-semibold '>Oops! </h1>
			<h2 className='text-3xl font-medium text-gray-700'>Page not found</h2>
			<Link to={'/'}>
				<a className='text-blue-500'>Go back</a>
			</Link>
		</div>
	</div>
  )
}

export default ErrorPage