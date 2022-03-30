import {INITIAL_STATE} from './initialState'

import {
	ACTION_XXXX
} from './actionTypes'

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case ACTION_XXXX:
		return {
			...state,
			stateProperty: action.payload.param
		}

	default:
		return state
	}
}

export default reducer


