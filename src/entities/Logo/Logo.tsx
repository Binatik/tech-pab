import { ILogoProps } from './Logo.interface'
import logo from '../../assets/logo.png'
import logotwo from '../../assets/logotwo.png'
import { Link } from '../Link/Link'
import styles from './Logo.module.css'
import classNames from 'classnames'

function Logo({ size, wide, id, className }: ILogoProps) {
	const styleList = {
		[styles.logo_size_small]: size === 'small',
		[styles.logo_size_medium]: size === 'medium',
	}
	return (
		<div
			className={classNames(styles.logo, className, {
				[styles.logo_wide]: wide,
			})}>
			<Link className={styles.logo_link} size="none" mode="inline" href="#">
				{id === 'primary' && (
					<img className={classNames(styleList)} src={logo} alt="logo_primary" />
				)}

				{id === 'secondary' && (
					<img className={classNames(styleList)} src={logotwo} alt="logo_primary" />
				)}
			</Link>
		</div>
	)
}

export { Logo }
