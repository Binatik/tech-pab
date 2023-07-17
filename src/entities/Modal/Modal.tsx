import ReactDOM from 'react-dom'
import { IModalProps } from './Modal.interface'
import styles from './Modal.module.css'
import { ButtonClose } from '../Buttons/Button.close/ButtonClose'

function Modal({ children, isActive, setIsActive }: IModalProps) {
	console.log(isActive)
	function setModal() {
		return (
			isActive && (
				<div onClick={() => setIsActive(false)} className={styles.modal}>
					<ButtonClose
						onClick={() => setIsActive(false)}
						className={styles.modal_close}
						mode="primary"
						size="medium"
					/>
					<div
						onClick={(event) => event.stopPropagation()}
						className={styles.modal_inner}>
						{children}
					</div>
				</div>
			)
		)
	}

	const root = document.getElementById('root')
	if (!root) return

	const modal = setModal()
	return ReactDOM.createPortal(modal, root)
}

export { Modal }
