import React from 'react'
import * as ReactDOM from 'react-dom'
import store from './redux/store'
import './sass/index.scss'
import Main from './components/layouts/Main/Main'

ReactDOM.render((
	<Main store={store}/>
), document.getElementById('root'))