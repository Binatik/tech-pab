import ReactDOM from 'react-dom'
import { IModalProps } from './Modal.interface'
import styles from './Modal.module.css'
import { ButtonClose } from '../Buttons/Button.close/ButtonClose'
import { CSSTransition } from 'react-transition-group'

function Modal({ children, isActive, setIsActive }: IModalProps) {
	const root = document.getElementById('root')
	if (!root) return null

	return ReactDOM.createPortal(
		<CSSTransition in={isActive} timeout={300} classNames={'modal_transition'} unmountOnExit>
			<div onClick={() => setIsActive(false)} className={styles.modal}>
				<ButtonClose
					onClick={() => setIsActive(false)}
					className={styles.modal_close}
					mode="primary"
					size="medium"
				/>
				<div onClick={(event) => event.stopPropagation()} className={styles.modal_inner}>
					{children}
				</div>
			</div>
		</CSSTransition>,
		root
	)
}

export { Modal }
