import classNames from 'classnames'
import { ILinkProps } from './Link.interface'
import styles from './Link.module.css'

function Link({ children, mode, size, href, className, ...props }: ILinkProps) {
	return (
		<a
			href={href}
			className={classNames(styles.link, className, {
				[styles.link_primary]: mode === 'primary',
				[styles.link_size]: size === 'medium',
			})}
			{...props}>
			{children}
		</a>
	)
}

export { Link }
