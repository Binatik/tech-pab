import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'

export interface ILinkProps
	extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
	mode: 'primary' | 'secondary' | 'inline'
	size: 'none' | 'medium' | 'large'
	strong?: boolean
	href: string
	children: React.ReactNode
}
