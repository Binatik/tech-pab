import { Link, Paragraph } from '../../entities'
import styles from './Order.module.css'

function Order() {
	function orderMember(): void {
		console.log('Вы заказали тестовый звонок')
	}
	return (
		<Link className={styles.order} onClick={orderMember} href="#" mode="primary" size="medium">
			<Paragraph mode="secondary" size="small16">
				Заказать звонок
			</Paragraph>
		</Link>
	)
}

export { Order }
