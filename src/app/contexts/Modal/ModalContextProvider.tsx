import { createContext, useState } from 'react'
import { Modal } from '../../../entities'

export interface IModalContextProvider {
	children: React.ReactNode
}

export interface IContextValue {
	openModal: (content: React.ReactNode) => void
}

export const ModalContext = createContext<IContextValue | null>(null)

function ModalContextProvider({ children }: IModalContextProvider) {
	const [isModalActive, setIsModalActive] = useState(false)
	const [modalContent, setContent] = useState<React.ReactNode>(<></>)

	function openModal(content: React.ReactNode) {
		setContent(content)
		setIsModalActive(!isModalActive)
	}

	return (
		<ModalContext.Provider value={{ openModal }}>
			<Modal isActive={isModalActive} setIsActive={setIsModalActive}>
				{modalContent}
			</Modal>
			{children}
		</ModalContext.Provider>
	)
}

export { ModalContextProvider }
