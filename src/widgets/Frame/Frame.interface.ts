import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IFrameProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string
	text: string
}
