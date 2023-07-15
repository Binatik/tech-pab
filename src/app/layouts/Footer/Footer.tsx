import classNames from 'classnames'
import { Logo, Paragraph } from '../../../entities'
import styles from './Footer.module.css'
import { Contact, List } from '../../../widgets'
import { IListItem } from '../../types'

const list: IListItem[] = [
	{
		id: '111-222',
		href: '#',
		text: 'Threat Intelligence',
	},
	{
		id: '111-333',
		href: '#',
		text: 'Threat Hunter',
	},
	{
		id: '111-444',
		href: '#',
		text: 'Malware analyst',
	},
	{
		id: '111-555',
		href: '#',
		text: 'Digital Forensics & Incident Response',
	},
]

function Footer() {
	return (
		<footer className="footer">
			<div className={classNames('container')}>
				<div className={styles.footer_content}>
					<div className={styles.footer_card}>
						<div className={styles.card_top}>
							<Logo id="secondary" size="small" wide={false} />
							<Paragraph className={styles.footer_info} mode="primary" size="small16">
								Онлайн-курсы по информационной безопасности
							</Paragraph>
						</div>
					</div>
					<div className={styles.footer_card}>
						<List list={list} title="Курсы" />
						<List list={list} title="О компании" />
					</div>
					<div className={styles.footer_card}>
						<Contact />
					</div>
				</div>
				<Paragraph className={styles.foter_cop} mode="primary" size="small16">
					© 2023 ООО "Инсека"
				</Paragraph>
			</div>
		</footer>
	)
}

export { Footer }
