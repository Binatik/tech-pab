import { Logo, Paragraph } from '../../../entities'

function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<Logo id="secondary" size="small" wide={false} />
				<Paragraph mode="primary" size="small16">
					Онлайн-курсы по информационной безопасности
				</Paragraph>
				<Paragraph mode="primary" size="small16">
					© 2023 ООО "Инсека"
				</Paragraph>
			</div>
		</footer>
	)
}

export { Footer }
