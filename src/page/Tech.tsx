import classNames from 'classnames'
import { ICardPrimary } from '../app/types'
import { Heading, Paragraph } from '../entities'
import { GetConsultation } from '../features'
import { Banner, CardPrimary } from '../widgets'
import styles from './Tech.module.css'

const cards: ICardPrimary[] = [
	{
		id: '111-222',
		bottomText: 'Получите навыки, необходимые для проактивного реагирования на киберугрозы',
		title: 'Threat Intelligence',
		topText: 'Практический курс по киберразведке',
		pathPage: 'https://api.jsonserve.com/Qsr28s',
	},

	{
		id: '111-333',
		bottomText: 'Получите навыки, необходимые для проактивного реагирования на киберугрозы',
		title: 'Threat Intelligence',
		topText: 'Практический курс по киберразведке',
		pathPage: 'https://api.jsonserve.com/Qsr28s',
	},

	{
		id: '111-444',
		bottomText: 'Получите навыки, необходимые для проактивного реагирования на киберугрозы',
		title: 'Threat Intelligence',
		topText: 'Практический курс по киберразведке',
		pathPage: 'https://api.jsonserve.com/Qsr28s',
	},

	{
		id: '111-555',
		bottomText: 'Получите навыки, необходимые для проактивного реагирования на киберугрозы',
		title: 'Threat Intelligence',
		topText: 'Практический курс по киберразведке',
		pathPage: 'https://api.jsonserve.com/Qsr28s',
	},

	{
		id: '111-666',
		bottomText: 'Получите навыки, необходимые для проактивного реагирования на киберугрозы',
		title: 'Threat Intelligence',
		topText: 'Практический курс по киберразведке',
		pathPage: 'https://api.jsonserve.com/Qsr28s',
		content: (
			<Heading heading="h2" mode="primary" size="extra41">
				Забронировать место в группе
			</Heading>
		),
	},
]

function Tech() {
	return (
		<main className="page">
			<div className="bg-black">
				<div className="container">
					<Banner />
				</div>
			</div>
			<section id="training" className={styles.training}>
				<div className="container">
					<Heading
						className={styles.training_title}
						heading="h2"
						mode="primary"
						size="extra41">
						Программы обучения
					</Heading>
					<div className={styles.training_cards}>
						{cards.length > 0 ? (
							cards.map((card) => (
								<CardPrimary key={card.id} columns="2" card={card} />
							))
						) : (
							<Paragraph mode="primary" size="small16">
								Нет данных
							</Paragraph>
						)}
					</div>
				</div>
			</section>

			<div className="bg-white">
				<div className="container">
					<div className={styles.consultation}>
						<div className={styles.consultation_item}>
							<Heading
								className={styles.consultation_heading}
								heading="h2"
								mode="secondary"
								size="extra41">
								Не знаете, какое направление выбрать?
							</Heading>
							<Paragraph
								className={styles.consultation_paragraph}
								mode="secondary"
								size="medium18">
								Оставьте заявку на бесплатную консультацию и мы поможем
							</Paragraph>
						</div>
						<div
							className={classNames(
								styles.consultation_item,
								styles.consultation_button
							)}>
							<GetConsultation />
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export { Tech }
