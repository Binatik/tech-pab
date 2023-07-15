import classNames from 'classnames'
import { IHeadingProps } from './Heading.interface'
import styles from './Heading.module.css'

function Heading({ heading, mode, size, className, children }: IHeadingProps) {
	const styleList = {
		[styles.heading_primary]: mode === 'primary',
		[styles.heading_secondary]: mode === 'secondary',
		[styles.heading_size_small]: size === 'small14',
		[styles.heading_size_medium]: size === 'medium18',
		[styles.heading_size_extra]: size === 'extra41',
		[styles.heading_size_super]: size === 'super56',
	}
	switch (heading) {
		case 'h1':
			return <h1 className={classNames(styles.heading, className, styleList)}>{children}</h1>

		case 'h2':
			return <h2 className={classNames(styles.heading, className, styleList)}>{children}</h2>

		default:
			break
	}
}

export { Heading }
