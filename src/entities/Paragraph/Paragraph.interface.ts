import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IParagraphProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	mode: 'primary' | 'secondary'
	size: 'small16' | 'medium18' | 'large20' | 'extra36'
	italic?: boolean
	children: React.ReactNode
}
