import { FC, PropsWithChildren } from 'react'

import styles from './Test.module.scss'

type TestProps = {}

const Test: FC<PropsWithChildren<TestProps>> = () => {
	return <div className={styles.test}>Test</div>
}

export default Test
