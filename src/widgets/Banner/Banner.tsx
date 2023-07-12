import { Link, Paragraph } from '../../entities'
import { Login, Order } from '../../features'
import logo from '../../assets/logo.png'
import styles from './Banner.module.css'

function Banner() {
	return (
		<div className="container">
			<div className={styles.banner}>
				<div className={styles.banner_inner}>
					<Link size="medium" mode="inline" href="#">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<Link size="medium" mode="inline" href="tel:88002002534">
					<Paragraph mode="secondary" size="large20">
						8 800 200 25 34
					</Paragraph>
				</Link>
				<div className={styles.group}>
					<Order />
					<Login />
				</div>
			</div>
		</div>
	)
}

export { Banner }
