import classNames from 'classnames'
import { IIconBlockProps } from './IconBlock.interface'
import styles from './IconBlock.module.css'

function IconBlock({ children, position, icon }: IIconBlockProps) {
	return (
		<div
			className={classNames(styles.blocks, {
				[styles.blocks_top]: position === 'top',
				[styles.blocks_left]: position === 'left',
			})}>
			<div className={styles.icon}>{icon}</div>
			<div>{children}</div>
		</div>
	)
}

export { IconBlock }
