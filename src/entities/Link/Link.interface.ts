import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

export interface IButtonProps
	extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	mode: 'primary'
	size: 'medium'
	href: string
	children: React.ReactNode
}
