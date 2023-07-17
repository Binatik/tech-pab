import { useContext } from 'react'
import { Heading, Link, Paragraph } from '../../entities'
import { ModalContext } from '../../app/contexts/Modal/ModalContextProvider'
import styles from './Order.module.css'

function useContextType() {
	const contextType = useContext(ModalContext)

	if (!contextType) {
		throw new Error('Провайдер не был добавлен в дерево React')
	}

	return contextType
}

function Order() {
	const { openModal } = useContextType()

	function activeModal(): void {
		openModal(
			<Heading heading="h2" mode="primary" size="extra41">
				Заказать звонок
			</Heading>
		)
	}

	// function orderMember(): void {
	// 	console.log('Вы заказали тестовый звонок')
	// }
	return (
		<Link className={styles.order} onClick={activeModal} href="#" mode="primary" size="medium">
			<Paragraph mode="secondary" size="small16">
				Заказать звонок
			</Paragraph>
		</Link>
	)
}

export { Order }
