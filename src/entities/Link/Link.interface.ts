import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

export interface ILinkProps
	extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	mode: 'primary' | 'inline'
	size: 'medium'
	href: string
	children: React.ReactNode
}
