import classnames from 'classnames'
import { Heading, Paragraph } from '../../entities'
import leadspace2 from '../../assets/leadspace2.png'
import styles from './Banner.module.css'
import { IBanerProps } from './Banner.interface'
import { GetProgram } from '../../features'

function Banner({ className }: IBanerProps) {
	return (
		<div className={classnames(styles.banner, className)}>
			<div className={classnames(styles.banner_inner)}>
				<Heading
					className={styles.banner_heading}
					mode="secondary"
					size="super56"
					heading="h1">
					Практические курсы для специалистов по информационной безопасности
				</Heading>
				<Paragraph className={styles.banner_paragraph} mode="secondary" size="large20">
					Учим тому, что точно пригодится в работе
				</Paragraph>
				<GetProgram />
			</div>
			<img className={styles.banner_img} src={leadspace2} alt="leadspace" />
		</div>
	)
}

export { Banner }
