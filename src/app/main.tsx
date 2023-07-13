import ReactDOM from 'react-dom/client'
import { Link, Logo, Paragraph } from '../entities'
import { Tech } from '../page/Tech'
import { LinkGroup } from '../widgets'
import '../app/styles/reset.css'
import '../app/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<div className="wrapper">
		<header className="header test">
			<div className="container list">
				<Logo size="medium" wide={true} />
				<Link size="medium" mode="inline" href="tel:88002002534">
					<Paragraph mode="secondary" size="large20">
						8 800 200 25 34
					</Paragraph>
				</Link>
				<LinkGroup />
			</div>
		</header>
		<main className="page">
			<Tech />
		</main>
		<footer className="footer">footer</footer>
	</div>
)
