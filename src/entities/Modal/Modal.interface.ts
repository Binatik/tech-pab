import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IModalProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>
	isActive: boolean
	children: React.ReactNode
}
