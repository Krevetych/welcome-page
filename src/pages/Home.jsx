import ShortCut from '../components/ShortCut'
import Wrapper from '../components/Wrapper'
import { data } from '../data'

const Home = () => {
	return (
		<Wrapper>
			<h1 className='uppercase text-7xl font-black flex justify-center bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient'>
				Universal Hub
			</h1>
			<div className='flex gap-x-5 justify-center'>
				{data.map(item => (
					<ShortCut item={item} />
				))}
			</div>
		</Wrapper>
	)
}

export default Home
