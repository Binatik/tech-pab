import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ICardPrimary } from '../../../app/types'

export interface ICardsPrimaryProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string
	cards: ICardPrimary[]
	size: '1' | '2'
}
