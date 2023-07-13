import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

export interface ILinkProps
	extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	mode: 'primary' | 'secondary' | 'inline'
	size: 'medium' | 'large'
	href: string
	children: React.ReactNode
}
