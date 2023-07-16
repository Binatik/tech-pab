import { ICardPrimary } from '../app/types'
import { Banner, CardsPrimary, Frame } from '../widgets'

const cards: ICardPrimary[] = [
	{
		id: '111-222',
		bottomText: 'Получите навыки, необходимые для проактивного реагирования на киберугрозы',
		title: 'Threat Intelligence',
		topText: 'Практический курс по киберразведке',
		pathPage: '#',
	},

	{
		id: '111-333',
		bottomText: 'Получите навыки, необходимые для проактивного реагирования на киберугрозы',
		title: 'Threat Intelligence',
		topText: 'Практический курс по киберразведке',
		pathPage: '#',
	},

	{
		id: '111-444',
		bottomText: 'Получите навыки, необходимые для проактивного реагирования на киберугрозы',
		title: 'Threat Intelligence',
		topText: 'Практический курс по киберразведке',
		pathPage: '#',
	},

	{
		id: '111-555',
		bottomText: 'Получите навыки, необходимые для проактивного реагирования на киберугрозы',
		title: 'Threat Intelligence',
		topText: 'Практический курс по киберразведке',
		pathPage: '#',
	},

	{
		id: '111-666',
		bottomText: 'Получите навыки, необходимые для проактивного реагирования на киберугрозы',
		title: 'Threat Intelligence',
		topText: 'Практический курс по киберразведке',
		pathPage: '#',
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
			<div className="bg-white space_middle">
				<div className="container">
					<section className="training">
						<CardsPrimary title="Программы обучения" size="2" cards={cards} />
					</section>
				</div>
			</div>
			<div className="bg-white">
				<div className="container">
					<Frame
						title="Не знаете, какое направление выбрать?"
						text="Оставьте заявку на бесплатную консультацию и мы поможем"
					/>
				</div>
			</div>
		</main>
	)
}

export { Tech }
