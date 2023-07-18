import classNames from 'classnames'
import { IParagraphProps } from './Paragraph.interface'
import styles from './Paragraph.module.css'

function Paragraph({ mode, size, italic, className, children }: IParagraphProps) {
	return (
		<p
			className={classNames(styles.paragraph, className, {
				[styles.paragraph_italic]: italic,
				[styles.paragraph_size_small]: size === 'small16',
				[styles.paragraph_size_medium]: size === 'medium18',
				[styles.paragraph_size_large]: size === 'large20',
				[styles.paragraph_size_extra]: size === 'extra36',
				[styles.paragraph_primary]: mode === 'primary',
				[styles.paragraph_secondary]: mode === 'secondary',
			})}>
			{children}
		</p>
	)
}

export { Paragraph }
