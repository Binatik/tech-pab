import classNames from 'classnames'
import { ICardPrimary, IProduct } from '../app/types'
import { Heading, IconBlock, Paragraph } from '../entities'
import { GetConsultation } from '../features'
import { Banner, CardPrimary } from '../widgets'
import { ReactComponent as Monitor } from '../assets/monitor.svg'
import certificate from '../assets/certificate.png'
import styles from './Tech.module.css'

const products: IProduct[] = [
	{
		id: '111-222',
		title: 'Онлайн вебинары',
		text: `Далеко-далеко за словесными горами в стране гласных и
согласных живут, рыбные тексты. Речью парадигматическая
маленькая решила, обеспечивает пор сих подзаголовок
переписывается но сбить безорфографичный рукописи деревни
рекламных?`,
		icon: <Monitor />,
	},
	{
		id: '111-333',
		title: 'Онлайн вебинары',
		text: `Далеко-далеко за словесными горами в стране гласных и
согласных живут, рыбные тексты. Речью парадигматическая
маленькая решила, обеспечивает пор сих подзаголовок
переписывается но сбить безорфографичный рукописи деревни
рекламных?`,
		icon: <Monitor />,
	},
	{
		id: '111-444',
		title: 'Онлайн вебинары',
		text: `Далеко-далеко за словесными горами в стране гласных и
согласных живут, рыбные тексты. Речью парадигматическая
маленькая решила, обеспечивает пор сих подзаголовок
переписывается но сбить безорфографичный рукописи деревни
рекламных?`,
		icon: <Monitor />,
	},
	{
		id: '111-555',
		title: 'Онлайн вебинары',
		text: `Далеко-далеко за словесными горами в стране гласных и
согласных живут, рыбные тексты. Речью парадигматическая
маленькая решила, обеспечивает пор сих подзаголовок
переписывается но сбить безорфографичный рукописи деревни
рекламных?`,
		icon: <Monitor />,
	},
]

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
			<div className={styles.product}>
				<div className="container">
					<div className={styles.product_content}>
						<div className={styles.product_list}>
							{products.map((product) => (
								<div key={product.id} className={styles.product_item}>
									<IconBlock position="top" icon={product.icon}>
										<Heading heading="h2" mode="primary" size="medium18">
											{product.title}
										</Heading>
										<Paragraph mode="primary" size="medium18">
											{product.text}
										</Paragraph>
									</IconBlock>
								</div>
							))}
						</div>
						<div className={styles.certificate}>
							<Paragraph mode="primary" size="medium18">
								После успешного прохождения курса выдается электронный сертификат
							</Paragraph>
							<img
								className={styles.certificate_img}
								src={certificate}
								alt="certificate"
							/>
						</div>
					</div>
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
			<section className={styles.bighole}>
				<div className="container">
					<Heading
						className={styles.bighole_title}
						heading="h2"
						mode="primary"
						size="extra41">
						Как проходит обучение
					</Heading>
					<Paragraph
						className={styles.bighole_description}
						mode="primary"
						size="medium18">
						Далеко-далеко за словесными горами, в стране гласных и согласных живут
						рыбные тексты. Агентство диких приставка вскоре но, пояс обеспечивает
						большой, заглавных дороге, живет решила от всех реторический города!
					</Paragraph>
					<Paragraph
						className={styles.bighole_description}
						mode="primary"
						size="medium18">
						Далеко-далеко за словесными горами, в стране гласных и согласных живут
						рыбные тексты. Агентство диких приставка вскоре но, пояс обеспечивает
						большой, заглавных дороге, живет решила от всех реторический города!
					</Paragraph>
					<Paragraph className={styles.bighole_info} mode="primary" size="extra36" italic>
						Чтобы выполнить задачи и обеспечить безопасность «Bighole», вам нужно
						столкнуться с такими формами обучения:
					</Paragraph>
					<IconBlock position="left" icon={<Monitor />}>
						<Heading heading="h2" mode="primary" size="medium18">
							Лекции
						</Heading>
						<Paragraph mode="primary" size="medium18">
							15 лекций по 40 минут
						</Paragraph>
						<Paragraph italic mode="primary" size="medium18">
							Далеко-далеко за словесными горами в стране гласных и согласных.
						</Paragraph>
					</IconBlock>

					<IconBlock position="left" icon={<Monitor />}>
						<Heading heading="h2" mode="primary" size="medium18">
							Онлайн-вебинары с наставником
						</Heading>
						<Paragraph mode="primary" size="medium18">
							10 лекций по 90 минут
						</Paragraph>
						<Paragraph italic mode="primary" size="medium18">
							Далеко-далеко за словесными горами в стране гласных и согласных.
						</Paragraph>
						<Paragraph mode="primary" size="medium18">
							● Далеко-далеко за словесными горами в стране гласных и согласных.
						</Paragraph>
						<Paragraph mode="primary" size="medium18">
							● Далеко-далеко за словесными горами в стране гласных и согласных.
						</Paragraph>
						<Paragraph mode="primary" size="medium18">
							● Далеко-далеко за словесными горами в стране гласных и согласных.
						</Paragraph>
					</IconBlock>
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
