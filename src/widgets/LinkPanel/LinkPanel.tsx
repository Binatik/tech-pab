import { Login, Order } from '../../features'
import styles from './LinkPanel.module.css'

function LinkPanel() {
	return (
		<div className={styles.panel}>
			<Order />
			<Login />
		</div>
	)
}

export { LinkPanel }
