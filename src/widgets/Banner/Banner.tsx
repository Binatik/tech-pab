import classnames from 'classnames'
import { Paragraph } from '../../entities'
import leadspace2 from '../../assets/leadspace2.png'
import styles from './Banner.module.css'
import { IBanerProps } from './Banner.interface'

function Banner({ className }: IBanerProps) {
	return (
		<div className={classnames(styles.banner, className)}>
			<div>
				<Paragraph className={styles.banner_paragraph} mode="secondary" size="super56">
					Практические курсы для специалистов по информационной безопасности
				</Paragraph>
				<Paragraph className={styles.banner_paragraph} mode="secondary" size="large20">
					Учим тому, что точно пригодится в работе
				</Paragraph>
			</div>
			<img className={styles.banner_img} src={leadspace2} alt="leadspace" />
		</div>
	)
}

export { Banner }
