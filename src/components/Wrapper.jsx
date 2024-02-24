const Wrapper = ({ children }) => {
	return (
		<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-5 bg-black/45 rounded-xl py-60 px-20'>
			{children}
		</div>
	)
}

export default Wrapper
