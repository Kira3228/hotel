
import { SearchPanel } from '../../shared/SearchPanel/SearchPanel'


import './MainPage.scss'

export const MainPage: React.FC = () => {
	return (
		<>
			<section className='section'>
				{/* <Header color='none' className='header' /> */}
				<SearchPanel />
			</section>
		</>
	)
}
 