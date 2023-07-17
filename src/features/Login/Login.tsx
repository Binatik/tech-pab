import { Heading, Link, Paragraph } from '../../entities'
import { ReactComponent as UserSvg } from '../../assets/user.svg'
import styles from './Login.module.css'
import { useContext } from 'react'
import { ModalContext } from '../../app/contexts/Modal/ModalContextProvider'

function useContextType() {
	const contextType = useContext(ModalContext)

	if (!contextType) {
		throw new Error('Провайдер не был добавлен в дерево React')
	}

	return contextType
}

function Login() {
	const { openModal } = useContextType()

	function activeModal(): void {
		openModal(
			<Heading heading="h2" mode="primary" size="extra41">
				Личный кабинет
			</Heading>
		)
	}

	// function loginAccaunt(): void {
	// 	console.log('Вы тестово авторизавались')
	// }
	return (
		<Link onClick={activeModal} className={styles.login} href="#" mode="primary" size="medium">
			<Paragraph mode="secondary" size="small16">
				Личный кабинет
			</Paragraph>
			<UserSvg />
		</Link>
	)
}

export { Login }
