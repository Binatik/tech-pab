import classNames from 'classnames'
import { Logo, Paragraph } from '../../../entities'
import styles from './Footer.module.css'
import { List } from '../../../widgets'
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
		text: 'Threat Intelligence',
	},
	{
		id: '111-444',
		href: '#',
		text: 'Threat Intelligence',
	},
	{
		id: '111-555',
		href: '#',
		text: 'Threat Intelligence',
	},
]

function Footer() {
	return (
		<footer className="footer">
			<div className={classNames('container', styles.footer_content)}>
				<div className={styles.footer_card}>
					<Logo id="secondary" size="small" wide={false} />
					<Paragraph className={styles.footer_info} mode="primary" size="small16">
						Онлайн-курсы по информационной безопасности
					</Paragraph>
					<Paragraph mode="primary" size="small16">
						© 2023 ООО "Инсека"
					</Paragraph>
				</div>
				<div className={styles.footer_card}>
					<List list={list} title="курсы" />
					<List list={list} title="О компании" />
				</div>
			</div>
		</footer>
	)
}

export { Footer }
