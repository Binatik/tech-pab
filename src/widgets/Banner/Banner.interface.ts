import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IBanerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	x?: string
}
