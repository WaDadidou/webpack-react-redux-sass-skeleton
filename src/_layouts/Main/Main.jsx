import React from 'react'
import {Provider} from 'react-redux'
import store from '/src/redux/store'
import Hello from '../../_components/Hello/Hello'

const Main = () => {

	return (
		<Provider store={store}>
			<div className="Main">
				<Hello/>
			</div>
		</Provider>
	)
}

export default Main
