import ReactDOM from 'react-dom/client'
import { Tech } from '../page/Tech'
import { WithLayouts } from './layouts/WithLayouts'
import '../app/styles/reset.css'
import '../app/styles/global.css'
import { ModalContextProvider } from './contexts/Modal/ModalContextProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ModalContextProvider>
		<WithLayouts>
			<Tech />
		</WithLayouts>
	</ModalContextProvider>
)
