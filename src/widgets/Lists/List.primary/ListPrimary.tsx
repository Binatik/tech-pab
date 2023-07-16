import { Heading, Link, Paragraph } from '../../../entities'
import { IListPrimaryProps } from './ListPrimary.interface'
import styles from './ListPrimary.module.css'

function List({ list, title }: IListPrimaryProps) {
	return (
		<ul className={styles.list_items}>
			<li>
				<Heading heading="h2" mode="primary" size="small16">
					{title}
				</Heading>
			</li>
			{list.map((item) => (
				<li key={item.id} className={styles.list_item}>
					<Link size="medium" mode="inline" href={item.href}>
						<Paragraph mode="primary" size="small16">
							{item.text}
						</Paragraph>
					</Link>
				</li>
			))}
		</ul>
	)
}

export { List }
