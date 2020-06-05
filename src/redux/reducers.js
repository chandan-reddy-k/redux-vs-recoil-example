import { INCREMENT_COUNT } from "./actions";

const initialState = {
	count: 0
}

function counterReducer(state = initialState, action) {
	switch (action.type) {
		case INCREMENT_COUNT:
			console.log('here')
			return {
				...state,
				count: ++state.count,
			}
		default:
			return state
	}
}

export default counterReducer;