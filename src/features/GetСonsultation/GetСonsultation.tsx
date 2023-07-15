import { Link, Paragraph } from '../../entities'

function GetConsultation() {
	function getConsultation(): void {
		console.log('Вы теcтово выбрали конcультацию')
	}
	return (
		<Link onClick={getConsultation} strong href="#" mode="secondary" size="large">
			<Paragraph mode="secondary" size="small16">
				Получить конcультацию
			</Paragraph>
		</Link>
	)
}

export { GetConsultation }
