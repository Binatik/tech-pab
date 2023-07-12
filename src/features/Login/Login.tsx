import { Link, Paragraph } from '../../entities'
import { ReactComponent as UserSvg } from '../../assets/user.svg'
import styles from './Login.module.css'

function Login() {
	function loginAccaunt(): void {
		console.log('Вы тестово авторизавались')
	}
	return (
		<Link onClick={loginAccaunt} className={styles.login} href="#" mode="primary" size="medium">
			<Paragraph mode="secondary" size="small16">
				Личный кабинет
			</Paragraph>
			<UserSvg />
		</Link>
	)
}

export { Login }
