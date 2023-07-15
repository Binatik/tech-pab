import classNames from 'classnames'
import { Heading, Paragraph } from '../../entities'
import { IFrameProps } from './Frame.interface'
import styles from './Frame.module.css'
import { GetConsultation } from '../../features'

function Frame({ text, title }: IFrameProps) {
	return (
		<div className={styles.frame}>
			<div className={styles.frame_item}>
				<Heading
					className={styles.frame_heading}
					heading="h2"
					mode="secondary"
					size="extra41">
					{title}
				</Heading>
				<Paragraph className={styles.frame_paragraph} mode="secondary" size="medium18">
					{text}
				</Paragraph>
			</div>
			<div className={classNames(styles.frame_item, styles.frame_button)}>
				<GetConsultation />
			</div>
		</div>
	)
}

export { Frame }
