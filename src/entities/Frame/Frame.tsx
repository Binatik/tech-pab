import classNames from 'classnames'
import { IFrameProps } from './Frame.interface'
import styles from './Frame.module.css'

function Frame({ children, size, className }: IFrameProps) {
	return (
		<div
			className={classNames(styles.frame, className, {
				[styles.frame_size_medium]: size === 'medium',
			})}>
			<div className={styles.frame_inner}>{children}</div>
		</div>
	)
}

export { Frame }
