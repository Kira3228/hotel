import { Header } from '../../components/Header/Header'
import { SearchPanel } from '../../components/SearchPanel/SearchPanel'

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
 