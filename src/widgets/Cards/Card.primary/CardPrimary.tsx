import classNames from 'classnames'
import { Frame, Heading, Link, Paragraph } from '../../../entities'
import { ICardsPrimaryProps } from './CardPrimary.interface'
import { useContext } from 'react'
import { ModalContext } from '../../../app/contexts/Modal/ModalContextProvider'
import styles from './CardPrimary.module.css'

function useContextType() {
	const contextType = useContext(ModalContext)

	if (!contextType) {
		throw new Error('Провайдер не был добавлен в дерево React')
	}

	return contextType
}

function CardPrimary({ card, columns }: ICardsPrimaryProps) {
	const { openModal } = useContextType()

	function activeModal(
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		content: React.ReactNode
	): void {
		event.preventDefault()
		openModal(content)
	}

	return (
		<Frame
			size="medium"
			key={card.id}
			className={classNames(styles.card, {
				[styles.card_columns_1]: columns === '1',
				[styles.card_columns_2]: columns === '2',
			})}>
			<div className={styles.card_inner}>
				<Paragraph className={styles.card_top_paragraph} mode="primary" size="small16">
					{card.topText}
				</Paragraph>
				<Heading
					className={styles.card_top_title}
					heading="h3"
					size="medium18"
					mode="primary">
					{card.title}
				</Heading>
				<Paragraph className={styles.card_bottom_paragraph} mode="primary" size="medium18">
					{card.bottomText}
				</Paragraph>
				{card.content ? (
					<Link
						className={styles.order}
						onClick={(event) => activeModal(event, card.content)}
						href="#"
						mode="secondary"
						size="medium">
						<Paragraph mode="secondary" size="small16">
							Подробнее
						</Paragraph>
					</Link>
				) : (
					<Link href={card.pathPage} target="_blank" mode="secondary" size="medium">
						<Paragraph mode="secondary" size="small16">
							Подробнее
						</Paragraph>
					</Link>
				)}
			</div>
		</Frame>
	)
}

export { CardPrimary }
