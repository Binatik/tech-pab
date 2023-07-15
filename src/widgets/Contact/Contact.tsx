import { Heading, Link, Paragraph } from '../../entities'
import styles from './Contact.module.css'

function Contact() {
	return (
		<>
			<Link className={styles.contact_link} size="none" mode="inline" href="tel:88002002534">
				<Heading heading="h2" mode="primary" size="medium18">
					8 800 200 25 34
				</Heading>
			</Link>
			<Paragraph className={styles.contact_text} mode="primary" size="small16">
				звонок по России бесплатный
			</Paragraph>
			<Paragraph className={styles.contact_bottom} mode="primary" size="small16">
				info@inseca.tech
			</Paragraph>
		</>
	)
}

export { Contact }
