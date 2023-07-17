import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IButtonCloseProps
	extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
	mode: 'primary'
	size: 'medium'
}
