import { Link, Paragraph } from '../../entities'

function GetProgram() {
	function getProgram(): void {
		console.log('Вы тестово выбрали программу')
	}
	return (
		<Link onClick={getProgram} strong href="#program" mode="secondary" size="large">
			<Paragraph mode="secondary" size="small16">
				Выбрать программу
			</Paragraph>
		</Link>
	)
}

export { GetProgram }
