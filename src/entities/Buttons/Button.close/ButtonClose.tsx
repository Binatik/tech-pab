import classNames from 'classnames'
import { ReactComponent as Close } from '../../../assets/close-sv.svg'
import { IButtonCloseProps } from './ButtonClose.interface'
import styles from './ButtonClose.module.css'

function ButtonClose({ size, mode, className, ...props }: IButtonCloseProps) {
	return (
		<Close
			{...props}
			className={classNames(styles.close, className, {
				[styles.close_primary]: mode === 'primary',
				[styles.close_size_medium]: size === 'medium',
			})}
		/>
	)
}

export { ButtonClose }
