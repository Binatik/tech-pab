import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { IWithLayoutProps } from './WithLayouts.interface'

function WithLayouts({ children }: IWithLayoutProps) {
	return (
		<div className="wrapper">
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export { WithLayouts }
