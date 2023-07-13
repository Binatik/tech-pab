import { ILogoProps } from './Logo.interface'
import logo from '../../assets/logo.png'
import { Link } from '../Link/Link'
import styles from './Logo.module.css'
import classNames from 'classnames'

function Logo({ size, wide, className }: ILogoProps) {
	return (
		<div
			className={classNames(styles.logo, className, {
				[styles.logo_wide]: wide,
			})}>
			<Link className={styles.logo_link} size="medium" mode="inline" href="#">
				<img
					className={classNames({
						[styles.logo_size_medium]: size === 'medium',
					})}
					src={logo}
					alt="logo"
				/>
			</Link>
		</div>
	)
}

export { Logo }
