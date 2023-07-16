import classNames from 'classnames'
import { Heading, Link, Paragraph } from '../../../entities'
import { ICardsPrimaryProps } from './CardsPrimary.interface'
import styles from './CardsPrimary.module.css'

function CardsPrimary({ cards, title, size }: ICardsPrimaryProps) {
	return (
		<>
			<Heading className={styles.cards_title} heading="h2" mode="primary" size="extra41">
				{title}
			</Heading>
			<div className={styles.cards}>
				{cards ? (
					cards.map((card) => (
						<div
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
								{card.pathPage && (
									<Link href={card.pathPage} mode="secondary" size="medium">
										<Paragraph mode="secondary" size="small16">
											Подробнее
										</Paragraph>
									</Link>
								)}
							</div>
						</div>
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
