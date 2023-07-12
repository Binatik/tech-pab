import { Link } from '../../entities'

function Order() {
	function orderMember(): void {
		console.log('Вы заказали тестовый звонок')
	}
	return (
		<Link onClick={orderMember} href="#" mode="primary" size="medium">
			<p>Заказать звонок</p>
		</Link>
	)
}

export { Order }
