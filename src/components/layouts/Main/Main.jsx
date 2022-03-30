import React from 'react'
import {Provider} from 'react-redux'
import store from '/src/redux/store'
import Hello from '../../Hello/Hello'
import s from './Main.scss'

const Main = () => {

	return (
		<Provider store={store}>
			<div className={s.container}>
				<Hello/>
			</div>
		</Provider>
	)
}

export default Main
