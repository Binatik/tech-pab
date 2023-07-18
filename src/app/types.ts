export interface IListItem {
	id: string
	text: string
	href: string
}

export interface ICardPrimary {
	id: string
	topText: string
	title: string
	bottomText: string
	pathPage: string
	content?: React.ReactNode
}

export interface IProduct {
	id: string
	title: string
	text: string
	icon: React.ReactNode
}
