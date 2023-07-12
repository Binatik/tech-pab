import ReactDOM from 'react-dom/client'
import { Tech } from '../page/Tech'
import { Banner } from '../widgets'
import '../app/styles/reset.css'
import '../app/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<div className="wrapper">
		<header className="header test">
			<Banner />
		</header>
		<main className="page">
			<Tech />
		</main>
		<footer className="footer">footer</footer>
	</div>
)
