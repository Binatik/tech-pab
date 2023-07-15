import ReactDOM from 'react-dom/client'
import { Tech } from '../page/Tech'
import { WithLayouts } from './layouts/WithLayouts'
import '../app/styles/reset.css'
import '../app/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<WithLayouts>
		<Tech />
	</WithLayouts>
)
