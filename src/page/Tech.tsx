import { Banner, Frame } from '../widgets'

function Tech() {
	return (
		<main className="page">
			<div className="bg-black">
				<div className="container">
					<Banner />
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
