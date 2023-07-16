import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IFrameProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size: 'medium'
	children: React.ReactNode
}
