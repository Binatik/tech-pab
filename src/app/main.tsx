import ReactDOM from 'react-dom/client'
import { Tech } from '../page/Tech'
import { Login, Order } from '../features'
import '../app/styles/reset.css'
import '../app/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<div className="wrapper">
		<header className="header test">
			<Login />
			<Order />
		</header>
		<main className="page">
			<Tech />
		</main>
		<footer className="footer">footer</footer>
	</div>
)
