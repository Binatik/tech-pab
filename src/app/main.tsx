import ReactDOM from 'react-dom/client'
import { Tech } from '../page/Tech'
import { Login } from '../features'
import '../app/styles/reset.css'
import '../app/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<div className="wrapper">
		<header className="header test">
			<Login />
		</header>
		<main className="page">
			<Tech />
		</main>
		<footer className="footer">footer</footer>
	</div>
)
