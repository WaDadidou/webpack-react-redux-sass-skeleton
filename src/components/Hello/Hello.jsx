import React from 'react'
import s from './Hello.scss'

const Hello = () => {

	return (
		<div className={s.container}>
			<div className={s.message}> Hello ! </div>
		</div>
	)
}

export default Hello
