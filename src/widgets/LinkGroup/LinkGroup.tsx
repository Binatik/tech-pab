import { Login, Order } from '../../features'
import styles from './LinkGroup.module.css'

function LinkGroup() {
	return (
		<div className={styles.group}>
			<Order />
			<Login />
		</div>
	)
}

export { LinkGroup }
