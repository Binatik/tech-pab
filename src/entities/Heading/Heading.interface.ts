import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IHeadingProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	heading: 'h1' | 'h2'
	mode: 'primary' | 'secondary'
	size: 'small16' | 'medium18' | 'extra41' | 'super56'
	children: React.ReactNode
}
// [styles.paragraph_size_super]: size === 'super56',
