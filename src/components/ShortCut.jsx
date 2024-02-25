import { Link } from 'react-router-dom'

const ShortCut = ({ item }) => {
	return (
		<Link to={item.link}>
			<div className='bg-white/40 w-[200px] flex items-center gap-x-2 duration-700 justify-center p-5  rounded-xl hover:bg-white hover:text-black'>
				<img src={item.img} alt='' className='w-[30px] h-[30px]' />
				<p className='text-xl font-semibold'>{item.username}</p>
			</div>
		</Link>
	)
}

export default ShortCut
