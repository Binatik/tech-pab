import classNames from 'classnames'
import { ILinkProps } from './Link.interface'
import styles from './Link.module.css'

function Link({ children, mode, size, href, className, ...props }: ILinkProps) {
	return (
		<a
			href={href}
			className={classNames(styles.link, className, {
				[styles.link_primary]: mode === 'primary',
				[styles.link_secondary]: mode === 'secondary',
				[styles.link_size_medium]: size === 'medium',
				[styles.link_size_large]: size === 'large',
			})}
			{...props}>
			{children}
		</a>
	)
}

export { Link }
