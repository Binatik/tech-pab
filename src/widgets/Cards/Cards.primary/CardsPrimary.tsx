import classNames from 'classnames'
import { Frame, Heading, Link, Paragraph } from '../../../entities'
import { ICardsPrimaryProps } from './CardsPrimary.interface'
import styles from './CardsPrimary.module.css'
import { useContext } from 'react'
import { ModalContext } from '../../../app/contexts/Modal/ModalContextProvider'

function useContextType() {
	const contextType = useContext(ModalContext)

	if (!contextType) {
		throw new Error('Провайдер не был добавлен в дерево React')
	}

	return contextType
}

function CardsPrimary({ cards, title, size }: ICardsPrimaryProps) {
	const { openModal } = useContextType()

	function activeModal(
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		content: React.ReactNode
	): void {
		event.preventDefault()
		openModal(content)
	}

	return (
		<>
			<Heading className={styles.cards_title} heading="h2" mode="primary" size="extra41">
				{title}
			</Heading>
			<div className={styles.cards}>
				{cards ? (
					cards.map((card) => (
						<Frame
							size="medium"
							key={card.id}
							className={classNames(styles.card, {
								[styles.card_size_1]: size === '1',
								[styles.card_size_2]: size === '2',
							})}>
							<div className={styles.card_inner}>
								<Paragraph
									className={styles.card_top_paragraph}
									mode="primary"
									size="small16">
									{card.topText}
								</Paragraph>
								<Heading
									className={styles.card_top_title}
									heading="h2"
									size="medium18"
									mode="primary">
									{card.title}
								</Heading>
								<Paragraph
									className={styles.card_bottom_paragraph}
									mode="primary"
									size="medium18">
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
									<Link
										href={card.pathPage}
										target="_blank"
										mode="secondary"
										size="medium">
										<Paragraph mode="secondary" size="small16">
											Подробнее
										</Paragraph>
									</Link>
								)}
							</div>
						</Frame>
					))
				) : (
					<Paragraph mode="primary" size="small16">
						Нет данных
					</Paragraph>
				)}
			</div>
		</>
	)
}

export { CardsPrimary }
