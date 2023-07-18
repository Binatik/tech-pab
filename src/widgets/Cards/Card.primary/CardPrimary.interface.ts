import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ICardPrimary } from '../../../app/types'

export interface ICardsPrimaryProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	card: ICardPrimary
	columns: '1' | '2'
}
