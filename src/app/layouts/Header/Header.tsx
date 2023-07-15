import classNames from 'classnames'
import { Link, Logo, Paragraph } from '../../../entities'
import { LinkPanel } from '../../../widgets'
import styles from './Header.module.css'

function Header() {
	return (
		<header className="header">
			<div className={classNames('container', styles.header_top)}>
				<Logo className={styles.header_logo} id="primary" size="medium" wide={true} />
				<Link size="medium" mode="inline" href="tel:88002002534">
					<Paragraph className={styles.link_number} mode="secondary" size="large20">
						8 800 200 25 34
					</Paragraph>
				</Link>
				<LinkPanel />
			</div>
		</header>
	)
}

export { Header }
