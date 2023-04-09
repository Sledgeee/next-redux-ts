import { FC } from 'react'

import styles from './LoadingIndicator.module.scss'

const LoadingIndicator: FC = () => {
	return (
		<div className={styles.ldsRipple}>
			<div></div>
			<div></div>
		</div>
	)
}

export default LoadingIndicator
